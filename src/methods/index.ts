import { ColumnProps } from "../common/type";

export const pageConfigFormat = (columns: ColumnProps[], pageConfigMap) => {
  return columns.map((item) => {
    const { fixedDisable, fixType, label, require, ...atrrs } =
      pageConfigMap[item.fieldkey] || {};
    if (fixedDisable) {
      item.columnDisabled = true;
    }

    if (fixType === 'hide') {
      item.fieldShow = false;
    }

    // if (fixType === 'readOnly') {

    // }

    if (label) {
      item.label = label;
    }

    if (require) {
      item.require = require;
    }

    item.attrs = { ...item.attrs, ...atrrs };

    return item;
  });
};
