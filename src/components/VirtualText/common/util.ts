import { OptionProps } from '../../../common/type';

/**
 * 递归
 * 获取label
 */
export const getLabelsByRecursion = (
  options: OptionProps[],
  value: any[],
  labels = [],
) => {
  if (!options?.length || !value?.length) {
    return labels;
  }

  const { label, children } = options.find(ele => ele.value === value[0]) || {};
  labels.push(label);

  return getLabelsByRecursion(children, value.slice(1), labels);
};


/*
* 递归
* 拍平【树结构】为【对象结构】
*/
export const flattenChildrenForMap = (options: OptionProps[], map = {}) => {
  if (!options) {
    return map
  }

  options.forEach(({ value, label, children }) => {
    map[value] = label
    return flattenChildrenForMap(children, map)
  })

  return map
}