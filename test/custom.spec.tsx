import React from 'react';
import { Radio, Input } from 'antd';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import VirtualTable, { ColumnProps } from '../src/index';

const RadioGroup = Radio.Group;

/**
 * 自定义组件
 * 自动接收value, onChange
 */
const Custom = ({ value, onChange, width }) => {
    const { type, content } = value || {};

    const onSelfChange = (params: { type?: boolean; content?: string }) => {
        onChange({ ...value, ...params });
    };

    return (
        <div className='custom'>
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

describe('自定义组件', () => {
    it('基本用法', async () => {
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
                custom: Custom,
                attrs: {
                    width: 150,
                },
            },
        ];

        const { baseElement } = render(<VirtualTable columns={columns} value={[{}]} />);

        await waitFor(
            async () => {
              expect(screen.getByText('显示')).toBeVisible();
              expect(screen.getByText('隐藏')).toBeVisible();
              expect(baseElement.querySelector('.doraemon-input')).not.toBeInTheDocument();
            },
            { timeout: 2000 }
        );

        const showResult = fireEvent.click(screen.getByText('显示'));
        await waitFor(
            async () => {
                if (showResult) {
                    expect(baseElement.querySelector('.doraemon-input')).toBeInTheDocument();
                }
            },
            { timeout: 2000 }
        );

        const HideResult = fireEvent.click(screen.getByText('隐藏'));
        await waitFor(
            async () => {
                if (HideResult) {
                    expect(baseElement.querySelector('.doraemon-input')).not.toBeInTheDocument();
                }
            },
            { timeout: 2000 }
        );
    });
});
