import VirtualTable from 'react-VFormTable';
import React, { useState } from 'react';

const colHideOnCell = (_, index) => {
  if (index && index % 4 === 3) {
    return { colSpan: 0 };
  }

  return {};
};



const Demo = () => {
  const [dateSource, setDataSource] = useState([
    {
      name: '张飞',
      feature: '嫉恶如仇，勇猛善战',
      ancientName: '冀州',
      modernName: '河北涿州',
    },
    {
      name: '赵云',
      feature: '忠勇无双，单骑救主',
      ancientName: '冀州',
      modernName: '河北正定',
    },
    {
      name: '张郃',
      feature: '用兵巧变，街亭建功',
      ancientName: '冀州',
      modernName: '河北任丘',
    },
    {
      name: '三人皆以勇武忠诚著称。张飞刚烈、赵云忠勇、张郃巧变，共塑北方豪迈气概，展现乱世中的坚韧与胆识。',
    },
    {
      name: '关羽',
      feature: '义薄云天，武圣之称',
      ancientName: '并州',
      modernName: '山西运城',
    },
    {
      name: '徐晃',
      feature: '治军严整，长驱直入',
      ancientName: '并州',
      modernName: '山西洪洞',
    },
    {
      name: '吕布',
      feature: '骁勇无敌，反复无常',
      ancientName: '并州',
      modernName: '内蒙古包头',
    },
    {
      name: '个性鲜明，勇冠三军。关羽重义、徐晃严整、吕布无双，体现并州人的强悍与复杂，留下深刻历史印记。',
    },
    {
      name: '典韦',
      feature: '力大无穷，护主殉职',
      ancientName: '豫州',
      modernName: '河南宁陵',
    },
    {
      name: '许褚',
      feature: '虎痴猛将，裸衣斗马超',
      ancientName: '豫州',
      modernName: '安徽亳州',
    },
    {
      name: '黄忠',
      feature: '老当益壮，百步穿杨',
      ancientName: '豫州',
      modernName: '河南南阳',
    },
    {
      name: '以忠勇顽强闻名。典韦护主、许褚悍勇、黄忠老辣，彰显豫州人的忠诚本色，用热血书写勇武传奇。',
    },
  ]);

  const columns = [
    {
      label: '三国猛将姓名',
      fieldkey: 'name',
      require: true,
      rules: [{ required: true, message: '必填' }],
      type: 'Input',
      width: 200,
      onCell: (_, index) => ({
        colSpan: index && index % 4 === 3 ? 4 : 1,
      }),
    },
    {
      label: '特点',
      fieldkey: 'feature',
      require: true,
      rules: [{ required: true, message: '必填' }],
      type: 'Input',
      width: 200,
      onCell: colHideOnCell,
    },
    {
      label: '籍贯',
      fieldkey: 'ancientName',
      require: true,
      rules: [{ required: true, message: '必填' }],
      type: 'Input',
      width: 200,
      colSpan: 2,
      onCell: (_, index) => {
        // 合并行数
        const ROW_SPAN_NUM = 3;
        // 成组数
        const GROUP_NUM = 4;

        /**
         * 保证: 正常动态添加行，不成组数据不合并，否则会报错
        */
        const remainderNum = dateSource.length % GROUP_NUM;
        if (index - (dateSource.length - remainderNum) >= 0) {  // 当前数据为未成组数据
          return {}
        }

        // 行合并
        if (index % 4 === 0) {
          return { rowSpan: ROW_SPAN_NUM };
        }
        if ([1, 2].includes(index % GROUP_NUM)) {
          return { rowSpan: 0 };
        }
  
        // 列合并
        if (index && index % GROUP_NUM === ROW_SPAN_NUM) {
          return { colSpan: 0 };
        }
  
        return {};
      },
    },
    {
      label: '现代名',
      fieldkey: 'modernName',
      require: true,
      rules: [{ required: true, message: '必填' }],
      type: 'Input',
      width: 200,
      colSpan: 0,
      onCell: colHideOnCell,
    },
  ];

  const onChange = (value) => {
    console.log('valuevalue', value);
    setDataSource(value);
  };

  return (
    <VirtualTable columns={columns} value={dateSource} onChange={onChange} />
  );
};

export default Demo;
