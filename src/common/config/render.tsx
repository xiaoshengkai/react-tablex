/**
 * 渲染器
 *
 * @format
 */

import React, { cloneElement, createElement, isValidElement } from 'react';
import { Button } from 'antd';
import { get, isUndefined } from 'lodash';
import { Operate, Type, Layout } from '../constants';
import VirtualItem from '../../components/VirtualItem';
import VirtualLayout from '../../components/VirtualLayout';
import VirtualRequireItem from '../../components/VirtualRequireItem';

/** 单选 option 处理 */
const formatOptions = ({
  options = [],
  value,
  fieldkey,
  ssid,
  fieldsStore,
}) => {
  const { selectName } = get(fieldsStore, [ssid, fieldkey]) || {};
  const ids = options.map(({ value }) => value);

  if (isUndefined(value)) {
    return options;
  }

  if (ids.includes(value as never)) {
    return options;
  }

  // 保留值处理
  return [{ label: selectName, value }, ...options];
};

/**
 * 自定义render > typegetComponent
 */
export const getComponent = ({
  label,
  type,
  require,
  options,
  custom,
  fieldkey,
  ssid,
  width,
  style,
  attrs,
  initialValue,
  fieldShow = true,
  disabled,
  columnDisabled = false,
  readonly = false,
  topContent,
  bottomContent,
  prefix,
  suffix,
  className,
  cellProps,
  fieldsStore,
  BaseComponents,
}) => {
  const { cellData, rowData } = cellProps;
  let element = null;

  // 编辑态
  if (!readonly) {
    element = BaseComponents[type]?.edit || null;

    // 基础组件-特殊处理
    if (
      [
        Type.RadioName,
        Type.SelectName,
        Type.TextAreaName,
        Type.CascaderName,
      ].includes(type)
    ) {
      element = BaseComponents[type].edit(
        formatOptions({
          options,
          value: cellData,
          fieldkey,
          ssid,
          fieldsStore,
        }),
      );
    }

    if ([Type.CheckboxName].includes(type)) {
      element = BaseComponents[type].edit(options);
    }

    // 自定义组件
    if (custom) {
      element = createElement(custom?.edit || custom, cellProps);
    }
  } else {
    /*
     * 只读态
     * 优先级判断：自定义 > 基础组件
     */
    element = createElement(
      custom?.display || custom || BaseComponents[type]?.display,
      {
        ...cellProps,
        options,
        BaseComponents,
      },
    );
  }

  return isValidElement(element) && fieldkey ? (
    <VirtualItem
      fieldkey={fieldkey}
      ssid={ssid}
      label={label}
      require={require}
      width={width}
      style={style}
      attrs={attrs}
      defaultValue={rowData[fieldkey] || initialValue}
      fieldShow={fieldShow}
      disabled={disabled}
      columnDisabled={columnDisabled}
      topContent={topContent}
      bottomContent={bottomContent}
      prefix={prefix}
      suffix={suffix}
      className={className}
    >
      {element}
    </VirtualItem>
  ) : (
    element
  );
};

/** 表单配置 */
export const getColumns = (
  columns,
  operate,
  fieldsStore,
  {
    delText,
    moveUpText,
    moveDownText,
    operateItems,
    operateConfig,
    isOperationBtnVisible,
    customCellRender,
    disabled,
    readonly,
    // addChildText,
    BaseComponents,
  },
) => {
  const formatColumns = columns.reduce((total, item) => {
    const { columnShow = true, label, require, children, ...rest } = item;

    if (!columnShow) return total;

    // 支持多层 children嵌套
    const renderComponent = ({ props, ssid, cellProps, fieldsStore, children, BaseComponents }) => {
      const {
        label,
        require,
        layoutMode = Layout.Vertical,
        bottomContent,
        topContent,
      } = props;
      if (children) {
        return (
          <VirtualLayout
            layoutMode={layoutMode}
            label={label}
            require={require}
            bottomContent={bottomContent}
            topContent={topContent}
          >
            {children.map(({children, ...column}) =>
              renderComponent({ props: column, ssid, cellProps, fieldsStore, children, BaseComponents}),
            )}
          </VirtualLayout>
        );
      }

      // 全局禁用或者field存在禁用，则禁用
      const tableConfigDisabled =
        typeof disabled === 'function' ? disabled(cellProps) : disabled;

      return getComponent({
        ...props,
        ssid,
        cellProps,
        fieldsStore,
        disabled: tableConfigDisabled || props.disabled,
        readonly,
        BaseComponents,
      });
    };

    total.push({
      ...rest,
      dataIndex: rest.fieldkey,
      key: rest.fieldkey,
      title: require ? <VirtualRequireItem label={label} /> : label,
      /** 渲染器 */
      render(cellData, rowData, index) {
        const cellProps = {
          cellData,
          rowData,
          rowIndex: index,
        }
        const { ssid } = rowData;

        if (customCellRender) {
          return customCellRender(cellProps);
        }

        return renderComponent({ props: rest, ssid, cellProps, fieldsStore, children, BaseComponents });
      },
    });

    return total;
  }, []);

  /**
   * 不显示操作项
   */
  if (isOperationBtnVisible || readonly) {
    return formatColumns;
  }

  return [
    ...formatColumns,
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      width: 100,
      ...(operateConfig || {}),
      ...(operateConfig?.isFixedOperate ? {fixed: 'right'} : {}),
      render(cellData, rowData, index) {
        const cellProps = {
          cellData,
          rowData,
          rowIndex: index,
        }

        const { ssid } = rowData;
        /** 处理操作禁用 */
        const getDisabled = operateDisabled =>
          disabled ||
          (typeof operateDisabled === 'function'
            ? operateDisabled(cellProps)
            : operateDisabled);

        const itemList = operateItems
          .map(({ type, custom, disabled: itemDisabled = false }) => {
            if (type && typeof type === 'string') {
              return (
                {
                  [Operate.Del]: (
                    <Button
                      type="link"
                      onClick={() => operate({ type: Operate.Del, ssid })}
                      disabled={getDisabled(itemDisabled)}
                    >
                      {delText}
                    </Button>
                  ),
                  [Operate.MoveUp]: (
                    <Button
                      type="link"
                      onClick={() => operate({ type: Operate.MoveUp, ssid })}
                      disabled={getDisabled(itemDisabled)}
                    >
                      {moveUpText}
                    </Button>
                  ),
                  [Operate.MoveDown]: (
                    <Button
                      type="link"
                      onClick={() => operate({ type: Operate.MoveDown, ssid })}
                      disabled={getDisabled(itemDisabled)}
                    >
                      {moveDownText}
                    </Button>
                  ),
                }[type] || null
              );
            }

            if (custom) {
              const props = {
                ...cellProps,
                disabled: getDisabled(itemDisabled),
                delRow: () => operate({ type: Operate.Del, ssid }),
                moveRowUp: () => operate({ type: Operate.MoveUp, ssid }),
                moveDownUp: () => operate({ type: Operate.MoveDown, ssid }),
                changeRowValue: value =>
                  operate({ value, type: Operate.ChangeRow, ssid }),
                changeCellValue: (fieldkey, value) =>
                  operate({ value, fieldkey, type: Operate.Change, ssid }),
              };

              if (isValidElement(custom)) {
                return cloneElement(custom, { ...props });
              }

              if (typeof custom === 'function') {
                return createElement(custom, { ...props });
              }
            }
          })
          .filter(v => v);

        // 无操作
        if (itemList.length < 0) {
          return '-';
        }

        // 单操作项
        const [item] = itemList;

        if (itemList.length === 1) {
          return <div className="virtualTable_operate">{item}</div>;
        }

        // 多单操作项
        return (
          <div
            className={`virtualTable_operate ${
              // @ts-ignore
              operateConfig?.layout === Layout.Vertical
                ? 'virtualTable_operate__vertical'
                : ''
            }`}
          >
            {itemList.map((item, index) => (
              <div key={index} style={{ marginRight: '8px' }}>
                {item}
              </div>
            ))}
          </div>
        );
      },
    },
  ];
};
