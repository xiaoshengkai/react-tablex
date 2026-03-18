import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import VirtualTable, { ColumnProps } from '../src/index';
import { Switch } from 'antd';
import '@testing-library/jest-dom';

describe('禁用 & 显示', () => {
    it('全局禁用', async () => {
        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '输入框',
                fieldkey: 'Input',
                type: 'Input',
                width: 200,
            },
            {
                label: '多行文本输入框',
                fieldkey: 'TextArea',
                type: 'TextArea',
                width: 200,
            },
            {
                label: '数字输入框',
                fieldkey: 'InputNumber',
                type: 'InputNumber',
                width: 200,
            },
            {
                label: '单选框',
                fieldkey: 'Radio',
                type: 'Radio',
                width: 200,
                options: [
                    { label: '是', value: true },
                    { label: '否', value: false },
                ],
            },
            {
                label: '选择器',
                fieldkey: 'Select',
                type: 'Select',
                width: 200,
                options: [
                    { label: '是', value: true },
                    { label: '否', value: false },
                ],
            },
            {
                label: '多选框',
                fieldkey: 'Checkbox',
                type: 'Checkbox',
                width: 200,
                options: [
                    { label: '多选1', value: '1' },
                    { label: '多选2', value: '2' },
                ],
            },
            {
                label: '级联选择',
                fieldkey: 'Cascader',
                type: 'Cascader',
                width: 200,
                options: [
                    {
                        value: 'zhejiang',
                        label: 'Zhejiang',
                        children: [
                            {
                                value: 'hangzhou',
                                label: 'Hangzhou',
                                children: [
                                    {
                                        value: 'xihu',
                                        label: 'West Lake',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        value: 'jiangsu',
                        label: 'Jiangsu',
                        children: [
                            {
                                value: 'nanjing',
                                label: 'Nanjing',
                                children: [
                                    {
                                        value: 'zhonghuamen',
                                        label: 'Zhong Hua Men',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: '日期选择框',
                fieldkey: 'DatePicker',
                type: 'DatePicker',
                width: 200,
            },
            {
                label: '月选择框',
                fieldkey: 'MonthPicker',
                type: 'MonthPicker',
                width: 200,
            },
            {
                label: '日期范围选择框',
                fieldkey: 'RangePicker',
                type: 'RangePicker',
                width: 200,
            },
            {
                label: '周选择框',
                fieldkey: 'WeekPicker',
                type: 'WeekPicker',
                width: 200,
            },
            {
                label: '时间选择框',
                fieldkey: 'TimePicker',
                type: 'TimePicker',
                width: 200,
            },
            {
                label: '级联多选',
                fieldkey: 'MultiCascader',
                type: 'MultiCascader',
                width: 200,
                options: [
                    {
                        value: '330000',
                        label: '浙江',
                        children: [
                            {
                                value: '330100',
                                label: '杭州',
                                children: [
                                    {
                                        value: '330106',
                                        label: '西湖区',
                                    },
                                    {
                                        value: '330105',
                                        label: '拱墅',
                                        disabled: true,
                                    },
                                    {
                                        value: '330108',
                                        label: '滨江',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: '评分',
                fieldkey: 'Rate',
                type: 'Rate',
                width: 200,
            },
            {
                label: '开关',
                fieldkey: 'Switch',
                type: 'Switch',
                width: 200,
            },
            {
                label: '滑动输入条',
                fieldkey: 'Slider',
                type: 'Slider',
                width: 200,
            },
        ];

        const { baseElement } = render(<VirtualTable disabled columns={columns} value={[{}, {}]} />);

        await waitFor(
            async () => {
                expect(baseElement.querySelector('.doraemon-input')).toBeDisabled();
                expect(
                    baseElement.querySelector('.doraemon-input-search')?.querySelector('.doraemon-input')
                ).toBeDisabled();
                expect(baseElement.querySelector('.doraemon-input-textarea')).toBeDisabled();
                expect(baseElement.querySelector('.doraemon-input-number-input')).toBeDisabled();
                expect(baseElement.querySelector('.doraemon-radio-input')).toBeDisabled();
                // expect(baseElement.querySelector('.doraemon-select')).toBeDisabled();
                expect(baseElement.querySelector('.doraemon-checkbox-input')).toBeDisabled();
                expect(baseElement.querySelector('.doraemon-cascader-input')).toBeDisabled();
                expect(baseElement.querySelector('.doraemon-picker')?.querySelector('input')).toBeDisabled();
                // expect(baseElement.querySelector('.doraemon-cascader-selector')).toBeDisabled();
                // expect(baseElement.querySelector('.doraemon-rate-star-first')).toBeDisabled();
                expect(baseElement.querySelector('.doraemon-switch')).toBeDisabled();
                // expect(baseElement.querySelector('.doraemon-slider')).toBeDisabled();
            },
            { timeout: 2000 }
        );
    });

    it('禁用当前列 & 显示当前行', async () => {
        const Demo = () => {
            const [dateSource, setDataSource] = useState([{}, {}]);
            const [columnDisabled, setColumnDisabled] = useState(false);
            const [columnShow, setColumnShow] = useState(true);

            const getColumns = (): ColumnProps[] => [
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
                    columnDisabled,
                    columnShow,
                },
            ];

            const onChange = (value) => {
                setDataSource(value);
            };

            return (
                <div>
                    <div>
                        <Switch
                            style={{ marginBottom: '20px' }}
                            checkedChildren='禁用内容列'
                            unCheckedChildren='开启内容列'
                            checked={columnDisabled}
                            onChange={(value) => setColumnDisabled(value)}
                        />
                    </div>
                    <div>
                        <Switch
                            style={{ marginBottom: '20px' }}
                            checkedChildren='显示内容列'
                            unCheckedChildren='关闭内容列'
                            checked={columnShow}
                            onChange={(value) => setColumnShow(value)}
                        />
                    </div>
                    <VirtualTable columns={getColumns()} value={dateSource} onChange={onChange} />
                </div>
            );
        };

        const { baseElement } = render(<Demo />);
        const [firstSwitch, lastSwitch] = baseElement.querySelectorAll('.doraemon-switch-wrap .doraemon-switch');

        await waitFor(
            async () => {
                baseElement.querySelectorAll('.doraemon-input').forEach((element) => {
                    expect(element).toBeInTheDocument();
                    expect(element).not.toBeDisabled();
                });
            },
            { timeout: 2000 }
        );

        firstSwitch && fireEvent.click(firstSwitch);
        await waitFor(
            async () => {
                baseElement.querySelectorAll('.doraemon-input').forEach((element) => {
                    expect(element).toBeInTheDocument();
                    expect(element).toBeDisabled();
                });
            },
            { timeout: 2000 }
        );

        lastSwitch && fireEvent.click(lastSwitch);
        await waitFor(
            async () => {
                baseElement.querySelectorAll('.doraemon-input').forEach((element) => {
                    expect(element).not.toBeInTheDocument();
                });
            },
            { timeout: 2000 }
        );

        fireEvent.click(screen.getByText('+ 添加行'));
        await waitFor(
            async () => {
                baseElement.querySelectorAll('.doraemon-input').forEach((element) => {
                    expect(element).not.toBeInTheDocument();
                });
            },
            { timeout: 2000 }
        );

        lastSwitch && fireEvent.click(lastSwitch);
        await waitFor(
            async () => {
                baseElement.querySelectorAll('.doraemon-input').forEach((element) => {
                    expect(element).toBeInTheDocument();
                    expect(element).toBeDisabled();
                });
            },
            { timeout: 2000 }
        );

        firstSwitch && fireEvent.click(firstSwitch);
        await waitFor(
            async () => {
                baseElement.querySelectorAll('.doraemon-input').forEach((element) => {
                    expect(element).toBeInTheDocument();
                    expect(element).not.toBeDisabled();
                });
            },
            { timeout: 2000 }
        );
    });

    it('禁用单元格 & 显示单元格', async () => {
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
                fieldShow: false,
                watch: [
                    {
                        handle(value, { updateSelfConfig }) {
                            updateSelfConfig(value);
                        },
                        deps: ['fieldDisabled', 'fieldShow'],
                        immediately: true,
                    },
                ],
            },
            {
                label: '控制',
                fieldkey: 'control',
                children: [
                    {
                        label: '是否禁用内容',
                        fieldkey: 'fieldDisabled',
                        type: 'Switch',
                        options: [
                            { label: '是', value: 1 },
                            { label: '否', value: 0 },
                        ],
                    },
                    {
                        label: '是否显示内容',
                        fieldkey: 'fieldShow',
                        type: 'Switch',
                        initialValue: 1,
                        options: [
                            { label: '是', value: 1 },
                            { label: '否', value: 0 },
                        ],
                    },
                ],
            },
        ];

        const { baseElement } = render(<VirtualTable columns={columns} value={[{}, {}]} />);

        await waitFor(
            async () => {
                const [firstDisabledSwitch, firstShowSwitch, secondDisabledSwitch, secondShowSwitch] =
                    baseElement.querySelectorAll('.doraemon-switch-wrap .doraemon-switch');
                const [firstInput, secondInput] = baseElement.querySelectorAll('.doraemon-input');

                await waitFor(async () => {
                    expect(firstInput).not.toBeDisabled();
                    expect(firstInput).toBeInTheDocument();
                    expect(secondInput).not.toBeDisabled();
                    expect(secondInput).toBeInTheDocument();
                });

                fireEvent.click(firstDisabledSwitch);
                await waitFor(async () => {
                    expect(firstInput).toBeDisabled();
                    expect(firstInput).toBeInTheDocument();
                    expect(secondInput).not.toBeDisabled();
                    expect(secondInput).toBeInTheDocument();
                });

                fireEvent.click(firstShowSwitch);
                await waitFor(async () => {
                    expect(firstInput).not.toBeInTheDocument();
                    expect(secondInput).not.toBeDisabled();
                    expect(secondInput).toBeInTheDocument();
                });

                fireEvent.click(secondDisabledSwitch);
                await waitFor(async () => {
                    expect(firstInput).not.toBeInTheDocument();
                    expect(secondInput).toBeDisabled();
                    expect(secondInput).toBeInTheDocument();
                });

                fireEvent.click(secondShowSwitch);
                await waitFor(async () => {
                    expect(firstInput).not.toBeInTheDocument();
                    expect(secondInput).not.toBeInTheDocument();
                });
            },
            { timeout: 2000 }
        );
    });
});
