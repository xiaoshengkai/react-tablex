---
title: 虚拟表格表单
---

`react-tablex`是基于 `rc-table` + `自定义表格表单系统` + `自定义UI库` 编写的 React UI 组件库，用于快速编写表格表单业务，解决大数据渲染瓶颈。

### ✨ 特性：

- 📦 支持大数据渲染，解决大数据表格性能问题
- 🎪 支持表格表单配置化编写，快速编写表格表单业务场景
- ⚡ `数据监听`的设计体系，监听式处理业务逻辑
- 🦌 内置Antd4UI组件库，方便快速接入

### ✨ 安装：

:::code-group

```bash [npm]
npm install -D react-tablex
```

```bash [yarn]
yarn add -D react-tablex
```

```bash [pnpm]
pnpm add -D react-tablex
```

:::

### 🚀 示例

```jsx | pure
import React from 'react';
import VirtualTable from 'react-tablex';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    custom: VirtualTable.VirtualNo,
    width: 80,
  },
  {
    label: '名称',
    fieldkey: 'type',
    type: 'Input',
  },
];

const App = () => {
  return <VirtualTable columns={columns} />;
};

export default App;
```

具体例子 🌰，看[示例](/pages/reference/base)

## 💡 API

### VirtualTable

<TsInfo name="IVirtualTableProps"></TsInfo>

### Value

<TsInfo name="IValue"></TsInfo>

### ColumnProps

列描述数据对象描述
<TsInfo  name="ColumnProps"></TsInfo>

### 操作列配置

#### OperateItemsProps

操作列按钮配置
<TsInfo  name="OperateItemsProps"></TsInfo>

#### OperateConfigProps

操作列样式配置
<TsInfo  name="OperateConfigProps"></TsInfo>

### CustomReactNode

自定义组件定义
<TsInfo  name="CustomReactNode"></TsInfo>

### WatchProps

“观察对象”，侦听一个或多个`fieldkey`，并在数据源变化时调用所给的回调函数
<TsInfo  name="WatchProps"></TsInfo>

#### WatchPropsHandleConfig

“观察对象”，回调函数操作项
<TsInfo  name="WatchPropsHandleConfig"></TsInfo>

### RowSelectionProps

选择功能配置
<TsInfo  name="RowSelectionProps" ></TsInfo>


### ExpandableProps
展开功能的配置
<TsInfo  name="ExpandableProps" /></TsInfo>

`Type`类型枚举，所有支持的`哆啦A梦表单组件类型`说明如下：

```ts
export enum Type {
  /**
   * 输入框
   * @description Input
   */
  InputName = 'Input',
  /**
   * 多行文本输入框
   * @description Input.TextArea
   */
  TextAreaName = 'TextArea',
  /**
   * 数字输入框
   * @description InputNumber
   */
  InputNumberName = 'InputNumber',
  /**
   * 单选框
   * @description Radio
   */
  RadioName = 'Radio',
  /**
   * 选择器
   * @description Select
   */
  SelectName = 'Select',
  /**
   * 多选框
   * @description Checkbox
   */
  CheckboxName = 'Checkbox',
  /**
   * 级联选择
   * @description Cascader
   */
  CascaderName = 'Cascader',
  /**
   * 日期选择框
   * @description DatePicker
   */
  DatePickerName = 'DatePicker',
  /**
   * 月选择框
   * @description DatePicker.MonthPicker
   */
  MonthPickerName = 'MonthPicker',
  /**
   * 日期范围选择框
   * @description DatePicker.RangePicker
   */
  RangePickerName = 'RangePicker',
  /**
   * 周选择框
   * @description DatePicker.WeekPicker
   */
  WeekPickerName = 'WeekPicker',
  /**
   * 时间选择框
   * @description TimePicker
   */
  TimePickerName = 'TimePicker',
  /**
   * 级联多选
   * @description MultiCascader
   */
  MultiCascaderName = 'MultiCascader',
  /**
   * 评分
   * @description Rate
   */
  RateName = 'Rate',
  /**
   * 开关
   * @description Switch
   */
  SwitchName = 'Switch',
  /**
   * 滑动输入条
   * @description Slider
   */
  SliderName = 'Slider',

  /*** 以下为扩展内置组件 */
  /** 文本 */
  Text = 'Text',
  /** 链接跳转，默认新开页 */
  Link = 'Link',
}
```

`OptionProps`下拉对象数据 和 `AttrsProps`支持的组件属性说明如下 :

```ts
import { InputProps, TextAreaProps, SearchProps } from "antd/lib/input";
import { InputNumberProps } from "antd/lib/input-number";
import { SelectProps } from "antd/lib/select";
import { RadioProps } from "antd/lib/radio";
import { CheckboxProps } from "antd/lib/checkbox";
import { CascaderOptionType } from "antd/lib/multi-cascader/Menus";
import { ZcyEditorProps } from "antd/lib/editor";
import {
  DatePickerProps,
  MonthPickerProps,
  RangePickerProps,
  WeekPickerProps,
} from "antd/lib/date-picker";
import { CascaderProps } from "antd/lib/cascader";
import { MultiCascaderProps } from "antd/lib/multi-cascader";
import { MentionProps } from "antd/lib/mention";
import { AutoCompleteProps } from "antd/lib/auto-complete";

export type OptionProps = Omit<CascaderOptionType, 'value'>;

export type AttrsProps =
  | InputProps
  | InputNumberProps
  | SearchProps
  | TextAreaProps
  | CheckboxProps
  | SelectProps
  | RadioProps
  | MentionProps
  | ZcyEditorProps
  | CascaderProps
  | MultiCascaderProps
  | DatePickerProps
  | RangePickerProps
  | MonthPickerProps
  | WeekPickerProps
  | AutoCompleteProps;
```

## 校验规则

虚拟表格表单的校验规则是使用 [async-validator](https://github.com/yiminghe/async-validator#rules) 来实现，并从中加了一些`额外配置`

### RuleProps

```ts
import {
  InternalRuleItem,
  RuleItem,
  SyncValidateResult,
  ValidateOption,
  Values,
} from 'async-validator';

export interface RuleProps extends RuleItem {
  validator: (
    rule: InternalRuleItem & RuleExtendProps,
    value: Value,
    callback: (error?: string | Error) => void,
    source: Values,
    options: ValidateOption,
  ) => SyncValidateResult | void;
}
```

#### RuleExtendProps

`额外配置`
<TsInfo  name="RuleExtendProps"></TsInfo>

关于校验规则的一些使用场景，[跳转](/pages/reference/check)

## 单测覆盖情况
```
-----------------------------------|---------|----------|---------|---------|-------------------
File                               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------------|---------|----------|---------|---------|-------------------
All files                          |    98.6 |     79.4 |   98.43 |   98.45 |                   
 src                               |   97.82 |    71.63 |   97.43 |   97.61 |                   
  index.tsx                        |   97.82 |    71.63 |   97.43 |   97.61 | 245-246,265       
 src/common/config                 |   97.74 |    85.71 |   98.21 |   97.36 |                   
  field.ts                         |   98.68 |     77.5 |     100 |   98.43 | 16                
  index.ts                         |     100 |      100 |     100 |     100 |                   
  operate.ts                       |     100 |    86.66 |     100 |     100 | 55-69             
  render.tsx                       |   95.29 |    89.41 |   95.23 |   94.93 | 217,304,308,320   
 src/common/constants              |     100 |      100 |     100 |     100 |                   
  element.tsx                      |     100 |      100 |     100 |     100 |                   
  index.ts                         |     100 |      100 |     100 |     100 |                   
  type.ts                          |     100 |      100 |     100 |     100 |                   
 src/common/hooks                  |     100 |      100 |     100 |     100 |                   
  useForceUpdate.ts                |     100 |      100 |     100 |     100 |                   
 src/common/type                   |     100 |      100 |     100 |     100 |                   
  index.ts                         |     100 |      100 |     100 |     100 |                   
  static.d.ts                      |       0 |        0 |       0 |       0 |                   
 src/common/util                   |   99.37 |    80.85 |     100 |   99.32 |                   
  index.ts                         |     100 |      100 |     100 |     100 |                   
  watcher.ts                       |   99.26 |       80 |     100 |   99.21 | 171               
 src/components/VirtualItem        |   97.29 |    76.78 |   94.11 |   97.22 |                   
  index.tsx                        |   97.29 |    76.78 |   94.11 |   97.22 | 110-111           
 src/components/VirtualLayout      |     100 |    81.25 |     100 |     100 |                   
  index.tsx                        |     100 |    81.25 |     100 |     100 | 10-13             
 src/components/VirtualLink        |     100 |      100 |     100 |     100 |                   
  index.tsx                        |     100 |      100 |     100 |     100 |                   
 src/components/VirtualNo          |     100 |      100 |     100 |     100 |                   
  index.tsx                        |     100 |      100 |     100 |     100 |                   
 src/components/VirtualRequireItem |     100 |      100 |     100 |     100 |                   
  index.tsx                        |     100 |      100 |     100 |     100 |                   
 src/components/VirtualText        |     100 |    70.83 |     100 |     100 |                   
  index.tsx                        |     100 |    70.83 |     100 |     100 | 11-49             
 src/components/VirtualText/common |     100 |     87.5 |     100 |     100 |                   
  util.ts                          |     100 |     87.5 |     100 |     100 | 12-16             
 src/methods                       |     100 |      100 |     100 |     100 |                   
  index.ts                         |     100 |      100 |     100 |     100 |                   
-----------------------------------|---------|----------|---------|---------|-------------------
```

## 诶外说明

1. 实践过程中发现数据有ssid，其代表当前行唯一id

## 问题反馈

如果在使用过程中发现任何问题、或者有改善建议，欢迎钉钉@小盛开