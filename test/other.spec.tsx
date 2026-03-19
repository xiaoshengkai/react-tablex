import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, message } from 'antd';
import React, { useRef, useState } from 'react';
import { createNextTick } from '../src/common/util';
import VirtualTable, {
  ColumnProps,
  IVirtualTableImperativeReturn,
  pageConfigFormat,
  Way,
} from '../src/index';

describe('其他-特殊场景', () => {
  it('pageConfig 批量配置列', async () => {
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
        type: 'Input',
      },
      {
        label: '内容1',
        fieldkey: 'type1',
        require: true,
        rules: [{ required: true, message: '必填' }],
        type: 'Input',
      },
      {
        label: '内容2',
        fieldkey: 'type2',
        require: true,
        rules: [{ required: true, message: '必填' }],
        type: 'Input',
      },
    ];

    const pageConfigMap = {
      type: {
        label: '内容123',
        require: true,
        attrs: { maxLength: 300 },
      },
      type1: {
        require: true,
        attrs: { maxLength: 300 },
        fixType: 'hide',
      },
      type2: {
        require: true,
        attrs: { maxLength: 300 },
        fixedDisable: true,
      },
    };

    const Demo = () => {
      const [dateSource, setDataSource] = useState<any[]>([]);
      return (
        <VirtualTable
          columns={pageConfigFormat(columns, pageConfigMap)}
          value={dateSource}
          onChange={setDataSource as any}
        />
      );
    };

    render(<Demo />);
    await waitFor(() => {
      expect(screen.queryAllByText('内容123')[0]).toBeInTheDocument();
    });
  });

  it('watch updateColData 更新整列数据', async () => {
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
        type: 'Input',
        watch: {
          handle(value, { updateColData, store }) {
            const typeOfValues = store.reduce((total, { ssid }) => {
              total.push({ ssid, type: value });
              return total;
            }, []);
            updateColData(typeOfValues);
          },
          deps: ['type'],
        },
      },
    ];

    const Demo = () => {
      const [dateSource, setDataSource] = useState([{}, {}, {}]);
      return (
        <VirtualTable
          columns={columns}
          value={dateSource}
          onChange={setDataSource}
        />
      );
    };

    const { baseElement } = render(<Demo />);

    await waitFor(() => {
      const [input] = baseElement.querySelectorAll('.doraemon-input');
      fireEvent.change(input, { target: { value: '有内容' } });
    });

    await waitFor(() => {
      const inputs = screen.queryAllByDisplayValue('有内容');
      expect(inputs.length).toBe(3);
    });
  });

  it('createNextTick Promise 使用', async () => {
    const nextTick = createNextTick();
    const promise = nextTick();
    expect(promise).toBeInstanceOf(Promise);
  });

  describe('校验相关', () => {
    it('watch validateCol 监听式主动触发整列校验', async () => {
      const columns: ColumnProps[] = [
        {
          label: '序号',
          fieldkey: 'index',
          width: 80,
          custom: VirtualTable.VirtualNo,
        },
        {
          label: '名字（不能重复）',
          fieldkey: 'type',
          require: true,
          rules: [
            { required: true, message: '必填' },
            {
              validator: async (config, value, callback) => {
                const store = config.getStore();
                const exitRepeat = store.reduce((result, { ssid, type }) => {
                  if (config.ssid === ssid) return result;
                  if (type === value || result) return true;
                  return false;
                }, false);
                callback?.(exitRepeat ? '名字不能重复' : undefined);
              },
            },
          ],
          type: 'Input',
          watch: {
            handle(_, { validateCol }) {
              validateCol();
            },
            deps: ['type'],
          },
        },
      ];

      const mockOnSubmit = jest.fn();

      const Demo = () => {
        const [dateSource, setDataSource] = useState([{}, {}]);
        const virtualTableRef = useRef<IVirtualTableImperativeReturn>(null);

        const submit = () => {
          virtualTableRef.current?.validate().then((error) => {
            if (!error) {
              mockOnSubmit('检验通过');
            }
          });
        };

        return (
          <div>
            <Button onClick={submit}>提交</Button>
            <VirtualTable
              ref={virtualTableRef}
              columns={columns}
              value={dateSource}
              onChange={setDataSource}
            />
          </div>
        );
      };

      const { baseElement } = render(<Demo />);

      await waitFor(() => {
        const [input1, input2] =
          baseElement.querySelectorAll('.doraemon-input');
        fireEvent.change(input1, { target: { value: '小盛开' } });
        fireEvent.change(input2, { target: { value: '小盛开' } });
      });

      await waitFor(
        () => {
          const requireText = screen.queryAllByText('名字不能重复');
          expect(requireText.length).toBe(2);
        },
        { timeout: 2000 },
      );

      await waitFor(() => {
        const [, input2] = baseElement.querySelectorAll('.doraemon-input');
        fireEvent.change(input2, { target: { value: '小盛开1' } });
      });

      const user = userEvent.setup();
      await user.click(screen.getByText('提交'));

      expect(mockOnSubmit).toHaveBeenCalledWith('检验通过');
    });

    it('watch validateSelf 监听式主动触发单列校验', async () => {
      const columns: ColumnProps[] = [
        {
          label: '序号',
          fieldkey: 'index',
          width: 80,
          custom: VirtualTable.VirtualNo,
        },
        {
          label: '角色',
          fieldkey: 'name',
          require: true,
          rules: [{ required: true, message: '必填' }],
          type: 'Input',
        },
        {
          label: '路人（感受）',
          fieldkey: 'npc',
          type: 'Input',
          rules: [
            {
              validator(_, value, callback) {
                const text = '我喜欢周星驰';
                callback(value !== text ? text : undefined);
              },
            },
          ],
          watch: [
            {
              handle(value, { updateCellData, validateSelf }) {
                if (value) {
                  updateCellData(value ? '我喜欢' + value : '');
                }
                validateSelf();
              },
              deps: ['name'],
              way: Way.Col,
              immediately: true,
            },
          ],
        },
      ];

      const mockOnSubmit = jest.fn();

      const Demo = () => {
        const [dateSource, setDataSource] = useState<any[]>([
          { name: '李小龙' },
          { name: '李小龙' },
          { name: '李小龙' },
        ]);
        const virtualTableRef = useRef<IVirtualTableImperativeReturn>(null);

        const submit = () => {
          virtualTableRef.current?.validate().then((error) => {
            if (!error) {
              mockOnSubmit('检验通过');
            }
          });
        };

        return (
          <div>
            <Button onClick={submit}>提交</Button>
            <VirtualTable
              ref={virtualTableRef}
              columns={columns}
              value={dateSource}
              onChange={setDataSource as any}
            />
          </div>
        );
      };

      const { baseElement } = render(<Demo />);

      await waitFor(
        () => {
          const requireText = screen.queryAllByText('我喜欢周星驰');
          expect(requireText.length).toBe(3);
        },
        { timeout: 2000 },
      );

      await waitFor(() => {
        const [input] = baseElement.querySelectorAll('.doraemon-input');
        fireEvent.change(input, { target: { value: '周星驰' } });
      });

      const user = userEvent.setup();
      await user.click(screen.getByText('提交'));

      expect(mockOnSubmit).toHaveBeenCalledWith('检验通过');
    });
  });

  it('Link 组件点击事件', async () => {
    const columns: ColumnProps[] = [
      {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: VirtualTable.VirtualNo,
      },
      {
        label: '文本',
        fieldkey: 'link',
        type: 'Link',
        attrs: {
          onClick() {
            console.log('点击文本');
          },
        },
      },
    ];

    const Demo = () => (
      <VirtualTable
        columns={columns}
        value={[
          {
            text: '你是谁',
            link: {
              text: '跳转链接',
              url: 'https://example.com',
            },
          },
          {},
        ]}
        isOperationBtnVisible
      />
    );

    render(<Demo />);

    await waitFor(
      async () => {
        const jump = screen.queryByText('跳转链接');
        if (!jump) throw new Error('获取不到DOM');
        fireEvent.click(jump);
      },
      { timeout: 2000 },
    );
  });

  it('VirtualLayout 插槽嵌套', async () => {
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
        children: [
          {
            topContent: () => 'topContent',
            label: '你有什么感悟呢？',
            require: true,
            fieldkey: 'type1',
            rules: [{ required: true, message: '必填' }],
            type: 'TextArea',
            bottomContent: () => 'bottomContent',
          },
        ],
      },
      {
        label: '内容1',
        fieldkey: 'type2',
        children: [
          {
            topContent: 'topContent22',
            fieldkey: 'type22',
            type: 'TextArea',
            bottomContent: 'bottomContent22',
          },
        ],
      },
    ];

    const Demo = () => {
      const [dateSource, setDataSource] = useState([{}]);
      return (
        <VirtualTable
          columns={columns}
          value={dateSource}
          onChange={setDataSource}
        />
      );
    };

    render(<Demo />);
  });

  describe('addLimit 添加上限', () => {
    it('达到上限时提示', async () => {
      const addLimit = 10;
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
          type: 'Input',
        },
      ];

      const mockOnChange = jest.fn();

      const Demo = () => {
        const [dateSource, setDataSource] = useState(
          new Array(addLimit).fill({}),
        );
        return (
          <VirtualTable
            columns={columns}
            value={dateSource}
            onChange={(val) => {
              mockOnChange(val);
              setDataSource(val);
            }}
            addLimit={addLimit}
          />
        );
      };

      render(<Demo />);

      await waitFor(() => {
        const addBtn = screen.queryByText('+ 添加行');
        if (!addBtn) throw new Error('获取不到: + 添加行按钮');
        fireEvent.click(addBtn);
      });

      await waitFor(() => {
        const messageElement = document.querySelector('.doraemon-message');
        expect(messageElement).toHaveTextContent(`超过指定数量${addLimit}条`);
        expect(mockOnChange).toHaveBeenCalledWith(
          new Array(addLimit).fill({}).map((_, i) => ({ ssid: i })),
        );
      });
    });

    it('自定义上限提示文案', async () => {
      const addLimit = 10;
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
          type: 'Input',
        },
      ];

      const mockOnChange = jest.fn();

      const Demo = () => {
        const [dateSource, setDataSource] = useState(
          new Array(addLimit).fill({}),
        );
        return (
          <VirtualTable
            columns={columns}
            value={dateSource}
            onChange={(val) => {
              mockOnChange(val);
              setDataSource(val);
            }}
            addLimit={addLimit}
            addLimitText={() => message.warning('超了呀')}
          />
        );
      };

      render(<Demo />);

      await waitFor(() => {
        const addBtn = screen.queryByText('+ 添加行');
        if (!addBtn) throw new Error('获取不到: + 添加行按钮');
        fireEvent.click(addBtn);
      });

      await waitFor(() => {
        const messageElement = document.querySelector('.doraemon-message');
        expect(messageElement).toHaveTextContent('超了呀');
      });
    });
  });

  describe('实例方法', () => {
    it('getDataSource 和 updateData', async () => {
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
          type: 'Input',
        },
      ];

      const mockOnChange = jest.fn();

      const Demo = () => {
        const [dateSource, setDataSource] = useState<any[]>([{ type: 1 }]);
        const virtualTableRef = useRef<IVirtualTableImperativeReturn>(null);

        const getStore = () => {
          const store = virtualTableRef.current?.getDataSource();
          mockOnChange(store);
        };

        const updateStore = () => {
          const store = virtualTableRef.current?.updateData([
            { type: 2 },
            { type: 3 },
          ]);
          mockOnChange(store);
        };

        return (
          <div>
            <Button onClick={getStore}>获取数据</Button>
            <Button onClick={updateStore}>更新数据</Button>
            <VirtualTable
              ref={virtualTableRef}
              columns={columns}
              value={dateSource}
              onChange={setDataSource as any}
            />
          </div>
        );
      };

      render(<Demo />);

      await waitFor(() => {
        fireEvent.click(screen.queryByText('获取数据')!);
      });

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledWith([{ type: 1, ssid: 0 }]);
      });

      await waitFor(() => {
        fireEvent.click(screen.queryByText('更新数据')!);
        fireEvent.click(screen.queryByText('获取数据')!);
      });

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledWith([
          { type: 2, ssid: 0 },
          { type: 3, ssid: 1 },
        ]);
      });
    });
  });
});
