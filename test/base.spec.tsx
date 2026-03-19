import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import VirtualTable, { ColumnProps, Type } from '../src/index';

const TEXT = '测试文本内容';

const baseColumns: ColumnProps[] = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '内容',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: Type.InputName,
  },
];

const renderTable = (props = {}) =>
  render(<VirtualTable columns={baseColumns} {...props} />);

const addRow = async (
  user: ReturnType<typeof userEvent.setup>,
  text = '新增一行',
) => {
  await user.click(screen.getByText(text));
};

const getDeleteButtons = () => screen.findAllByText('删除');

const expectRowCount = async (expected: number) => {
  const deleteButtons = await getDeleteButtons();
  expect(deleteButtons.length).toBe(expected);
};

describe('虚拟表格表单基本使用', () => {
  describe('空数据渲染', () => {
    it('无数据时展示暂无数据及空数据占位符', () => {
      const { baseElement } = renderTable({ value: [] });
      expect(screen.queryByText('暂无数据')).toBeInTheDocument();
      expect(screen.queryByText('新增一行')).toBeInTheDocument();
      expect(baseElement).not.toHaveClass('doraemon-empty-image');
    });
  });

  describe('添加行', () => {
    it('从空数据添加多行', async () => {
      renderTable({ value: [] });
      const user = userEvent.setup();

      for (let i = 0; i < 3; i++) {
        await addRow(user, i === 0 ? '新增一行' : '+ 添加行');
        expect(await screen.findByText(String(i + 1))).toBeVisible();
      }

      await expectRowCount(3);
    });

    it('添加10行虚拟渲染正常', async () => {
      renderTable({ value: [] });
      const user = userEvent.setup();

      for (let i = 0; i < 10; i++) {
        await addRow(user, i === 0 ? '新增一行' : '+ 添加行');
        await waitFor(() => {
          expect(screen.getByText(String(i + 1))).toBeVisible();
        });
      }

      const deleteButtons = await getDeleteButtons();
      expect(deleteButtons.length).toBeLessThan(20);
    }, 20000);
  });

  describe('删除行', () => {
    it('添加后删除到底', async () => {
      const { baseElement } = renderTable({ value: [] });
      const user = userEvent.setup();

      await addRow(user);
      expect(screen.getByText('1')).toBeVisible();
      await user.click(screen.getByText('删除'));

      expect(screen.queryByText('暂无数据')).toBeInTheDocument();
    });

    it('添加多行后逐个删除', async () => {
      const { baseElement } = renderTable({ value: [] });
      const user = userEvent.setup();

      for (let i = 0; i < 3; i++) {
        await addRow(user, i === 0 ? '新增一行' : '+ 添加行');
      }

      for (let i = 0; i < 3; i++) {
        const deleteButtons = await getDeleteButtons();
        await user.click(deleteButtons[0]);
      }

      expect(screen.queryByText('暂无数据')).toBeInTheDocument();
    });
  });

  describe('有数据渲染', () => {
    it('defaultValue 非受控模式', async () => {
      renderTable({ defaultValue: [{ type: TEXT }] });

      await waitFor(() => {
        expect(screen.getByDisplayValue(TEXT)).toBeVisible();
        expect(screen.getByText('1')).toBeVisible();
      });

      const deleteButtons = await getDeleteButtons();
      expect(deleteButtons.length).toBe(1);
    });

    it('value 受控模式', async () => {
      renderTable({ value: [{ type: TEXT }] });

      await waitFor(() => {
        expect(screen.getByDisplayValue(TEXT)).toBeVisible();
        expect(screen.getByText('1')).toBeVisible();
      });

      const deleteButtons = await getDeleteButtons();
      expect(deleteButtons.length).toBe(1);
    });
  });

  describe('受控/非受控模式删除到底', () => {
    const deleteAllRows = async (user: ReturnType<typeof userEvent.setup>) => {
      let hasDelete = true;
      while (hasDelete) {
        const deleteButtons = await screen.findAllByText('删除');
        if (deleteButtons.length === 0) {
          hasDelete = false;
        } else {
          await user.click(deleteButtons[0]);
        }
      }
    };

    it.each([
      { mode: 'defaultValue 非受控', data: [{ type: TEXT }] },
      { mode: 'value 受控', data: [{ type: TEXT }] },
    ])('$mode - 1行删除到底', async ({ data }) => {
      const { baseElement } = renderTable({
        [data.length ? 'value' : 'defaultValue']: data,
      });
      const user = userEvent.setup();

      await user.click(screen.getByText('删除'));
      await waitFor(() => {
        expect(screen.queryByText('暂无数据')).toBeInTheDocument();
      });
    });

    it.each([
      {
        mode: 'defaultValue 非受控',
        data: new Array(3).fill({ type: TEXT }),
        timeout: 2000,
      },
      {
        mode: 'value 受控',
        data: new Array(3).fill({ type: TEXT }),
        timeout: 2000,
      },
    ])('$mode - 3行删除到底', async ({ data, timeout }) => {
      const { baseElement } = renderTable({ value: data });
      const user = userEvent.setup();

      await deleteAllRows(user);

      await waitFor(
        () => {
          expect(screen.queryByText('暂无数据')).toBeInTheDocument();
        },
        { timeout },
      );
    });

    it.each([
      {
        mode: 'defaultValue 非受控',
        data: new Array(100).fill({ type: TEXT }),
        timeout: 50000,
      },
      {
        mode: 'value 受控',
        data: new Array(100).fill({ type: TEXT }),
        timeout: 50000,
      },
    ])(
      '$mode - 100行删除到底',
      async ({ data, timeout }) => {
        renderTable({ value: data });
        const user = userEvent.setup();

        await deleteAllRows(user);

        await waitFor(
          () => {
            expect(screen.queryByText('暂无数据')).toBeInTheDocument();
          },
          { timeout },
        );
      },
      80000,
    );
  });

  describe('onChange 回调', () => {
    it('空数据添加行触发 onChange', async () => {
      const mockOnChange = jest.fn();
      renderTable({ value: [], onChange: mockOnChange });
      const user = userEvent.setup();

      await addRow(user);

      await waitFor(
        () => {
          expect(mockOnChange).toHaveBeenCalledWith([{ ssid: 0 }]);
        },
        { timeout: 2000 },
      );
    });

    it('输入内容触发 onChange', async () => {
      const mockOnChange = jest.fn();
      const { container } = renderTable({ value: [], onChange: mockOnChange });
      const user = userEvent.setup();

      await addRow(user);

      await waitFor(
        () => {
          const input = container.querySelector('.doraemon-input');
          if (!input) throw new Error('不存在input');

          fireEvent.change(input, { target: { value: 'hello world' } });
          expect(mockOnChange).toHaveBeenCalledWith([
            { ssid: 0, type: 'hello world' },
          ]);
        },
        { timeout: 2000 },
      );
    });

    it('删除行触发 onChange', async () => {
      const mockOnChange = jest.fn();
      const { container } = renderTable({ value: [], onChange: mockOnChange });
      const user = userEvent.setup();

      await addRow(user);

      await waitFor(() => {
        const input = container.querySelector('.doraemon-input');
        if (!input) throw new Error('不存在input');
        fireEvent.change(input, { target: { value: 'hello world' } });
      });

      await user.click(screen.getByText('删除'));

      expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    it('有数据时添加行触发 onChange', async () => {
      const mockOnChange = jest.fn();
      const { container } = renderTable({
        value: [{ type: TEXT }],
        onChange: mockOnChange,
      });
      const user = userEvent.setup();

      await addRow(user, '+ 添加行');

      await waitFor(
        () => {
          const inputs = container.querySelectorAll('.doraemon-input');
          if (!inputs?.length) throw new Error('不存在input');

          fireEvent.change(inputs[1], { target: { value: 'hello world' } });
          expect(mockOnChange).toHaveBeenCalledWith([
            { ssid: 0, type: TEXT },
            { ssid: 1, type: 'hello world' },
          ]);
        },
        { timeout: 2000 },
      );
    });

    it('有数据时删除所有行触发 onChange', async () => {
      const mockOnChange = jest.fn();
      renderTable({ value: [{ type: TEXT }], onChange: mockOnChange });
      const user = userEvent.setup();

      let hasDelete = true;
      while (hasDelete) {
        const deleteButtons = await screen.findAllByText('删除');
        if (deleteButtons.length === 0) {
          hasDelete = false;
        } else {
          await user.click(deleteButtons[0]);
        }
      }

      expect(mockOnChange).toHaveBeenCalledWith([]);
    });
  });
});
