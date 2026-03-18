import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import VirtualTable, { ColumnProps, Type } from '../src/index';

// beforeEach(() => {
//   jest.useFakeTimers();
// });

// afterEach(() => {
//   jest.runOnlyPendingTimers();
//   jest.useRealTimers();
// });

const toBeEmpty = async (table) => {
  const emptyEle1 = await screen.queryByText('暂无数据，');
  if (emptyEle1) {
    expect(emptyEle1).toBeVisible();
  }
  const emptyEle2 = await screen.queryByText('新增一行');
  if (emptyEle2) {
    expect(emptyEle2).toBeVisible();
  }

  if (table) {
    expect(table).not.toHaveClass('doraemon-empty-image');
    expect(table).not.toHaveClass('ReactVirtualized__Table__row');
  }
};

const columns: ColumnProps[] = [
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
const TEXT = '我是什么人我是什么人我是什么人我是什么人我是什么人';

describe('虚拟表格表单基本使用', () => {
  describe('组件渲染-空数据', () => {
    it('无数据渲染 & 展示暂无数据以及空数据占位符', async () => {
      const { baseElement } = render(<VirtualTable columns={columns} value={[]} />);

      toBeEmpty(baseElement);
    });
  });

  describe('从空数据 -> 有数据', () => {
    it('添加1行', async () => {
      render(<VirtualTable columns={columns} value={[]} />);
      const user = userEvent.setup();
      await user.click(screen.getByText('新增一行'));
      const delArr = await screen.findAllByText('删除');

      expect(delArr.length).toBe(1);
      expect(screen.getByText('1')).toBeVisible();
    });

    it('添加2行', async () => {
      const lens = 2;

      render(<VirtualTable columns={columns} value={[]} />);
      const user = userEvent.setup();
      for (const [index] of new Array(lens).fill(null).entries()) {
        await user.click(screen.getByText(index === 0 ? '新增一行' : '+ 添加行'));
        const number = await screen.findByText(String(index + 1));
        expect(number).toBeVisible();
      }

      const delArr = await screen.findAllByText('删除');
      expect(delArr.length).toBe(lens);
    });

    it('添加3行', async () => {
      const lens = 3;

      render(<VirtualTable columns={columns} value={[]} />);
      const user = userEvent.setup();
      for (const [index] of new Array(lens).fill(null).entries()) {
        await user.click(screen.getByText(index === 0 ? '新增一行' : '+ 添加行'));
        const number = await screen.findByText(String(index + 1));
        expect(number).toBeVisible();
      }

      const delArr = await screen.findAllByText('删除');
      expect(delArr.length).toBe(lens);
    });

    it('添加10行', async () => {
      const lens = 10;

      render(<VirtualTable columns={columns} value={[]} />);
      const user = userEvent.setup();

      for (const [index] of new Array(lens).fill(null).entries()) {
        await user.click(screen.getByText(index === 0 ? '新增一行' : '+ 添加行'));

        await waitFor(async () => {
          const number = screen.queryByText(String(index + 1));
          expect(number).toBeVisible();
        });
      }

      await waitFor(async () => {
        const delArr = await screen.findAllByText('删除');
        expect(delArr.length).toBeLessThan(20);
      });
    }, 20000);
  });

  describe('从空数据 -> 有数据 -> 一步步删除到无', () => {
    it('添加1行，然后删除到底', async () => {
      const { baseElement } = render(<VirtualTable columns={columns} value={[]} />);
      const user = userEvent.setup();
      await user.click(screen.getByText('新增一行'));
      const delArr = await screen.findAllByText('删除');

      expect(delArr.length).toBe(1);
      expect(screen.getByText('1')).toBeVisible();

      await user.click(screen.getByText('删除'));
      toBeEmpty(baseElement);
    });

    it('添加2行，然后删除到底', async () => {
      let lens = 2;

      const { baseElement } = render(<VirtualTable columns={columns} value={[]} />);

      const user = userEvent.setup();
      for (const [index] of new Array(lens).fill(null).entries()) {
        await user.click(screen.getByText(index === 0 ? '新增一行' : '+ 添加行'));
        const number = await screen.findByText(String(index + 1));
        expect(number).toBeVisible();
      }

      const delArr = await screen.findAllByText('删除');
      expect(delArr.length).toBe(lens);

      while (lens) {
        const delArr = await screen.findAllByText('删除');
        await user.click(delArr[0]);
        lens--;
      }

      toBeEmpty(baseElement);
    });

    it('添加3行，然后删除到底', async () => {
      let lens = 3;

      const { baseElement } = render(<VirtualTable columns={columns} value={[]} />);

      const user = userEvent.setup();
      for (const [index] of new Array(lens).fill(null).entries()) {
        await user.click(screen.getByText(index === 0 ? '新增一行' : '+ 添加行'));
        const number = await screen.findByText(String(index + 1));
        expect(number).toBeVisible();
      }

      const delArr = await screen.findAllByText('删除');
      expect(delArr.length).toBe(lens);

      while (lens) {
        const delArr = await screen.findAllByText('删除');
        await user.click(delArr[0]);
        lens--;
      }

      toBeEmpty(baseElement);
    });

    it('添加10行，然后删除到底', async () => {
      let lens = 10;

      const { baseElement } = render(<VirtualTable columns={columns} value={[]} />);

      const user = userEvent.setup();
      for (const [index] of new Array(lens).fill(null).entries()) {
        await user.click(screen.getByText(index === 0 ? '新增一行' : '+ 添加行'));
        await waitFor(async () => {
          const number = await screen.findByText(String(index + 1));
          expect(number).toBeVisible();
        });
      }

      const delArr = await screen.findAllByText('删除');
      expect(delArr.length).toBeLessThan(20);

      while (lens) {
        const delArr = await screen.findAllByText('删除');
        await user.click(delArr[0]);
        lens--;
      }

      await waitFor(() => {
        toBeEmpty(baseElement);
      });
    }, 50000);
  });

  describe('组件渲染-有数据', () => {
    it('defaultValue - 非受控', async () => {
      render(<VirtualTable columns={columns} defaultValue={[{ type: TEXT }]} />);

      await waitFor(
        async () => {
          const text = await screen.findByDisplayValue(TEXT);
          expect(text).toBeVisible();

          const delArr = await screen.findAllByText('删除');
          expect(delArr.length).toBe(1);
          const num = await screen.findByText('1');
          expect(num).toBeVisible();
        },
        { timeout: 2000 }
      );
    });

    it('value - 受控', async () => {
      render(<VirtualTable columns={columns} value={[{ type: TEXT }]} />);

      await waitFor(
        async () => {
          const text = await screen.findByDisplayValue(TEXT);
          expect(text).toBeVisible();

          const delArr = await screen.findAllByText('删除');
          expect(delArr.length).toBe(1);
          const num = await screen.findByText('1');
          expect(num).toBeVisible();
        },
        { timeout: 2000 }
      );
    });
  });

  describe('有数据(非受控 - defaultValue) -> 一步步删除到无', () => {
    it('1行，然后删除到底', async () => {
      const { baseElement } = render(<VirtualTable columns={columns} defaultValue={[{ type: TEXT }]} />);

      await waitFor(
        async () => {
          const user = userEvent.setup();
          await user.click(screen.getByText('删除'));
          await toBeEmpty(baseElement);
        },
        { timeout: 2000 }
      );
    });

    it('2行，然后删除到底', async () => {
      let lens = 2;

      const { baseElement } = render(
        <VirtualTable columns={columns} defaultValue={new Array(lens).fill({ type: TEXT })} />
      );

      await waitFor(
        async () => {
          const user = userEvent.setup();
          while (lens) {
            const delArr = await screen.findAllByText('删除');
            await user.click(delArr[0]);
            lens--;
          }

          await toBeEmpty(baseElement);
        },
        { timeout: 2000 }
      );
    });

    it('3行，然后删除到底', async () => {
      let lens = 3;

      const { baseElement } = render(
        <VirtualTable columns={columns} defaultValue={new Array(lens).fill({ type: TEXT })} />
      );

      await waitFor(
        async () => {
          const user = userEvent.setup();
          while (lens) {
            const delArr = await screen.findAllByText('删除');
            await user.click(delArr[0]);
            lens--;
          }

          await toBeEmpty(baseElement);
        },
        { timeout: 2000 }
      );
    });

    it('100行，然后删除到底', async () => {
      let lens = 100;

      const { baseElement } = render(
        <VirtualTable columns={columns} defaultValue={new Array(lens).fill({ type: TEXT })} />
      );

      await waitFor(
        async () => {
          const user = userEvent.setup();
          while (lens) {
            const delArr = await screen.findAllByText('删除');
            await user.click(delArr[0]);
            lens--;
          }

          await toBeEmpty(baseElement);
        },
        { timeout: 50000 }
      );
    }, 80000);
  });

  describe('有数据(受控 - value) -> 一步步删除到无', () => {
    it('1行，然后删除到底', async () => {
      const { baseElement } = render(<VirtualTable columns={columns} value={[{ type: TEXT }]} />);

      await waitFor(
        async () => {
          const user = userEvent.setup();
          await user.click(screen.getByText('删除'));
          await toBeEmpty(baseElement);
        },
        { timeout: 2000 }
      );
    });

    it('2行，然后删除到底', async () => {
      let lens = 2;

      const { baseElement } = render(<VirtualTable columns={columns} value={new Array(lens).fill({ type: TEXT })} />);

      await waitFor(
        async () => {
          const user = userEvent.setup();
          while (lens) {
            const delArr = await screen.findAllByText('删除');
            await user.click(delArr[0]);
            lens--;
          }

          await toBeEmpty(baseElement);
        },
        { timeout: 2000 }
      );
    });

    it('3行，然后删除到底', async () => {
      let lens = 3;

      const { baseElement } = render(<VirtualTable columns={columns} value={new Array(lens).fill({ type: TEXT })} />);

      await waitFor(
        async () => {
          const user = userEvent.setup();
          while (lens) {
            const delArr = await screen.findAllByText('删除');
            await user.click(delArr[0]);
            lens--;
          }

          await toBeEmpty(baseElement);
        },
        { timeout: 2000 }
      );
    });

    it('100行，然后删除到底', async () => {
      let lens = 100;

      const { baseElement } = render(<VirtualTable columns={columns} value={new Array(lens).fill({ type: TEXT })} />);

      await waitFor(
        async () => {
          const user = userEvent.setup();
          while (lens) {
            const delArr = await screen.findAllByText('删除');
            await user.click(delArr[0]);
            lens--;
          }

          await toBeEmpty(baseElement);
        },
        { timeout: 50000 }
      );
    }, 80000);
  });

  describe('空数据情况下，事件回调-onChange', () => {
    it('数据-add', async () => {
      const mockOnChange = jest.fn();

      const { container } = render(<VirtualTable columns={columns} value={[]} onChange={mockOnChange} />);
      const user = userEvent.setup();
      await user.click(screen.getByText('新增一行'));

      await waitFor(
        async () => {
          expect(mockOnChange).toHaveBeenCalledWith([
            {
              ssid: 0,
            },
          ]);
        },
        { timeout: 2000, container }
      );
    });

    it('数据-change', async () => {
      const mockOnChange = jest.fn();

      const { container } = render(<VirtualTable columns={columns} value={[]} onChange={mockOnChange} />);
      const user = userEvent.setup();
      await user.click(screen.getByText('新增一行'));

      await waitFor(
        async () => {
          const input = container.querySelector('.doraemon-input');

          if (!input) throw new Error('不存在input');

          const inputText = 'hello world';
          fireEvent.change(input, { target: { value: inputText } });
          return expect(mockOnChange).toHaveBeenCalledWith([{ ssid: 0, type: inputText }]);
        },
        { timeout: 2000 }
      );
    });

    it('数据-del', async () => {
      const mockOnChange = jest.fn();
      const { container } = render(<VirtualTable columns={columns} value={[]} onChange={mockOnChange} />);
      const user = userEvent.setup();
      await user.click(screen.getByText('新增一行'));

      await waitFor(
        async () => {
          const inputText = 'hello world';
          const input = container.querySelector('.doraemon-input');

          if (!input) throw new Error('不存在input');

          fireEvent.change(input, { target: { value: inputText } });

          await user.click(screen.getByText('删除'));
          expect(mockOnChange).toHaveBeenCalledWith([]);
        },
        { timeout: 2000, container }
      );
    });
  });

  describe('有数据情况下，事件回调-onChange', () => {
    it('数据-add', async () => {
      const { baseElement } = render(<VirtualTable columns={columns} value={[{ type: TEXT }]} />);
      const user = userEvent.setup();

      await waitFor(
        async () => {
          await user.click(screen.getByText('删除'));
          toBeEmpty(baseElement);
        },
        { timeout: 2000 }
      );
    });

    it('数据-change', async () => {
      const mockOnChange = jest.fn();

      const { container } = render(<VirtualTable columns={columns} value={[{ type: TEXT }]} onChange={mockOnChange} />);
      const user = userEvent.setup();
      await user.click(screen.getByText('+ 添加行'));

      await waitFor(
        () => {
          const inputs = container.querySelectorAll('.doraemon-input');
          if (!inputs?.length) throw new Error('不存在input');

          const inputText = 'hello world';
          fireEvent.change(inputs[1], { target: { value: inputText } });
          expect(mockOnChange).toHaveBeenCalledWith([
            { ssid: 0, type: TEXT },
            { ssid: 1, type: inputText },
          ]);
        },
        { timeout: 2000 }
      );
    });

    it('数据-del', async () => {
      const mockOnChange = jest.fn();

      const { container } = render(<VirtualTable columns={columns} value={[{ type: TEXT }]} onChange={mockOnChange} />);
      const user = userEvent.setup();
      await user.click(screen.getByText('+ 添加行'));
      const inputText = 'hello world';

      await waitFor(
        () => {
          const inputs = container.querySelectorAll('.doraemon-input');
          if (!inputs?.length) throw new Error('不存在input');
          fireEvent.change(inputs[1], { target: { value: inputText } });
        },
        { timeout: 2000 }
      );

      const dels = await screen.findAllByText('删除');
      if (!dels?.length) throw new Error('报错：无删除按钮');

      // let fixLens = dels.length;
      let lens = dels.length;
      while (lens) {
        lens--;
        const delArr = await screen.findAllByText('删除');
        await user.click(delArr[0]);
        // await waitFor(() => {
        //     return expect(mockOnChange).toHaveBeenCalledWith([{ ssid: Number(fixLens - lens), type: inputText }]);
        // })
      }

      expect(mockOnChange).toHaveBeenCalledWith([]);
    });
  });
});
