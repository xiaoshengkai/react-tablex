/** @format */

import React, { useRef, useState } from 'react';
import VirtualTable from 'react-tablex';
import { Button, Modal, Form, InputNumber } from 'antd';
import { Input } from 'antd';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

const columns = [
  {
    label: '序号',
    fieldkey: 'index',
    width: 80,
    custom: VirtualTable.VirtualNo,
  },
  {
    label: '名字',
    fieldkey: 'name',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Text',
  },
  {
    label: '年龄',
    fieldkey: 'age',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Text',
  },
  {
    label: '备注',
    fieldkey: 'remarks',
    require: true,
    rules: [{ required: true, message: '必填' }],
    type: 'Text',
  },
];

const DelButton = ({ delRow, disabled }) => {
  return (
    <Button disabled={disabled} type="link" onClick={delRow}>
      删除
    </Button>
  );
};

const MoveRowUpButton = ({ moveRowUp, disabled }) => {
  return (
    <Button disabled={disabled} type="link" onClick={moveRowUp}>
      上移
    </Button>
  );
};

const MoveRowDownButton = ({ moveDownUp, disabled }) => {
  return (
    <Button disabled={disabled} type="link" onClick={moveDownUp}>
      下移
    </Button>
  );
};

const FormModal = ({ onChange, onOk, onClose, value }) => {
  return (
    <Modal visible title="编辑内容" onOk={onOk} onCancel={onClose}>
      <div>
        <FormItem label="名字">
          <Input
            defaultValue={value.name}
            width={200}
            onChange={e => onChange('name', e.target.value)}
          />
        </FormItem>
        <FormItem label="年龄">
          <InputNumber
            width={200}
            defaultValue={value.age}
            onChange={value => onChange('age', value)}
          />
        </FormItem>
        <FormItem label="备注">
          <TextArea
            width={200}
            defaultValue={value.remarks}
            onChange={e => onChange('remarks', e.target.value)}
          />
        </FormItem>
      </div>
    </Modal>
  );
};

interface OperateProps {
  operateText?: string;
  btnType?: string;
  addRwoValue?: (value: RecordType) => void;
  changeRowValue?: (value: RecordType) => void;
  rowData?: RecordType;
  disabled?: boolean;
}

const Operate = ({
  operateText = '编辑',
  btnType = 'link',
  addRwoValue,
  changeRowValue,
  rowData = {},
  disabled = false,
}: OperateProps) => {
  const [visible, setVisible] = useState(false);
  const [rowDataValue, setRowDataValue] = useState(rowData);

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (name, value) => {
    setRowDataValue({
      ...rowDataValue,
      [name]: value,
    });
  };

  const onOk = () => {
    addRwoValue?.(rowDataValue);
    changeRowValue?.(rowDataValue);
    onClose();
  };

  return (
    <div>
      <Button disabled={disabled} type={btnType} onClick={onOpen}>
        {operateText}
      </Button>

      {visible ? (
        <FormModal
          onChange={onChange}
          onOk={onOk}
          onClose={onClose}
          value={rowData}
        />
      ) : null}
    </div>
  );
};

const Demo = () => {
  const virtualTableRef = useRef(null);
  const [dateSource, setDataSource] = useState([
    { name: '小红', age: 18, remarks: '爱玩' },
    { name: '小蓝', age: 8, remarks: '就是爱玩儿' },
  ]);

  const onChange = value => {
    setDataSource(value);
  };

  const addRow = value => {
    virtualTableRef.current?.addRow(value);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Operate
          operateText="添加行"
          btnType="primary"
          addRwoValue={value => addRow(value)}
        />
      </div>
      <VirtualTable
        ref={virtualTableRef}
        columns={columns}
        value={dateSource}
        onChange={onChange}
        operateItems={[
          {
            custom: DelButton,
            disabled: cellProps => cellProps.rowIndex === 0,
          },
          { custom: MoveRowUpButton },
          { custom: MoveRowDownButton },
          { custom: Operate },
        ]}
        operateConfig={{ width: 180 }}
      />
    </div>
  );
};

export default Demo;
