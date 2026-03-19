# react-VFormTable

<h1 align="center">
  <a href="https://react-vformtable.com" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://react-vformtable.com/logo.svg" alt="react-VFormTable logo">
  </a>
</h1>

<p align="center">
  A high-performance React virtual table/form component library designed for large data rendering
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-vformtable.svg)](https://www.npmjs.com/package/react-vformtable)
[![npm downloads](https://img.shields.io/npm/dm/react-vformtable.svg)](https://www.npmjs.com/package/react-vformtable)
[![license](https://img.shields.io/github/license/xiaoshengkai/react-VFormTable)](https://github.com/xiaoshengkai/react-VFormTable/blob/main/LICENSE)
[![stars](https://img.shields.io/github/stars/xiaoshengkai/react-VFormTable)](https://github.com/xiaoshengkai/react-VFormTable/stargazers)

</div>

<p align="center">
  <strong>English</strong> | <a href="README.md">中文</a>
</p>

## Features

- 🏎️ **High-Performance Virtual Rendering** - Handle tens of thousands of rows with smooth performance
- ⚡ **Configuration-Based Development** - Build complex table forms with JSON configuration
- 🔗 **Data Monitoring System** - Reactive data binding with configurable dependencies
- 🎨 **Rich Form Elements** - 20+ built-in form components ready to use
- 💎 **Inline Editing** - Edit directly within table cells
- 🔒 **Complete Validation** - Built-in async validation with custom rules support
- 🎯 **Flexible Layout** - Row/column layouts, fixed columns, row reordering
- 🧩 **Customizable Extension** - Support custom component rendering
- 📱 **Responsive Design** - Adapts to multiple platforms, tree-shakable

## Use Cases

- Order lists, product management, data dashboards with large datasets
- Complex form filling and data entry with row/column layouts
- Forms requiring inline editing, cascading, and data validation
- Enterprise applications like admin systems and back-office platforms

## Install

```bash
# npm
npm install react-vformtable

# yarn
yarn add react-vformtable

# pnpm
pnpm add react-vformtable
```

## Quick Start

```tsx
import React, { useState } from 'react';
import VirtualTable from 'react-VFormTable';

const columns = [
  {
    label: 'No.',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: 'Product Name',
    fieldkey: 'name',
    type: 'Input',
    width: 200,
    rules: [{ required: true, message: 'Required' }],
  },
  {
    label: 'Price',
    fieldkey: 'price',
    type: 'InputNumber',
    width: 150,
  },
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

For more examples, see [docs/pages/](https://github.com/xiaoshengkai/react-VFormTable/tree/main/docs/pages)

## Core Concepts

### VirtualTable

Main table component responsible for rendering and data management.

```tsx
<VirtualTable
  columns={columns}
  value={dataSource}
  onChange={setData}
  scroll={{ y: 400, x: 1000 }}
  operateItems={[{ type: Operate.Add }, { type: Operate.Del }]}
/>
```

### Column Configuration (columns)

Columns use `label` (title), `fieldkey` (field name), `type` (form type):

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
    rules: [{ required: true, message: 'Required' }],
  },
];
```

### Data Monitoring (watch)

Implement form field linkage through `watch` configuration at column level.

```tsx
const columns = [
  {
    label: 'Enable',
    fieldkey: 'type',
    type: 'Radio',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  {
    label: 'Price',
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

## API Documentation

For detailed API documentation, visit [Official Docs](https://react-vformtable.com)

## Examples

For more examples, see [Live Demos](https://react-vformtable.com/demo)

## Development

```bash
# Clone the repo
git clone https://github.com/xiaoshengkai/react-VFormTable.git

# Install dependencies
pnpm install

# Start docs
pnpm start

# Build
pnpm build

# Run tests
pnpm test
```

## Contributing

Issues and Pull Requests are welcome!

## License

[MIT License](https://opensource.org/licenses/MIT) © 2024 react-VFormTable Team
