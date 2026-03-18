import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import VirtualTable, { ColumnProps } from '../src/index';

describe('表单元素全字段', () => {
    it('全字段展示', async () => {
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
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '多行文本输入框',
                fieldkey: 'TextArea',
                type: 'TextArea',
                width: 200,
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '数字输入框',
                fieldkey: 'InputNumber',
                type: 'InputNumber',
                width: 200,
                rules: [{ required: true, message: '必填' }],
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
                rules: [{ required: true, message: '必填' }],
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
                rules: [{ required: true, message: '必填' }],
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
                rules: [{ required: true, message: '必填' }],
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
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '日期选择框',
                fieldkey: 'DatePicker',
                type: 'DatePicker',
                width: 200,
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '月选择框',
                fieldkey: 'MonthPicker',
                type: 'MonthPicker',
                width: 200,
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '日期范围选择框',
                fieldkey: 'RangePicker',
                type: 'RangePicker',
                width: 200,
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '周选择框',
                fieldkey: 'WeekPicker',
                type: 'WeekPicker',
                width: 200,
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '时间选择框',
                fieldkey: 'TimePicker',
                type: 'TimePicker',
                width: 200,
                rules: [{ required: true, message: '必填' }],
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
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '评分',
                fieldkey: 'Rate',
                type: 'Rate',
                width: 200,
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '开关',
                fieldkey: 'Switch',
                type: 'Switch',
                width: 200,
                rules: [{ required: true, message: '必填' }],
            },
            {
                label: '滑动输入条',
                fieldkey: 'Slider',
                type: 'Slider',
                width: 200,
            },
        ];

        const { baseElement } = render(<VirtualTable columns={columns} value={[{}]} />);

        await waitFor(
            async () => {
                expect(baseElement.querySelector('.doraemon-input')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-input-search')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-input-textarea')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-input-number-input')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-input-amount')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-radio')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-select-selection')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-checkbox')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-cascader-input')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-picker')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-cascader-selector')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-rate-star-first')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-switch')).toBeInTheDocument();
                expect(baseElement.querySelector('.doraemon-slider')).toBeInTheDocument();
            },
            { timeout: 2000 }
        );
    });

    it('扩展元素', async () => {
        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '文本',
                fieldkey: 'text',
                type: 'Text',
            },
            {
                label: '文本',
                fieldkey: 'link',
                type: 'Link',
            },
        ];

        render(
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
                ]}
            />
        );

        await waitFor(
            async () => {
                const jump = screen.queryByText('跳转zcyutil2.0')
                if (!jump) throw new Error('获取不到DOM')
                fireEvent.click(jump)
            },
            { timeout: 2000 }
        );

        await waitFor(
            async () => {
                expect(screen.getByText('你是谁')).toBeVisible();
                expect(screen.getByText('跳转zcyutil2.0')).toBeVisible();
            },
            { timeout: 2000 }
        );
    });
});
