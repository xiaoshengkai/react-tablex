import { InputProps, TextAreaProps, SearchProps } from "antd/lib/input";
import { InputNumberProps } from "antd/lib/input-number";
import { SelectProps } from "antd/lib/select";
import { RadioProps } from "antd/lib/radio";
import { CheckboxProps } from "antd/lib/checkbox";
import { CascaderOptionType } from "antd/lib/multi-cascader/Menus";
import { ZcyEditorProps } from "antd/lib/editor";
import {
  DatePickerProps,
  MonthPickerProps,
  RangePickerProps,
  WeekPickerProps,
} from "antd/lib/date-picker";
import { CascaderProps } from "antd/lib/cascader";
import { MultiCascaderProps } from "antd/lib/multi-cascader";
import { MentionProps } from "antd/lib/mention";
import { AutoCompleteProps } from "antd/lib/auto-complete";

export type OptionProps = Omit<CascaderOptionType, 'value'>;

export type AttrsProps =
  | InputProps
  | InputNumberProps
  | SearchProps
  | TextAreaProps
  | CheckboxProps
  | SelectProps
  | RadioProps
  | MentionProps
  | ZcyEditorProps
  | CascaderProps
  | MultiCascaderProps
  | DatePickerProps
  | RangePickerProps
  | MonthPickerProps
  | WeekPickerProps
  | AutoCompleteProps;
