import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import VirtualTable, { ColumnProps } from '../src/index';
import '@testing-library/jest-dom';
import { Radio, Input } from 'antd';

const RadioGroup = Radio.Group;

describe('只读模式', () => {
    it('基础组件', async () => {
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
                        label: '浙江',
                        children: [
                            {
                                value: 'hangzhou',
                                label: '杭州',
                                children: [
                                    {
                                        value: 'xihu',
                                        label: '西湖',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        value: 'jiangsu',
                        label: '江苏',
                        children: [
                            {
                                value: 'nanjing',
                                label: '南京',
                                children: [
                                    {
                                        value: 'zhonghuamen',
                                        label: '中华门',
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
                attrs: {
                    format: 'YYYY/MM/DD',
                },
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
                            {
                                value: '3301001',
                                label: '杭州1',
                                children: [
                                    {
                                        value: '3301061',
                                        label: '西湖区1',
                                    },
                                    {
                                        value: '3301051',
                                        label: '拱墅1',
                                        disabled: true,
                                    },
                                    {
                                        value: '3301081',
                                        label: '滨江1',
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

        const Demo = () => {
            const [dateSource, setDataSource] = useState([
                {
                    Input: '有时候，人生就像一锅烧开的毒鸡汤，虽然满是苦味，但也许正因为如此，我们才能品尝到生命的酸甜苦辣',
                    Search: '当你感到挫败时，记住你的努力不会白费，每一步都是向前迈进的动力',
                    TextArea: `在城市的海岸边，有一只名叫Sharky的超级英雄鲨鱼。
            Sharky有着一双闪闪发光的牙齿，他以帮助别人刷牙为使命。
            每天，Sharky穿梭在城市的街道上，寻找需要帮助的人。
            他用自己的牙齿为小朋友们刷牙，让他们拥有健康洁白的笑容。
            每个人都爱戴着Sharky，他成为了城市里最受欢迎的超级英雄之一。`,
                    InputNumber: 666,
                    Radio: true,
                    Select: true,
                    Checkbox: ['1', '2'],
                    Cascader: ['zhejiang', 'hangzhou', 'xihu'],
                    DatePicker: 1714485734000,
                    MonthPicker: 1721743336000,
                    RangePicker: [1715090538000, 1715436138000],
                    WeekPicker: 1713276142000,
                    TimePicker: '2024-04-22T16:04:09.000Z',
                    MultiCascader: ['330106', '3301081'],
                    Switch: true,
                    Rate: 3,
                    Slider: 26,
                },
            ]);

            const onChange = (value) => {
                setDataSource(value);
            };

            return <VirtualTable readonly columns={columns} value={dateSource} onChange={onChange} />;
        };

        render(<Demo />);

        await waitFor(async () => {
            expect(
                screen.getByText(
                    '有时候，人生就像一锅烧开的毒鸡汤，虽然满是苦味，但也许正因为如此，我们才能品尝到生命的酸甜苦辣'
                )
            ).toBeVisible();

            expect(screen.getByText('当你感到挫败时，记住你的努力不会白费，每一步都是向前迈进的动力')).toBeVisible();

            const longText = await screen.findByText(/在城市的海岸边，有一只名叫Sharky的超级英雄鲨鱼/)
            expect(longText).toBeVisible();

            expect(screen.getByText('666')).toBeVisible();

            expect(screen.getByText('8.888,888')).toBeVisible();

            expect(screen.getAllByText('是')[0]).toBeVisible();
            expect(screen.getAllByText('是')[1]).toBeVisible();

            expect(screen.getByText('多选1、多选2')).toBeVisible();

            expect(screen.getByText('浙江 / 杭州 / 西湖')).toBeVisible();

            expect(screen.getByText('2024/04/30')).toBeVisible();

            expect(screen.getByText('2024-07')).toBeVisible();

            expect(screen.getByText('2024-05-07 22:02:18 ~ 2024-05-11 22:02:18')).toBeVisible();

            expect(screen.getByText('2024-16th')).toBeVisible();

            expect(screen.getByText('00:04:09')).toBeVisible();

            expect(screen.getByText('西湖区，滨江1')).toBeVisible();

            expect(screen.getByText('00:04:09')).toBeVisible();
        }, {
          timeout: 2000
        });
    });

    it('自定义组件', async () => {
        /**
         * 自定义组件
         * 自动接收value, onChange
         */
        const Custom = ({ value, onChange, width }: any) => {
            const { type, content } = value || {};

            const onSelfChange = (params: { type?: boolean; content?: string }) => {
                onChange({ ...value, ...params });
            };

            return (
                <div className='custom' style={{ display: 'flex', alignItems: 'center', height: '30px' }}>
                    <RadioGroup onChange={(e) => onSelfChange({ type: e.target.value })} value={type}>
                        <Radio value={true}>显示</Radio>
                        <Radio value={false}>隐藏</Radio>
                    </RadioGroup>
                    {type ? (
                        <Input
                            value={content}
                            onChange={(e) => onSelfChange({ content: e.target.value })}
                            style={{ width: `${width}px` }}
                        />
                    ) : null}
                </div>
            );
        };

        Custom.display = ({ value }) => {
            return <div>{value.type && value.content ? value.content : '-'}</div>;
        };

        const columns: ColumnProps[] = [
            {
                label: '序号',
                fieldkey: 'index',
                width: 80,
                custom: VirtualTable.VirtualNo,
            },
            {
                label: '自定义组件',
                fieldkey: 'custom',
                require: true,
                rules: [{ required: true, message: '必填' }],
                custom: {
                    edit: Custom,
                    display: Custom.display,
                },
                attrs: {
                    width: 150,
                },
            },
        ];

        const Demo = () => {
            const [dateSource, setDataSource] = useState([
                {
                    custom: {
                        type: true,
                        content: '坚持不懈，即使进展缓慢，也要记得前进的每一步都在向目标靠近。',
                    },
                },
                {
                    custom: {
                        type: false,
                        content: '坚持不懈，即使进展缓慢，也要记得前进的每一步都在向目标靠近。',
                    },
                },
            ]);

            const onChange = (value) => {
                setDataSource(value);
            };

            return <VirtualTable readonly columns={columns} value={dateSource} onChange={onChange} />;
        };

        render(<Demo />);

        await waitFor(async () => {
            expect(screen.getByText('坚持不懈，即使进展缓慢，也要记得前进的每一步都在向目标靠近。')).toBeVisible();
            expect(screen.getByText('-')).toBeVisible();
        });
    });
});
