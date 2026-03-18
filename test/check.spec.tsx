import React, { useState, useRef } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import VirtualTable, { ColumnProps } from '../src/index';
import '@testing-library/jest-dom';
import { Button, message } from 'antd';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

describe('校验', () => {
    it('基本校验', async () => {
        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '数字类型字符',
                fieldkey: 'type',
                require: true,
                rules: [
                    { required: true, message: '必填' },
                    { type: 'string', message: '请填写数字', pattern: /^-?\d+\.?\d*$/ },
                ],
                type: 'Input',
            },
        ];

        const mockOnSubmit = jest.fn();

        const Demo = () => {
            const [dateSource, setDataSource] = useState([]);
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
                    <VirtualTable ref={virtualTableRef} columns={columns} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        const { baseElement } = render(<Demo />);
        const user = userEvent.setup();

        await waitFor(() => {
            const add = screen.getByText('新增一行');
            user.click(add);
        });

        await waitFor(() => {
            const submit = screen.getByText('提交');
            user.click(submit);
        });

        await waitFor(() => {
            const requireText = screen.queryByText('必填');
            expect(requireText).toBeInTheDocument();
        });

        await waitFor(() => {
            const input = baseElement.querySelector('.doraemon-input');
            if (!input) throw new Error('不存在输入框');
            fireEvent.change(input, { target: { value: 'xx' } });
        });

        await waitFor(() => {
            const requireText = screen.queryByText('请填写数字');
            expect(requireText).toBeInTheDocument();
        });

        await waitFor(() => {
            const input = baseElement.querySelector('.doraemon-input');
            if (!input) throw new Error('不存在输入框');
            fireEvent.change(input, { target: { value: '1111' } });
        });

        await waitFor(() => {
            const submit = screen.getByText('提交');
            user.click(submit);
            expect(mockOnSubmit).toHaveBeenCalledWith('检验通过');
        });
    });

    it('自定义校验', async () => {
        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '价格',
                fieldkey: 'type',
                require: true,
                rules: [
                    { required: true, message: '必填' },
                    {
                        validator(_, value, callback) {
                            callback(value > 10 ? '不能大于10' : undefined);
                        },
                    },
                ],
                type: 'InputNumber',
            },
        ];

        const mockOnSubmit = jest.fn();

        const Demo = () => {
            const [dateSource, setDataSource] = useState([]);
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
                    <VirtualTable ref={virtualTableRef} columns={columns} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        const { baseElement } = render(<Demo />);

        const user = userEvent.setup();

        await waitFor(() => {
            const add = screen.getByText('新增一行');
            user.click(add);
        });

        await waitFor(() => {
            const submit = screen.getByText('提交');
            user.click(submit);
        });

        await waitFor(() => {
            const requireText = screen.queryByText('必填');
            expect(requireText).toBeInTheDocument();
        });

        await waitFor(() => {
            const input = baseElement.querySelector('.doraemon-input-number-input');
            if (!input) throw new Error('不存在输入框');
            fireEvent.change(input, { target: { value: 11 } });
        });

        await waitFor(() => {
            const requireText = screen.queryByText('不能大于10');
            expect(requireText).toBeInTheDocument();
        });

        await waitFor(() => {
            const input = baseElement.querySelector('.doraemon-input-number-input');
            if (!input) throw new Error('不存在输入框');
            fireEvent.change(input, { target: { value: 9 } });
        });

        await waitFor(() => {
            const submit = screen.getByText('提交');
            user.click(submit);
            expect(mockOnSubmit).toHaveBeenCalledWith('检验通过');
        });
    });

    it('异步自定义校验', async () => {
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

                            /**
                             * 模拟异步
                             * 睡眠1秒钟
                             */
                            await new Promise((resolve) => {
                                setTimeout(resolve, 1000);
                            });

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
            },
        ];

        const mockOnSubmit = jest.fn();

        const Demo = () => {
            const [dateSource, setDataSource] = useState([]);
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
                    <VirtualTable ref={virtualTableRef} columns={columns} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        const { baseElement } = render(<Demo />);

        const user = userEvent.setup();

        await waitFor(() => {
            const add = screen.getByText('新增一行');
            user.click(add);
        });

        await waitFor(() => {
            const submit = screen.getByText('提交');
            user.click(submit);
        });

        await waitFor(() => {
            const requireText = screen.queryByText('必填');
            expect(requireText).toBeInTheDocument();
        });

        await waitFor(() => {
            const add = screen.getByText('+ 添加行');
            user.click(add);
        });

        await waitFor(() => {
            const [input1, input2] = baseElement.querySelectorAll('.doraemon-input');
            fireEvent.change(input1, { target: { value: '小盛开' } });
            fireEvent.change(input2, { target: { value: '小盛开' } });
        });

        await waitFor(() => {
            const requireText = screen.queryByText('名字不能重复');
            expect(requireText).toBeInTheDocument();
        }, {
          timeout: 2000
        });

        await waitFor(() => {
            const [, input2] = baseElement.querySelectorAll('.doraemon-input');
            fireEvent.change(input2, { target: { value: '小盛开1' } });
        });

        await waitFor(() => {
            const submit = screen.getByText('提交');
            user.click(submit);
            expect(mockOnSubmit).toHaveBeenCalledWith('检验通过');
        }, {
          timeout: 2000
        });
    });
});
