import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import VirtualTable, { ColumnProps, Layout } from '../src/index';

describe('支持各种布局', () => {
    it('单元格多个元素', () => {
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
                        label: '你好',
                        fieldkey: 'type1',
                        rules: [{ required: true, message: '必填' }],
                        type: 'Input',
                    },
                    {
                        label: '你想吃什么呢？',
                        fieldkey: 'type2',
                        rules: [{ required: true, message: '必填' }],
                        type: 'Input',
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
                    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        render(<Demo />);
    });

    it('横向布局', () => {
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
                layoutMode: Layout.Horizontal,
                children: [
                    {
                        label: '你好',
                        fieldkey: 'type1',
                        rules: [{ required: true, message: '必填' }],
                        type: 'Input',
                    },
                    {
                        label: '你想吃什么呢？',
                        fieldkey: 'type2',
                        rules: [{ required: true, message: '必填' }],
                        type: 'Input',
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
                    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        render(<Demo />);
    });

    it('复杂嵌套', async () => {
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
                        label: '你好',
                        fieldkey: 'type1',
                        rules: [{ required: true, message: '必填' }],
                        type: 'Input',
                        style: {
                            width: '200px',
                        },
                    },
                    {
                        layoutMode: Layout.Horizontal,
                        fieldkey: 'horizontal',
                        children: [
                            {
                                label: '你想吃什么呢？',
                                fieldkey: 'type2',
                                rules: [{ required: true, message: '必填' }],
                                type: 'Input',
                            },
                            {
                                label: '你想吃、喝什么呢？',
                                fieldkey: 'type2',
                                rules: [{ required: true, message: '必填' }],
                                type: 'Input',
                            },
                        ],
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
                    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        render(<Demo />);

        await waitFor(() => {
            const add = screen.getByText('+ 添加行');
            fireEvent.click(add);
        });
    });

    it('prefix 和 suffix', () => {
        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '中奖数量',
                fieldkey: 'index',
                type: 'Input',
                prefix: '我有',
                suffix: '个',
            },
            {
                label: '备注',
                fieldkey: 'tip',
                children: [
                    {
                        prefix: '注意事项：',
                        fieldkey: 'tip1',
                        rules: [{ required: true, message: '必填' }],
                        type: 'TextArea',
                    },
                    {
                        prefix: '通知：',
                        fieldkey: 'tip2',
                        rules: [{ required: true, message: '必填' }],
                        type: 'TextArea',
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
                    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        render(<Demo />);
    });

    it('插槽', () => {
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
                topContent: (
                    <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px' }}>
                        <p>床前明月光</p>
                        <p>疑是地上霜</p>
                        <p>举头望明月</p>
                        <p>低头思故乡</p>
                    </div>
                ),
                children: [
                    {
                        label: '你有什么感悟呢？',
                        fieldkey: 'type1',
                        rules: [{ required: true, message: '必填' }],
                        type: 'TextArea',
                        bottomContent: (value, rowData) => {
                            const { rowIndex = 0 } = rowData || {};
                            return (
                                <div style={{ color: '#1677ff', fontSize: '14px', margin: '20px 0' }}>
                                    我在第{rowIndex + 1}山，感悟是: {value || '...'}
                                </div>
                            );
                        },
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
                    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        render(<Demo />);
    });
});
