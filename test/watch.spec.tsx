import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import VirtualTable, { ColumnProps, Operate, Way } from '../src/index';
import '@testing-library/jest-dom';
import { InputNumber } from 'antd';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

describe('watch 处理逻辑', () => {
    it('基础', async () => {
        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '是否开启',
                fieldkey: 'type',
                require: true,
                rules: [{ required: true, message: '必填' }],
                type: 'Radio',
                options: [
                    { label: '是', value: true },
                    { label: '否', value: false },
                ],
            },
            {
                label: '价格',
                fieldkey: 'price',
                rules: [{ required: true, message: '必填' }],
                type: 'InputNumber',
                attrs: {
                    min: 0,
                    max: 10,
                },
                fieldShow: false,
                watch: [
                    {
                        handle(value, { updateSelfConfig, updateCellData }) {
                            updateSelfConfig({
                                fieldShow: value,
                            });

                            updateCellData(1);
                        },
                        deps: ['type'],
                    },
                ],
            },
            {
                label: '备注',
                fieldkey: 'txt',
                type: 'TextArea',
                watch: [
                    {
                        handle(value, { updateCellData }) {
                            if (value === 10) {
                                updateCellData(`${value}块钱`);
                            }
                        },
                        deps: ['price'],
                    },
                ],
            },
        ];

        const Demo = () => {
            const [dateSource, setDataSource] = useState([{}]);

            const onChange = (value) => {
                setDataSource(value);
            };

            return <VirtualTable columns={columns} value={dateSource} onChange={onChange} />;
        };

        const { baseElement } = render(<Demo />);

        await waitFor(async () => {
            const input = baseElement.querySelector('.doraemon-input-number-input');
            const yuan10 = await screen.queryByText('10块钱');

            expect(input).not.toBeInTheDocument();
            expect(yuan10).not.toBeInTheDocument();
        });

        await waitFor(async () => {
            const trueDom = screen.getByText('是');
            fireEvent.click(trueDom);
        });

        await waitFor(async () => {
            const input = baseElement.querySelector('.doraemon-input-number-input');
            const yuan10 = await screen.queryByText('10块钱');
            const inputValue1 = await screen.queryByText('1');

            expect(input).toBeInTheDocument();
            expect(inputValue1).toBeInTheDocument();
            expect(yuan10).not.toBeInTheDocument();
        });

        await waitFor(async () => {
            const input = baseElement.querySelector('.doraemon-input-number-input');
            if (!input) throw new Error('输入框不存在');
            fireEvent.change(input, { target: { value: '10' } });
        });

        await waitFor(async () => {
            const input = baseElement.querySelector('.doraemon-input-number-input');
            const yuan10 = await screen.queryByText('10块钱');
            const inputValue1 = await screen.queryByText('1');

            expect(input).toBeInTheDocument();
            expect(inputValue1).toBeInTheDocument();
            expect(yuan10).toBeInTheDocument();
        });
    });

    it('立即执行 - 如果值为underfind 不会执行', async () => {
        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '是否开启',
                fieldkey: 'type',
                require: true,
                rules: [{ required: true, message: '必填' }],
                type: 'Radio',
                initialValue: true,
                options: [
                    { label: '是', value: true },
                    { label: '否', value: false },
                ],
            },
            {
                label: '价格',
                fieldkey: 'price',
                rules: [{ required: true, message: '必填' }],
                type: 'InputNumber',
                attrs: {
                    min: 0,
                    max: 10,
                },
                fieldShow: false,
                watch: [
                    {
                        handle(value, { updateSelfConfig }) {
                            updateSelfConfig({
                                fieldShow: value,
                            });
                        },
                        deps: ['type'],
                        immediately: true,
                    },
                ],
            },
        ];

        const Demo = () => {
            const [dateSource, setDataSource] = useState([]);

            const onChange = (value) => {
                setDataSource(value);
            };

            return <VirtualTable columns={columns} value={dateSource} onChange={onChange} />;
        };

        render(<Demo />);

        await waitFor(async () => {
            const empty = await screen.queryByText('新增一行');
            expect(empty).toBeInTheDocument();
        });
    });

    it('多重“监听”', async () => {
        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '第一道开关',
                fieldkey: 'type1',
                require: true,
                rules: [{ required: true, message: '必填' }],
                type: 'Radio',
                options: [
                    { label: '是', value: true },
                    { label: '否', value: false },
                ],
            },
            {
                label: '第二道开关',
                fieldkey: 'type2',
                require: true,
                rules: [{ required: true, message: '必填' }],
                type: 'Radio',
                options: [
                    { label: '是', value: true },
                    { label: '否', value: false },
                ],
            },
            {
                label: '两个开关开启才能显示',
                fieldkey: 'price1',
                rules: [{ required: true, message: '必填' }],
                type: 'InputNumber',
                attrs: {
                    min: 0,
                    max: 10,
                },
                fieldShow: false,
                watch: [
                    {
                        handle(value, { updateSelfConfig }) {
                            const { type1, type2 } = value;

                            updateSelfConfig({
                                fieldShow: type1 && type2,
                            });
                        },
                        deps: ['type1', 'type2'],
                    },
                ],
            },
            {
                label: '最后触发开关的为准',
                fieldkey: 'price2',
                rules: [{ required: true, message: '必填' }],
                type: 'InputNumber',
                attrs: {
                    min: 0,
                    max: 10,
                },
                fieldShow: false,
                watch: [
                    {
                        handle(value, { updateSelfConfig }) {
                            updateSelfConfig({
                                fieldShow: value,
                            });
                        },
                        deps: ['type1'],
                    },
                    {
                        handle(value, { updateSelfConfig }) {
                            updateSelfConfig({
                                fieldShow: value,
                            });
                        },
                        deps: ['type2'],
                    },
                ],
            },
        ];

        const Demo = () => {
            const [dateSource, setDataSource] = useState([{}]);

            const onChange = (value) => {
                setDataSource(value);
            };

            return <VirtualTable columns={columns} value={dateSource} onChange={onChange} />;
        };

        const { baseElement } = render(<Demo />);

        await waitFor(() => {
            const input = baseElement.querySelectorAll('.doraemon-input-number-input');
            expect(input.length).toBe(0);
        });

        await waitFor(() => {
            const [true1] = screen.getAllByText('是');
            fireEvent.click(true1);
        });

        await waitFor(() => {
            const input = baseElement.querySelectorAll('.doraemon-input-number-input');
            expect(input.length).toBe(1);
        });

        await waitFor(() => {
            const [, false2] = screen.getAllByText('否');
            fireEvent.click(false2);
        });

        await waitFor(() => {
            const input = baseElement.querySelectorAll('.doraemon-input-number-input');
            expect(input.length).toBe(0);
        });

        await waitFor(() => {
            const [, true2] = screen.getAllByText('是');
            fireEvent.click(true2);
        });

        await waitFor(() => {
            const input = baseElement.querySelectorAll('.doraemon-input-number-input');
            expect(input.length).toBe(2);
        });

        await waitFor(() => {
            const [false1] = screen.getAllByText('否');
            fireEvent.click(false1);
        });

        await waitFor(() => {
            const input = baseElement.querySelectorAll('.doraemon-input-number-input');
            expect(input.length).toBe(0);
        });
    });

    it('指定行单元格“监听-动态”', async () => {
        const Demo = () => {
            const [dateSource, setDataSource] = useState([{}, {}]);
            const [num, setNum] = useState<number>(1);

            const getColumns = () =>
                [
                    {
                        label: '序号',
                        fieldkey: 'index',
                        width: 80,
                        custom: VirtualTable.VirtualNo,
                    },
                    {
                        label: '是否开启',
                        fieldkey: 'type',
                        require: true,
                        rules: [{ required: true, message: '必填' }],
                        type: 'Radio',
                        options: [
                            { label: '是', value: true },
                            { label: '否', value: false },
                        ],
                    },
                    {
                        label: '内容',
                        fieldkey: 'content',
                        require: true,
                        rules: [
                            {
                                required: true,
                                message: '必填',
                            },
                        ],
                        type: 'Input',
                        watch: [
                            {
                                handle(value, { updateSelfConfig }) {
                                    updateSelfConfig({
                                        fieldShow: value,
                                    });
                                },
                                deps: ['type'],
                                way: (index) => index === num,
                            },
                        ],
                    },
                ] as ColumnProps[];

            const onChange = (value) => {
                setDataSource(value);
            };

            return (
                <div>
                    <div style={{ marginBottom: '20px' }}>
                        指定行触发watch：
                        <InputNumber value={num} onChange={(value) => setNum(value || 1)} />
                    </div>
                    <VirtualTable columns={getColumns()} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        const { baseElement } = render(<Demo />);

        await waitFor(() => {
            const inputs = baseElement.querySelectorAll('.doraemon-input');
            expect(inputs.length).toBe(2);
        });

        await waitFor(() => {
            const [false1] = screen.getAllByText('否');
            fireEvent.click(false1);
        });

        await waitFor(() => {
            const inputs = baseElement.querySelectorAll('.doraemon-input');
            expect(inputs.length).toBe(2);
        });

        await waitFor(() => {
            const [, false2] = screen.getAllByText('否');
            fireEvent.click(false2);
        });

        await waitFor(() => {
            const inputs = baseElement.querySelectorAll('.doraemon-input');
            expect(inputs.length).toBe(1);
        });
    });

    it('指定行单元格“监听-静态”', async () => {
        const Demo = () => {
            const [dateSource, setDataSource] = useState([{}, {}]);

            const getColumns = () =>
                [
                    {
                        label: '序号',
                        fieldkey: 'index',
                        width: 80,
                        custom: VirtualTable.VirtualNo,
                    },
                    {
                        label: '是否开启',
                        fieldkey: 'type',
                        require: true,
                        rules: [{ required: true, message: '必填' }],
                        type: 'Radio',
                        options: [
                            { label: '是', value: true },
                            { label: '否', value: false },
                        ],
                    },
                    {
                        label: '内容',
                        fieldkey: 'content',
                        require: true,
                        rules: [
                            {
                                required: true,
                                message: '必填',
                            },
                        ],
                        type: 'Input',
                        watch: [
                            {
                                handle(value, { updateSelfConfig }) {
                                    updateSelfConfig({
                                        fieldShow: value,
                                    });
                                },
                                deps: ['type'],
                                way: 1,
                            },
                        ],
                    },
                ] as ColumnProps[];

            const onChange = (value) => {
                setDataSource(value);
            };

            return (
                <VirtualTable columns={getColumns()} value={dateSource} onChange={onChange} />
            );
        };

        const { baseElement } = render(<Demo />);

        await waitFor(() => {
            const inputs = baseElement.querySelectorAll('.doraemon-input');
            expect(inputs.length).toBe(2);
        });

        await waitFor(() => {
            const [false1] = screen.getAllByText('否');
            fireEvent.click(false1);
        });

        await waitFor(() => {
            const inputs = baseElement.querySelectorAll('.doraemon-input');
            expect(inputs.length).toBe(2);
        });

        await waitFor(() => {
            const [, false2] = screen.getAllByText('否');
            fireEvent.click(false2);
        });

        await waitFor(() => {
            const inputs = baseElement.querySelectorAll('.doraemon-input');
            expect(inputs.length).toBe(1);
        });
    });

    it('“监听”上一个field变化', async () => {
        const InputNumberRange = ({ value, onChange }) => {
            const [f, l] = value || [];

            const onChangeHandle = (l) => {
                onChange([f, l]);
            };

            return (
                <div style={{ display: 'flex', width: '300px' }}>
                    <InputNumber disabled value={f}  />
                    <span>~</span>
                    <InputNumber value={l} onChange={onChangeHandle} />
                </div>
            );
        };

        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '价格区间',
                fieldkey: 'range',
                rules: [{ required: true, message: '必填' }],
                custom: InputNumberRange,
                watch: [
                    {
                        handle(value, { updateCellData, store, rowIndex }) {
                            // 获取当前field数据
                            const [, l] = store[rowIndex]?.range || [];
                            // 获取上一个field数据
                            const [, perL] = value || [];
                            updateCellData([perL && perL + 1, l]);
                        },
                        deps: ['range'],
                        way: Way.Pre,
                        immediately: true,
                    },
                ],
            },
        ];

        const mockOnChange = jest.fn();

        const Demo = () => {
            const [dateSource, setDataSource] = useState([
                ...[
                    {
                        range: [0, 1],
                    },
                    {
                        range: [],
                    },
                ],
            ]);

            const onChange = (value) => {
                setDataSource(value);
                mockOnChange(value);
            };

            return (
                <VirtualTable
                    columns={columns}
                    value={dateSource}
                    onChange={onChange}
                    operateItems={[
                        { type: Operate.Add },
                        /**
                         * 控制第一行删除禁用
                         */
                        { type: Operate.Del, disabled: (cellProps) => cellProps.rowIndex === 0 },
                    ]}
                />
            );
        };

        const { baseElement } = render(<Demo />);

        await waitFor(() => {
            const [, input] = baseElement.querySelectorAll('.doraemon-input-number-input');
            fireEvent.change(input, { target: { value: '12' } });
        });

        await waitFor(() => {
            const num13 = screen.getByDisplayValue('13');
            expect(num13).toBeInTheDocument();
            expect(mockOnChange).toHaveBeenCalledWith([
                { range: [0, 12], ssid: 0 },
                { range: [13, undefined], ssid: 1 },
            ]);
        });

        await waitFor(() => {
            const [, , , input] = baseElement.querySelectorAll('.doraemon-input-number-input');
            fireEvent.change(input, { target: { value: '100' } });
        });

        await waitFor(() => {
            const num101 = screen.queryByDisplayValue('101');
            expect(num101).not.toBeInTheDocument();
        });

        await waitFor(() => {
            const add = screen.getByText('+ 添加行');
            fireEvent.click(add);
        });

        await waitFor(() => {
            const num101 = screen.queryByDisplayValue('101');
            expect(num101).toBeInTheDocument();
            expect(mockOnChange).toHaveBeenCalledWith([
                { range: [0, 12], ssid: 0 },
                { range: [13, 100], ssid: 1 },
                { ssid: 2, index: undefined, range: [101, undefined] },
            ]);
        });
    });

    it('“监听”下一个field变化', async () => {
        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '权重',
                fieldkey: 'weight',
                require: true,
                type: 'InputNumber',
                rules: [
                    { required: true, message: '必填' },
                    {
                        validator({ getStore, rowIndex }, value, callback) {
                            if (rowIndex === 0) {
                                return callback();
                            }

                            const store = getStore();

                            if (store[rowIndex + 1]?.weight >= value) {
                                return callback('当前权重小于下一列');
                            }

                            callback();
                        },
                    },
                ],
                watch: [
                    {
                        handle(value, { updateCellData }) {
                            updateCellData(value && Number(value) + 1);
                        },
                        deps: ['weight'],
                        way: Way.Next,
                    },
                ],
            },
        ];

        const mockOnChange = jest.fn();

        const Demo = () => {
            const [dateSource, setDataSource] = useState([{}, {}, {}]);

            const onChange = (value) => {
                setDataSource(value);
                mockOnChange(value);
            };

            return (
                <VirtualTable
                    columns={columns}
                    value={dateSource}
                    onChange={onChange}
                    operateItems={[
                        { type: Operate.Add },
                        /**
                         * 控制第一行删除禁用
                         */
                        { type: Operate.Del, disabled: (cellProps) => cellProps.rowIndex === 0 },
                    ]}
                />
            );
        };

        const { baseElement } = render(<Demo />);

        await waitFor(() => {
            const [, , input] = baseElement.querySelectorAll('.doraemon-input-number-input');
            fireEvent.change(input, { target: { value: '100' } });
        });

        await waitFor(() => {
            const num100 = screen.queryByDisplayValue('100');
            expect(num100).toBeInTheDocument();
            const num101 = screen.queryByDisplayValue('101');
            expect(num101).toBeInTheDocument();
            const num102 = screen.queryByDisplayValue('102');
            expect(num102).toBeInTheDocument();

            expect(mockOnChange).toHaveBeenCalledWith([
                { ssid: 0, weight: 102 },
                { ssid: 1, weight: 101 },
                { ssid: 2, weight: 100 },
            ]);
        });
    });

    it('“监听”整列单元格', async () => {
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
                watch: [
                    {
                        handle(value, { updateCellData }) {
                            if (value) {
                                updateCellData(value ? '我喜欢' + value : '');
                            }
                        },
                        deps: ['name'],
                        way: Way.Col,
                        immediately: true,
                    },
                ],
            },
        ];

        const mockOnChange = jest.fn();

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

            const onChange = (value) => {
                mockOnChange(value);
                setDataSource(value);
            };

            return <VirtualTable columns={columns} value={dateSource} onChange={onChange} />;
        };

        const { baseElement } = render(<Demo />);

        await waitFor(() => {
            const changeTexts = screen.queryAllByDisplayValue('我喜欢李小龙');
            expect(changeTexts.length).toBe(3);
            expect(mockOnChange).toHaveBeenCalledWith([
                { name: '李小龙', ssid: 0, npc: '我喜欢李小龙' },
                { name: '李小龙', ssid: 1, npc: '我喜欢李小龙' },
                { name: '李小龙', ssid: 2, npc: '我喜欢李小龙' },
            ]);
        });

        await waitFor(() => {
            const inputs = baseElement.querySelectorAll('.doraemon-input');
            const input = inputs[0];
            fireEvent.change(input, { target: { value: '李连杰' } });
        });

        await waitFor(() => {
            const changeTexts = screen.queryAllByDisplayValue('我喜欢李连杰');
            expect(changeTexts.length).toBe(3);
            expect(mockOnChange).toHaveBeenCalledWith([
                { name: '李连杰', ssid: 0, npc: '我喜欢李连杰' },
                { name: '李小龙', ssid: 1, npc: '我喜欢李连杰' },
                { name: '李小龙', ssid: 2, npc: '我喜欢李连杰' },
            ]);
        });

        await waitFor(() => {
            const inputs = baseElement.querySelectorAll('.doraemon-input');
            const input = inputs[2];
            fireEvent.change(input, { target: { value: '成龙' } });
        });

        await waitFor(() => {
            const changeTexts = screen.queryAllByDisplayValue('我喜欢成龙');
            expect(changeTexts.length).toBe(3);
            expect(mockOnChange).toHaveBeenCalledWith([
                { name: '李连杰', ssid: 0, npc: '我喜欢成龙' },
                { name: '成龙', ssid: 1, npc: '我喜欢成龙' },
                { name: '李小龙', ssid: 2, npc: '我喜欢成龙' },
            ]);
        });

        await waitFor(() => {
            const inputs = baseElement.querySelectorAll('.doraemon-input');
            const input = inputs[4];
            fireEvent.change(input, { target: { value: '周星驰' } });
        });

        await waitFor(() => {
            const changeTexts = screen.queryAllByDisplayValue('我喜欢周星驰');
            expect(changeTexts.length).toBe(3);
            expect(mockOnChange).toHaveBeenCalledWith([
                { name: '李连杰', ssid: 0, npc: '我喜欢周星驰' },
                { name: '成龙', ssid: 1, npc: '我喜欢周星驰' },
                { name: '周星驰', ssid: 2, npc: '我喜欢周星驰' },
            ]);
        });
    });
});
