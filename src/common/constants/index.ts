export * from './type';

export const ROW_HEIGHT = 44;
export const MAX_HEIGHT = 500;

// 行唯一id
export const SSID = 'ssid';

// 操作项
export enum Operate {
  Add = "add",
  Change = "change",
  ChangeRow = "changeRow",
  ChangeCol = "changeCol",
  Del = "del",
  MoveUp = "moveUp",
  MoveDown = "moveDown",
  // AddChild = 'addChild'
}

// text
export const ADD_TEXT = '添加行'
export const DDE_TEXT = '删除'
export const ADD_CHILD_TEXT = '添加子行'
export const MOVE_UP_TEXT = '上移'
export const MOVE_DOWN_TEXT = '下移'


/** 组件名 */
export const COMPONENT_NAME = 'virtualTable'


/** watch */
export enum Way {
  /** 监听当前field（默认） */
  Cell = 'cell',
  /** 监听当前列所有field */
  Col = 'col',
  /** 监听前一行 */
  Pre = 'pre',
  /** 监听下一行 */
  Next = 'next'
}


/** 布局方式 */
export enum Layout {
  /** 水平 */
  Horizontal = 'horizontal',
  /** 垂直 */
  Vertical= 'vertical'
}