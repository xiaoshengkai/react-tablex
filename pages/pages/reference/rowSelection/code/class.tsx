/** @format */

import React  from 'react';
import VirtualTable, { Operate } from 'react-VFormTable';

const columns = [
  {
    label: '内容',
    fieldkey: 'type',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Input',
  },
];

class Demo extends React.Component {
  constructor(props) {  
    super(props); 
  }  

  state = {  
    dateSource: []
  }; 

  onChange = value => {
    this.setState({
      dateSource: value
    })
  };


  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys, selectedRows', selectedRowKeys, selectedRows);
  }

  render () {
    return (
      <div>
        <VirtualTable
          columns={columns}
          defaultValue={this.state.dateSource}
          onChange={this.onChange}
          operateItems={[
            { type: Operate.Add },
            { type: Operate.Del },
            { type: Operate.MoveUp },
            { type: Operate.MoveDown },
          ]}
          operateConfig={{ width: 160 }}
          rowSelection={{
            onChange: this.onSelectChange,
          }}
        />
      </div>
    );
  }  
}


export default Demo;
