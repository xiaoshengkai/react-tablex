---
title: 'watch 处理逻辑'
---
## 介绍
编码思维上的改变，由原来的处理逻辑`我触发A事件, 处理B、C、D逻辑`，改为`我处理B逻辑，受触发A变化；我处理C逻辑，受触发A变化；我处理D逻辑，受触发A变化`

## 基础
这是一个支持`监听数据key变化，触发事件回调`的动态表格
<code src="./code/base.tsx"></code>

## 立即执行
这是一个`watch 立即执行`的动态表格
> `注意：如果值为underfind 不会执行`
<code src="./code/immediately.tsx"></code>

## 多重“监听”
这是一个支持`多监听`的动态表格
<code src="./code/deps.tsx"></code>

## 指定行单元格“监听”
这是一个支持`监听指定行单元格`的动态表格
<code src="./code/appointOfWay.tsx"></code>

## “监听”上一个field变化
这是一个支持`监听指定行单元格`的动态表格
<code src="./code/pre.tsx"></code>

## “监听”下一个field变化
这是一个支持`监听指定行单元格`的动态表格
<code src="./code/next.tsx"></code>

## “监听”整列单元格
这是一个支持`监听整列单元格`的动态表格，当前列中有一个单元格field变化就触发
<code src="./code/colOfWay.tsx"></code>