# react-tablex

<h1 align="center">
  <a href="https://xiaoshengkai.github.io/react-tablex/" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://xiaoshengkai.github.io/react-tablex/logo.svg" alt="react-tablex">
  </a>
</h1>

<p align="center">
  React 高性能虚拟表格表单组件库 | 专为解决大数据渲染瓶颈而设计
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/%40xiaoshengkai%2Freact-tablex.svg)](https://www.npmjs.com/package/@xiaoshengkai/react-tablex)
[![npm downloads](https://img.shields.io/npm/dm/%40xiaoshengkai%2Freact-tablex.svg)](https://www.npmjs.com/package/@xiaoshengkai/react-tablex)
[![license](https://img.shields.io/github/license/xiaoshengkai/react-tablex)](https://github.com/xiaoshengkai/react-tablex/blob/main/LICENSE)
[![stars](https://img.shields.io/github/stars/xiaoshengkai/react-tablex)](https://github.com/xiaoshengkai/react-tablex/stargazers)

</div>

<p align="center">
  <a href="README.md">English</a> | <strong><a href="README_ZH.md">中文</a></strong>
</p>

## 特性

- 🏎️ **虚拟渲染** - 轻松渲染十万级数据，流畅不卡顿
- ⚡ **声明式配置** - 通过 JSON-like 配置构建复杂表格表单
- 🔗 **响应式数据绑定** - 内置 `watch` API 实现依赖追踪
- 🎨 **20+ 表单组件** - Input、Select、DatePicker、Cascader 等
- 💎 **行内编辑** - 直接在表格内编辑单元格
- 🔒 **异步校验** - 基于 async-validator，支持自定义规则
- 🎯 **灵活布局** - 行列布局、固定列、行排序等
- 🧩 **可扩展** - 通过 `custom` API 注册自定义组件
- 📱 **Tree-Shakable** - ES 模块，按需加载

## 适用场景

- 订单列表、商品管理、数据看板等大数据量表格场景
- 复杂表单填报、数据录入等需要行列布局的场景
- 需要行内编辑、级联联动、数据校验的表单场景
- 管理系统、后台平台等企业级应用

## 安装

```bash
npm install @xiaoshengkai/react-tablex
# 或
yarn add @xiaoshengkai/react-tablex
# 或
pnpm add @xiaoshengkai/react-tablex
```

## 快速开始

```tsx
import React, { useState } from 'react';
import VirtualTable from 'react-tablex';

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '名称',
    fieldkey: 'name',
    type: 'Input',
    width: 200,
    rules: [{ required: true }],
  },
  { label: '价格', fieldkey: 'price', type: 'InputNumber', width: 150 },
  {
    label: '状态',
    fieldkey: 'status',
    type: 'Select',
    width: 150,
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 },
    ],
  },
];

export default () => (
  <VirtualTable
    columns={columns}
    value={dataSource}
    onChange={setData}
    scroll={{ y: 400 }}
  />
);
```

更多示例请访问 [在线文档](https://xiaoshengkai.github.io/react-tablex/pages/reference/base)

## 核心概念

### VirtualTable

核心组件，负责渲染和状态管理。

```tsx
<VirtualTable
  columns={columns}
  value={dataSource}
  onChange={setData}
  scroll={{ y: 400, x: 1000 }}
  operateItems={[{ type: Operate.Add }, { type: Operate.Del }]}
/>
```

### 列配置

每列需指定 `label`、`fieldkey`，可选 `type`：

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
    rules: [{ required: true }],
  },
];
```

### Watch 监听

声明式依赖管理，实现表单项联动：

```tsx
{
  label: '价格',
  fieldkey: 'price',
  type: 'InputNumber',
  fieldShow: false,
  watch: [{
    deps: ['type'],
    handle(value, { updateSelfConfig }) {
      updateSelfConfig({ fieldShow: value });
    }
  }]
}
```

## 文档

- [官方站点](https://xiaoshengkai.github.io/react-tablex/)
- [在线示例](https://xiaoshengkai.github.io/react-tablex/pages/reference/base)

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

[MIT License](https://opensource.org/licenses/MIT)
