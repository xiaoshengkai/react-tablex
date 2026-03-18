---
order: 0
group: design
---

# 核心设计详解

## 整体架构设计
![](https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/3f048c27-81a3-4ee5-85f6-dff5e42b30ca.png)

## 组件渲染
整个表格采用 antd rc-table 模式进行二次扩展开发

#### 表格表单渲染
![画板](https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/e28c9754-7fe5-4af1-b287-20c8b15ad47a.jpeg)

通过定义 `JSON` 的方式来配置 最终表格表单展示形态。

首先拿到 `JSON` 进行遍历，提取每一项的 `key`，其中根据 `type` 或者 `custom` 来渲染 单元格 `Field`，返回组装出 `cellRenderer` 表格表单渲染。其中，单元格`Field` 渲染会由 `VirtualItem` 来承接渲染，这个具体下面会讲到！

![](https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/570dbfd7-4801-4fcc-bc17-b5b5e445ca85.png)

#### 行自适应高度
![画板](https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/a5d9f31d-e49b-4a38-a852-5af86635c51c.jpeg)

利用 `antd rc-table` 中的特性 `rowHeight`来控制表格每一行的高度特性，那么我只要能够得到每一行的真实高度即可设置虚拟表格行动态高度！

首先设置`relHeaderHeight` ， `relRowHeights`两个状态来分别控制表头高度和行高度，然后通过监听当前表格DOM的变化来触发计算，通过计算出每一行的中的单元格高度，最后通过比较，以最高的单元格高度作为当前行的高度，重新渲染表格！

优化：通过节流的方式，限制表格DOM变化触发的副作用次数

## FiledStore 注册
![画板](https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/0e807225-5bcf-4084-ad09-62825cb703c0.jpeg)

整个表格表单会被解析成 `FiledStore`对象，它是对表单每个字段的描述。

首先，在组件初始化（`dataSource\columns`更新）的情况下，触发全字段的注册，调用`registerFieldsStore`方法，遍历`columns`，如果`columns`存在`子columns`嵌套的情况，会递归继续遍历，在遍历的过程中，会去定义一些方法，比如：获取当前表格数据、更新当前当前单元格参数、校验、当前字段所在行标识ssid，收集的方法等等；然后对 dataSource进行遍历，为每一个字段（Field）进行挂载上述方法。



![](https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/a6bd63fc-e017-4758-ba57-4b0dd332818e.png)

## watch 依赖收集 & 触发
![画板](https://demo-open-doc.oss-cn-hangzhou.aliyuncs.com/1024FPA/test-zcy/null/202412/c440d710-d4d5-4842-9a90-6151dae43ff4.jpeg)

接上述：遍历`columns`过程中，存在`watch`配置，获取`deps`然后遍历，将执行函数注册到对应 `Field` 上；在后续用户通过交互触发组件 `onChange`或者 `watch`监听受 `Emit` 触发`updateCellData`，此时会去执行 `Fn`，执行的过程为队列，先注册的先执行，后执行的会覆盖前者。

