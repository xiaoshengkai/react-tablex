export enum Type {
  /**
   * 输入框
   * @description Input
   */
  InputName = 'Input',
  /**
   * 多行文本输入框
   * @description Input.TextArea
   */
  TextAreaName = 'TextArea',
  /**
   * 数字输入框
   * @description InputNumber
   */
  InputNumberName = 'InputNumber',
  /**
   * 单选框
   * @description Radio
   */
  RadioName = 'Radio',
  /**
   * 选择器
   * @description Select
   */
  SelectName = 'Select',
  /**
   * 多选框
   * @description Checkbox
   */
  CheckboxName = 'Checkbox',
  /**
   * 级联选择
   * @description Cascader
   */
  CascaderName = 'Cascader',
  /**
   * 日期选择框
   * @description DatePicker
   */
  DatePickerName = 'DatePicker',
  /**
   * 月选择框
   * @description DatePicker.MonthPicker
   */
  MonthPickerName = 'MonthPicker',
  /**
   * 日期范围选择框
   * @description DatePicker.RangePicker
   */
  RangePickerName = 'RangePicker',
  /**
   * 周选择框
   * @description DatePicker.WeekPicker
   */
  WeekPickerName = 'WeekPicker',
  /**
   * 时间选择框
   * @description TimePicker
   */
  TimePickerName = 'TimePicker',
  /**
   * 开关
   * @description Switch
   */
  SwitchName = 'Switch',
  /**
   * 滑动输入条
   * @description Slider
   */
  SliderName = 'Slider',

  /*** 以下为扩展内置组件 */
  /** 文本 */
  Text = 'Text',
  /** 链接跳转，默认新开页 */
  Link = 'Link',
}