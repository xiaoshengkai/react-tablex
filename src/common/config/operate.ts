/**
 * 表格数据 - 增，删，改，移动
 */
import { IValue } from "../type";
import { getAllConfig } from "../util/watcher";
import { getMaxSSID } from "./field";

export const add = ({ dataSource, config, value = {} }) => {
  const con = getAllConfig(config);
  const rowData = con.reduce((total, { fieldkey, initialValue }) => {
    total[fieldkey] = value[fieldkey] ?? initialValue

    return total;
  }, {})

  return [...dataSource, { ssid: getMaxSSID(dataSource) + 1, ...rowData }];
};

export const del = ({ ssid, dataSource }) => {
  return dataSource.filter(element => element.ssid !== ssid)
};

export const change = ({ ssid, fieldkey, value, dataSource }) => {
  const index = dataSource.findIndex(element => element.ssid === ssid);

  dataSource[index] = {
    ...dataSource[index],
    [fieldkey]: value
  }
  return dataSource;
};

/** 改变当前行数据 */
export const changeRow = ({ ssid, value, dataSource }) => {
  const index = dataSource.findIndex(element => element.ssid === ssid);

  dataSource[index] = {
    ...dataSource[index],
    ...value
  }
  return dataSource;
};

/** 改变当前列数据 */
export const changeCol = ({ fieldkey, value, dataSource }) => {
  const fieldkeyOfvalue = value.reduce((total, { ssid, ...rest }) => {
    total[ssid] = rest[fieldkey]

    return total;
  }, {})

  return dataSource.reduce((total, item) => {
    total.push({
      ...item,
      [fieldkey]: fieldkeyOfvalue[item.ssid] ?? item[fieldkey],
    });
    return total;
  }, [] as IValue);
};

export const move = ({ ssid, dataSource }) => {
  let leftIndex = 0;
  let rightIndex = 0;
  const newDataSource = [...dataSource];

  for (let rowIndex = 0; rowIndex < dataSource.length; rowIndex++) {
    const item = dataSource[rowIndex];

    if (ssid === item?.ssid) {
      rightIndex = rowIndex;
      break;
    }

    if (item) {
      leftIndex = rowIndex;
    }
  }

  const leftEle = newDataSource[leftIndex];
  newDataSource[leftIndex] = newDataSource[rightIndex];
  newDataSource[rightIndex] = leftEle;
  return newDataSource;
};

export const moveUp = ({ ssid, dataSource }) => {
  return move({ ssid, dataSource });
};

export const moveDown = ({ ssid, dataSource }) => {
  return move({ ssid, dataSource: [...dataSource].reverse() }).reverse();
};
