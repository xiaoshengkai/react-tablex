# react-tablex

<h1 align="center">
  <a href="https://xiaoshengkai.github.io/react-tablex/" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://xiaoshengkai.github.io/react-tablex/logo.svg" alt="react-tablex">
  </a>
</h1>

<p align="center">
  High-performance React Virtual Table & Form Component Library | Built for massive data rendering
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/%40xiaoshengkai%2Freact-tablex.svg)](https://www.npmjs.com/package/@xiaoshengkai/react-tablex)
[![npm downloads](https://img.shields.io/npm/dm/%40xiaoshengkai%2Freact-tablex.svg)](https://www.npmjs.com/package/@xiaoshengkai/react-tablex)
[![license](https://img.shields.io/github/license/xiaoshengkai/react-tablex)](https://github.com/xiaoshengkai/react-tablex/blob/main/LICENSE)
[![stars](https://img.shields.io/github/stars/xiaoshengkai/react-tablex)](https://github.com/xiaoshengkai/react-tablex/stargazers)

</div>

<p align="center">
  <strong>English</strong> | <a href="README_ZH.md">中文</a>
</p>

## Features

- 🏎️ **Virtual Rendering** - Renders 100,000+ rows smoothly with zero lag
- ⚡ **Declarative Configuration** - Build complex tables/forms via JSON-like config
- 🔗 **Reactive Data Binding** - Built-in dependency tracking with `watch` API
- 🎨 **20+ Form Components** - Input, Select, DatePicker, Cascader, etc.
- 💎 **Inline Editing** - Edit cells directly in the table
- 🔒 **Async Validation** - Powered by async-validator with custom rule support
- 🎯 **Flexible Layout** - Row/column layouts, fixed columns, row reordering
- 🧩 **Extensible** - Register custom components via `custom` API
- 📱 **Tree-Shakable** - ES modules, optimized bundle size

## Use Cases

- Order lists, product management, data dashboards with large datasets
- Complex form filling and data entry requiring row/column layouts
- Forms requiring inline editing, cascading, and data validation
- Enterprise applications like admin systems and back-office platforms

## Installation

```bash
npm install @xiaoshengkai/react-tablex
# or
yarn add @xiaoshengkai/react-tablex
# or
pnpm add @xiaoshengkai/react-tablex
```

## Quick Start

```tsx
import React, { useState } from 'react';
import VirtualTable from 'react-tablex';

const columns = [
  {
    label: 'No.',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: 'Name',
    fieldkey: 'name',
    type: 'Input',
    width: 200,
    rules: [{ required: true }],
  },
  { label: 'Price', fieldkey: 'price', type: 'InputNumber', width: 150 },
  {
    label: 'Status',
    fieldkey: 'status',
    type: 'Select',
    width: 150,
    options: [
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
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

For more examples, visit the [documentation site](https://xiaoshengkai.github.io/react-tablex/pages/reference/base)

## Core Concepts

### VirtualTable

Core component handling rendering and state management.

```tsx
<VirtualTable
  columns={columns}
  value={dataSource}
  onChange={setData}
  scroll={{ y: 400, x: 1000 }}
  operateItems={[{ type: Operate.Add }, { type: Operate.Del }]}
/>
```

### Column Config

Each column requires `label`, `fieldkey`, and optionally `type`:

```tsx
const columns = [
  {
    label: 'No.',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: 'Input',
    fieldkey: 'Input',
    type: 'Input',
    width: 200,
    rules: [{ required: true }],
  },
];
```

### Watch System

Declarative dependency management for reactive form linkage:

```tsx
{
  label: 'Price',
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

## Documentation

- [Official Site](https://xiaoshengkai.github.io/react-tablex/)
- [Live Demo](https://xiaoshengkai.github.io/react-tablex/pages/reference/base)

## Contributing

Issues and PRs are welcome!

## License

[MIT License](https://opensource.org/licenses/MIT)
