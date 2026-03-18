// @ts-nocheck
import * as React from 'react';

import type { AnyObject } from '../../../_util/type';
// import Input from '../../../input/Input';
import { Input, Icon } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import type { FilterSearchType, TableLocale } from '../../interface';

interface FilterSearchProps<RecordType = AnyObject> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterSearch: FilterSearchType<RecordType>;
  tablePrefixCls: string;
  locale: TableLocale;
}

const FilterSearch = <RecordType extends AnyObject = AnyObject>(
  props: FilterSearchProps<RecordType>,
) => {
  const { value, filterSearch, tablePrefixCls, locale, onChange } = props;
  if (!filterSearch) {
    return null;
  }
  return (
    <div className={`${tablePrefixCls}-filter-dropdown-search`}>
      <Input
        // prefix={<Icon type="search" />}
        prefix={<SearchOutlined />}
        placeholder={locale.filterSearchPlaceholder}
        onChange={onChange}
        value={value}
        // for skip min-width of input
        htmlSize={1}
        className={`${tablePrefixCls}-filter-dropdown-search-input`}
      />
    </div>
  );
};

export default FilterSearch;
