import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  outputPath: 'docs',
  logo: false,
  favicons: ['https://cdn.zcycdn.com/zcy/desktop/media/img/favicon.ico'],
  themeConfig: defineThemeConfig({
    title: '虚拟表格表单',
    name: 'react-tablex',
    github: 'https://git.cai-inc.com/f2e-cube/quark/pc-virtual-table-front',
    footer: false,
    rtl: true,
    lastUpdated: false,
    nav: [
      { title: '介绍', link: '/introduc' },
      { title: '示例', link: '/pages/reference/base' },
      { title: '设计详解', link: '/design' },
      { title: '更新日志', link: '/changelog' },
    ],
    sidebar: {
      '/introduc': [{ children: [{ title: '介绍', link: '/introduc' }] }],
      '/design': [{ children: [{ title: '设计核心详解', link: '/design' }] }],
      '/changelog': [{ children: [{ title: '更新日志', link: '/changelog' }] }],
      '/pages/reference': [
        {
          children: [
            { title: '基础用法', link: '/pages/reference/base' },
            { title: '表单元素全字段', link: '/pages/reference/form-ele' },
            { title: '自定义组件', link: '/pages/reference/custom' },
            {
              title: '禁用 & 显示',
              link: '/pages/reference/disabled-and-show',
            },
            { title: '只读模式', link: '/pages/reference/readonly' },
            { title: '快捷操作表头', link: '/pages/reference/operate' },
            { title: '支持各种布局', link: '/pages/reference/layout' },
            { title: '选择和操作', link: '/pages/reference/row-selection' },
            {
              title: '筛选和排序',
              link: '/pages/reference/filtering-and-sorting',
            },
            { title: '可展开', link: '/pages/reference/deployable' },
            { title: '固定列', link: '/pages/reference/fixed' },
            {
              title: '行/列合并',
              link: '/pages/reference/merge-rows-and-columns',
            },
            { title: 'watch 处理逻辑', link: '/pages/reference/watch' },
            { title: '校验', link: '/pages/reference/check' },
          ],
        },
      ],
    },
    showLineNum: true,
    prefersColor: { default: 'auto', switch: false },
  }),
  // 启用 mako 后本地启动变快，但是构建会失败、api table 不展示
  mako: {},
  apiParser: {},
  resolve: {
    entryFile: './src/index.tsx',
    docDirs: ['pages'],
  },
  alias: {
    'react-tablex': require('path').resolve(__dirname, 'src/index.tsx'),
  },
  base: process.env.DOC_BASE || '/',
  publicPath: process.env.DOC_ASSET_PREFIX || '/',
});
