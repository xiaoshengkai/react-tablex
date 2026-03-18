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

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('其他-特殊场景', () => {
  it('pageConfig', async () => {
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
        attrs: {
          maxLength: 300,
        },
      },
      type1: {
        require: true,
        attrs: {
          maxLength: 300,
        },
        fixType: 'hide',
      },
      type2: {
        require: true,
        attrs: {
          maxLength: 300,
        },
        fixedDisable: true,
      },
    };

    const Demo = () => {
      const [dateSource, setDataSource] = useState([]);

      const onChange = (value) => {
        setDataSource(value);
      };

      return (
        <VirtualTable
          columns={pageConfigFormat(columns, pageConfigMap)}
          value={dateSource}
          onChange={onChange}
        />
      );
    };

    render(<Demo />);
    await waitFor(() => {
      expect(screen.queryAllByText('内容123')[0]).toBeInTheDocument();
    });
  });

  it('更新整列数据', async () => {
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

      const onChange = (value) => {
        setDataSource(value);
      };

      return (
        <VirtualTable
          columns={columns}
          value={dateSource}
          onChange={onChange}
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

  it('nextTick - Promise使用', async () => {
    const nextTick = createNextTick();
    nextTick().then(() => {
      console.log('Promise使用');
    });
  });

  it('监听式主动触发校验-validateCol', async () => {
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

              /** 判断是否存在重名 */
              const exitRepeat = store.reduce((result, { ssid, type }) => {
                if (config.ssid === ssid) {
                  return result;
                }
                if (type === value || result) {
                  return true;
                }
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
      const virtualTableRef = useRef<any>(null);

      const onChange = (value) => {
        setDataSource(value);
      };

      const submit = () => {
        virtualTableRef.current?.validate().then((error) => {
          if (!error) {
            mockOnSubmit('检验通过');
            message.success('检验通过');
          }
        });
      };

      return (
        <div>
          <Button onClick={submit} style={{ marginBottom: '20px' }}>
            提交
          </Button>
          <VirtualTable
            ref={virtualTableRef}
            columns={columns}
            value={dateSource}
            onChange={onChange}
          />
        </div>
      );
    };

    const { baseElement } = render(<Demo />);

    const user = userEvent.setup();

    await waitFor(() => {
      const [input1, input2] = baseElement.querySelectorAll('.doraemon-input');
      fireEvent.change(input1, { target: { value: '小盛开' } });
      fireEvent.change(input2, { target: { value: '小盛开' } });
    });

    await waitFor(
      () => {
        const requireText = screen.queryAllByText('名字不能重复');
        expect(requireText.length).toBe(2);
      },
      {
        timeout: 2000,
      },
    );

    await waitFor(() => {
      const [, input2] = baseElement.querySelectorAll('.doraemon-input');
      fireEvent.change(input2, { target: { value: '小盛开1' } });
    });

    await waitFor(
      () => {
        const submit = screen.getByText('提交');
        user.click(submit);
        expect(mockOnSubmit).toHaveBeenCalledWith('检验通过');
      },
      {
        timeout: 2000,
      },
    );
  });

  it('监听式主动触发校验-validateSelf', async () => {
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
        rules: [
          {
            required: true,
            message: '必填',
          },
        ],
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
      const [dateSource, setDataSource] = useState([
        {
          name: '李小龙',
        },
        {
          name: '李小龙',
        },
        {
          name: '李小龙',
        },
      ]);

      const virtualTableRef = useRef<any>(null);

      const onChange = (value) => {
        setDataSource(value);
      };

      const submit = () => {
        virtualTableRef.current?.validate().then((error) => {
          if (!error) {
            mockOnSubmit('检验通过');
            message.success('检验通过');
          }
        });
      };

      return (
        <div>
          <Button onClick={submit} style={{ marginBottom: '20px' }}>
            提交
          </Button>
          <VirtualTable
            ref={virtualTableRef}
            columns={columns}
            value={dateSource}
            onChange={onChange}
          />
        </div>
      );
    };

    const { baseElement } = render(<Demo />);

    const user = userEvent.setup();

    await waitFor(
      () => {
        const requireText = screen.queryAllByText('我喜欢周星驰');

        expect(requireText.length).toBe(3);
      },
      {
        timeout: 2000,
      },
    );

    await waitFor(() => {
      const [input] = baseElement.querySelectorAll('.doraemon-input');
      fireEvent.change(input, { target: { value: '周星驰' } });
    });

    await waitFor(
      () => {
        const submit = screen.getByText('提交');
        user.click(submit);
        expect(mockOnSubmit).toHaveBeenCalledWith('检验通过');
      },
      {
        timeout: 2000,
      },
    );
  });

  it('Link - click', async () => {
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
            console.log('文本');
          },
        },
      },
    ];

    const Demo = () => {
      return (
        <VirtualTable
          columns={columns}
          value={[
            {
              text: '你是谁',
              link: {
                text: '跳转zcyutil2.0',
                url: 'https://ipaas.cai-inc.com/quark-index/doc/%40zcy%2Futils/api/array?version=2.0.1-alpha.12&utm=quark.9d3b44.0.0.df6da540321d11efa4e2215e337bdc75',
              },
            },
            {},
          ]}
          isOperationBtnVisible
        />
      );
    };

    render(<Demo />);

    await waitFor(
      async () => {
        const jump = screen.queryByText('跳转zcyutil2.0');
        if (!jump) throw new Error('获取不到DOM');
        fireEvent.click(jump);
      },
      { timeout: 2000 },
    );
  });

  it('VirtualLayout 插槽', async () => {
    const columns: ColumnProps[] = [
      {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: VirtualTable.VirtualNo,
      },
      {
        label: '内容',
        require: true,
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
      {
        label: '内容2',
        fieldkey: 'type3',
        children: [
          {
            topContent: () => 'topContent33',
            fieldkey: 'type33',
            label: '你有什么感悟呢33？',
            require: true,
            children: [
              {
                label: '你有什么感悟呢333？',
                require: true,
                topContent: () => 'topContent333',
                fieldkey: 'type333',
                type: 'TextArea',
                bottomContent: () => 'bottomContent333',
              },
            ],
            bottomContent: () => 'bottomContent33',
          },
        ],
      },
    ];

    const Demo = () => {
      const [dateSource, setDataSource] = useState([{}]);

      const onChange = (value) => {
        setDataSource(value);
      };

      return (
        <div>
          <VirtualTable
            columns={columns}
            value={dateSource}
            onChange={onChange}
          />
        </div>
      );
    };

    render(<Demo />);
  });

  it('addLimit 添加上限', async () => {
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
    const addLimit = 10;
    const mockOnChange = jest.fn();

    const Demo = () => {
      const [dateSource, setDataSource] = useState([
        ...new Array(addLimit).fill({}),
      ]);

      const onChange = (value) => {
        mockOnChange(value);
        setDataSource(value);
      };

      return (
        <div>
          <VirtualTable
            columns={columns}
            value={dateSource}
            onChange={onChange}
            addLimit={addLimit}
          />
        </div>
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

      const messageText = `超过指定数量${addLimit}条`;
      expect(messageElement).toHaveTextContent(messageText);
      expect(mockOnChange).toHaveBeenCalledWith([
        { ssid: 0 },
        { ssid: 1 },
        { ssid: 2 },
        { ssid: 3 },
        { ssid: 4 },
        { ssid: 5 },
        { ssid: 6 },
        { ssid: 7 },
        { ssid: 8 },
        { ssid: 9 },
      ]);
    });
  });

  it('addLimitText 添加上限', async () => {
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
    const addLimit = 10;
    const mockOnChange = jest.fn();

    const Demo = () => {
      const [dateSource, setDataSource] = useState([
        ...new Array(addLimit).fill({}),
      ]);

      const onChange = (value) => {
        mockOnChange(value);
        setDataSource(value);
      };

      return (
        <div>
          <VirtualTable
            columns={columns}
            value={dateSource}
            onChange={onChange}
            addLimit={addLimit}
            addLimitText={() => {
              message.warn(`超了呀`);
            }}
          />
        </div>
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

      const messageText = `超了呀`;
      expect(messageElement).toHaveTextContent(messageText);
      expect(mockOnChange).toHaveBeenCalledWith([
        { ssid: 0 },
        { ssid: 1 },
        { ssid: 2 },
        { ssid: 3 },
        { ssid: 4 },
        { ssid: 5 },
        { ssid: 6 },
        { ssid: 7 },
        { ssid: 8 },
        { ssid: 9 },
      ]);
    });
  });

  it('实例方法', async () => {
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
      const [dateSource, setDataSource] = useState([{ type: 1 }]);
      const virtualTableRef = useRef<IVirtualTableImperativeReturn>();

      const onChange = (value) => {
        setDataSource(value);
      };

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
          <div>
            <Button onClick={getStore}>获取数据</Button>
            <Button onClick={updateStore}>更新数据</Button>
          </div>
          <VirtualTable
            ref={virtualTableRef}
            columns={columns}
            value={dateSource}
            onChange={onChange}
          />
        </div>
      );
    };

    render(<Demo />);

    await waitFor(() => {
      const getBtn = screen.queryByText('获取数据');
      if (!getBtn) throw new Error('获取不到: + 获取数据按钮');
      fireEvent.click(getBtn);
    });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith([{ type: 1, ssid: 0 }]);
    });

    await waitFor(() => {
      const setBtn = screen.queryByText('更新数据');
      if (!setBtn) throw new Error('获取不到: + 更新数据按钮');
      fireEvent.click(setBtn);

      const getBtn = screen.queryByText('获取数据');
      if (!getBtn) throw new Error('获取不到: + 获取数据按钮');
      fireEvent.click(getBtn);
    });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith([
        { type: 2, ssid: 0 },
        { type: 3, ssid: 1 },
      ]);
    });
  });
});
