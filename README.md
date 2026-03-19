# react-VFormTable

<h1 align="center">
  <a href="https://react-vformtable.com" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://react-vformtable.com/logo.svg" alt="react-VFormTable">
  </a>
</h1>

<p align="center">
  React 高性能虚拟表格表单组件库 | 专为解决大数据渲染瓶颈而设计
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-vformtable.svg)](https://www.npmjs.com/package/react-vformtable)
[![npm downloads](https://img.shields.io/npm/dm/react-vformtable.svg)](https://www.npmjs.com/package/react-vformtable)
[![license](https://img.shields.io/github/license/xiaoshengkai/react-VFormTable)](https://github.com/xiaoshengkai/react-VFormTable/blob/main/LICENSE)
[![stars](https://img.shields.io/github/stars/xiaoshengkai/react-VFormTable)](https://github.com/xoshengkai/react-VFormTable/stargazers)

</div>

<p align="center">
  <a href="README_EN.md">English</a> | <strong>中文</strong>
</p>

## 特性

- 🏎️ **高性能虚拟渲染** - 轻松处理万级数据，流畅不卡顿
- ⚡ **配置化开发** - JSON 配置即可快速构建复杂表格表单
- 🔗 **数据监听体系** - 响应式数据绑定，配置式依赖管理
- 🎨 **丰富的表单元素** - 支持 20+ 常用表单组件，开箱即用
- 💎 **行内编辑** - 表格内直接编辑，便捷高效
- 🔒 **完善的校验机制** - 内置异步校验，支持自定义规则
- 🎯 **灵活布局** - 支持行列布局、固定列、行移动等
- 🧩 **自定义扩展** - 支持自定义组件渲染，灵活可扩展
- 📱 **响应式设计** - 适配多端，可按需加载

## 适用场景

- 订单列表、商品管理、数据看板等大数据量表格场景
- 复杂表单填报、数据录入等需要行列布局的场景
- 需要行内编辑、级联联动、数据校验的表单场景
- 管理系统、后台平台等企业级应用

## 安装

```bash
# 使用 npm
npm install react-vformtable

# 使用 yarn
yarn add react-vformtable

# 使用 pnpm
pnpm add react-vformtable
```

## 快速开始

```tsx
import React, { useState } from 'react';
import VirtualTable from 'react-VFormTable';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '商品名称',
    fieldkey: 'name',
    type: 'Input',
    width: 200,
    rules: [{ required: true, message: '必填' }],
  },
  {
    label: '商品价格',
    fieldkey: 'price',
    type: 'InputNumber',
    width: 150,
  },
  {
    label: '商品状态',
    fieldkey: 'status',
    type: 'Select',
    width: 150,
    options: [
      { label: '上架', value: 1 },
      { label: '下架', value: 0 },
    ],
  },
];

const dataSource = [
  { name: 'iPhone 15', price: 6999, status: 1 },
  { name: 'iPad Pro', price: 4999, status: 1 },
  { name: 'MacBook Air', price: 7999, status: 0 },
];

export default () => {
  const [data, setData] = useState(dataSource);

  return (
    <VirtualTable
      columns={columns}
      value={data}
      onChange={setData}
      scroll={{ y: 400 }}
    />
  );
};
```

更多示例请查看 [docs/pages/](https://github.com/xiaoshengkai/react-VFormTable/tree/main/docs/pages) 目录

## 核心概念

### VirtualTable

主表格组件，负责整体渲染和数据管理。

```tsx
<VirtualTable
  columns={columns}
  value={dataSource}
  onChange={setData}
  scroll={{ y: 400, x: 1000 }}
  operateItems={[{ type: Operate.Add }, { type: Operate.Del }]}
/>
```

### 列配置 (columns)

列配置采用 `label`（标题）、`fieldkey`（字段名）、`type`（表单类型） 结构：

```tsx
const columns = [
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
];
```

### 数据监听 (watch)

通过 `watch` 配置在列级别实现表单项之间的联动。

```tsx
const columns = [
  {
    label: '是否开启',
    fieldkey: 'type',
    type: 'Radio',
    options: [
      { label: '是', value: true },
      { label: '否', value: false },
    ],
  },
  {
    label: '价格',
    fieldkey: 'price',
    type: 'InputNumber',
    fieldShow: false,
    watch: [
      {
        handle(value, { updateSelfConfig }) {
          updateSelfConfig({ fieldShow: value });
        },
        deps: ['type'],
      },
    ],
  },
];
```

## API 文档

详细的 API 文档请访问 [官方文档](https://react-vformtable.com)

## 示例

更多示例请查看 [在线示例](https://react-vformtable.com/demo)

## 开发

```bash
# 克隆仓库
git clone https://github.com/xiaoshengkai/react-VFormTable.git

# 安装依赖
pnpm install

# 启动文档
pnpm start

# 构建
pnpm build

# 运行测试
pnpm test
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

[MIT License](https://opensource.org/licenses/MIT) © Copyright (c) 2026 小盛开同学
