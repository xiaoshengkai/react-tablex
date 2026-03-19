---
title: 表格行/列合并
---

- 表头只支持列合并，使用 `column` 里的 `colSpan` 进行设置。
- 表格支持行/列合并，当 `onCell` 里的单元格属性 `colSpan` 或者  `rowSpan` 设值为 `0` 时，设置的表格不会渲染。
- 注意动态添加行 `onCell` 处理

<code src="./code/base.tsx"></code>