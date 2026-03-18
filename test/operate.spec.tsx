import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Button, Form, Input, InputNumber, Modal, Switch } from 'antd';
import React, { useRef, useState } from 'react';
import VirtualTable, {
  ColumnProps,
  Layout,
  Operate,
  RecordType,
} from '../src/index';

const ModalWrap = Modal as any;
const FormItem = Form.Item as any;
const TextArea = Input.TextArea;

describe('快捷操作', () => {
  it('开启表格操作项', async () => {
    const columns: ColumnProps[] = [
      {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: VirtualTable.VirtualNo,
      },
      {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [{ required: true, message: '必填' }],
        type: 'Input',
      },
    ];

    const Demo = () => {
      const [dateSource, setDataSource] = useState([
        { type: '内容1' },
        { type: '内容1' },
      ]);
      const [isOperationBtnVisible, setOperationBtnVisible] = useState(false);

      const onChange = (value) => {
        setDataSource(value);
      };

      return (
        <div>
          <Switch
            style={{ marginBottom: '20px' }}
            checkedChildren="关闭表格操作项"
            unCheckedChildren="开启表格操作项"
            checked={isOperationBtnVisible}
            onChange={(value) => setOperationBtnVisible(value)}
          />
          <VirtualTable
            columns={columns}
            value={dateSource}
            onChange={onChange}
            operateItems={[
              { type: Operate.Add },
              { type: Operate.Del },
              { type: Operate.MoveUp },
              { type: Operate.MoveDown },
            ]}
            operateConfig={{ width: 160 }}
            isOperationBtnVisible={isOperationBtnVisible}
          />
        </div>
      );
    };

    const { baseElement } = render(<Demo />);

    await waitFor(async () => {
      const moveUps = await screen.findAllByText('上移');
      const moveUp = moveUps.pop();
      if (!moveUp) throw new Error('获取不到: + moveUp');
      fireEvent.click(moveUp);

      const moveDowns = await screen.findAllByText('下移');
      const moveDown = moveDowns[1];
      if (!moveDown) throw new Error('获取不到: + moveDown');
      fireEvent.click(moveDown);

      const dels = await screen.findAllByText('删除');
      const del = dels.pop();
      if (!del) throw new Error('获取不到: + del');
      fireEvent.click(del);
    });

    await waitFor(async () => {
      expect(screen.queryByText('删除')).toBeInTheDocument();
      expect(screen.queryByText('上移')).toBeInTheDocument();
      expect(screen.queryByText('下移')).toBeInTheDocument();
      expect(screen.queryByText('+ 添加行')).toBeInTheDocument();
    });

    const switchDom = baseElement.querySelector(
      '.doraemon-switch-wrap .doraemon-switch',
    );
    switchDom && fireEvent.click(switchDom);

    await waitFor(async () => {
      expect(screen.queryByText('删除')).not.toBeInTheDocument();
      expect(screen.queryByText('上移')).not.toBeInTheDocument();
      expect(screen.queryByText('下移')).not.toBeInTheDocument();
      expect(screen.queryByText('+ 添加行')).not.toBeInTheDocument();
    });
  });

  it('操作栏纵向排布', async () => {
    const columns: ColumnProps[] = [
      {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: VirtualTable.VirtualNo,
      },
      {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [{ required: true, message: '必填' }],
        type: 'Input',
      },
    ];

    const Demo = () => {
      const [dateSource, setDataSource] = useState([
        { type: '内容1' },
        { type: '内容2' },
      ]);

      const onChange = (value) => {
        setDataSource(value);
      };

      return (
        <VirtualTable
          columns={columns}
          value={dateSource}
          onChange={onChange}
          operateItems={[
            { type: Operate.Add },
            { type: Operate.Del },
            { type: Operate.MoveUp },
            { type: Operate.MoveDown },
          ]}
          operateConfig={{ width: 50, layout: Layout.Vertical }}
        />
      );
    };

    render(<Demo />);
  });

  it('禁用控制', async () => {
    const columns: ColumnProps[] = [
      {
        label: '序号',
        fieldkey: 'index',
        width: 80,
        custom: VirtualTable.VirtualNo,
      },
      {
        label: '内容',
        fieldkey: 'type',
        require: true,
        rules: [{ required: true, message: '必填' }],
        type: 'Input',
      },
    ];

    const Demo = () => {
      const [dateSource, setDataSource] = useState([
        { type: '内容1' },
        { type: '内容2' },
      ]);

      const onChange = (value) => {
        setDataSource(value);
      };

      return (
        <div>
          <VirtualTable
            columns={columns}
            value={dateSource}
            onChange={onChange}
            operateItems={[
              /**
               * 控制第一行删除禁用
               */
              {
                type: Operate.Del,
                disabled: (cellProps) => cellProps.rowIndex === 0,
              },
              { type: Operate.Add },
            ]}
            operateConfig={{ width: 160 }}
          />
        </div>
      );
    };

    const { baseElement } = render(<Demo />);

    await waitFor(
      async () => {
        baseElement
          .querySelectorAll('.doraemon-btn')
          .forEach((element, index) => {
            if (index === 0) {
              expect(element).toBeDisabled();
            } else {
              expect(element).not.toBeDisabled();
            }
          });
      },
      { timeout: 2000 },
    );
  });

  it('自定义操作项', async () => {
    const columns: ColumnProps[] = [
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
        <ModalWrap visible title="编辑内容" onOk={onOk} onCancel={onClose}>
          <div>
            <FormItem label="名字">
              <Input
                defaultValue={value.name}
                onChange={(e) => onChange('name', e.target.value)}
              />
            </FormItem>
            <FormItem label="年龄">
              <InputNumber
                defaultValue={value.age}
                onChange={(value) => onChange('age', value)}
              />
            </FormItem>
            <FormItem label="备注">
              <TextArea
                defaultValue={value.remarks}
                onChange={(e) => onChange('remarks', e.target.value)}
                hasMaxLength
              />
            </FormItem>
          </div>
        </ModalWrap>
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
      btnType = 'text',
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
          <Button disabled={disabled} type={btnType as any} onClick={onOpen}>
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

    const mockOnChange = jest.fn();

    const Demo = () => {
      const virtualTableRef = useRef<any>(null);
      const [dateSource, setDataSource] = useState([
        { name: '小红', remarks: '' },
        { name: '小蓝', remarks: '' },
      ]);

      const onChange = (value) => {
        setDataSource(value);
        mockOnChange(value);
      };

      const addRow = (value) => {
        virtualTableRef.current?.addRow(value);
      };

      return (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <Operate
              operateText="添加行"
              btnType="primary"
              addRwoValue={(value) => addRow(value)}
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
                disabled: (cellProps) => cellProps.rowIndex === 0,
              },
              { custom: MoveRowUpButton },
              { custom: MoveRowDownButton },
              { custom: Operate },
            ]}
            operateConfig={{ width: 160 }}
          />
        </div>
      );
    };

    const { baseElement } = render(<Demo />);

    const addBtn = await screen.findByText('添加行');
    addBtn && fireEvent.click(addBtn);

    await waitFor(() => {
      const inputs = baseElement.querySelectorAll(
        '.doraemon-form-item-control input',
      );
      inputs.forEach((input, index) => {
        fireEvent.change(input, { target: { value: index } });
      });

      const textarea = baseElement.querySelector(
        '.doraemon-form-item-control textarea',
      );
      textarea && fireEvent.change(textarea, { target: { value: 2 } });
    });

    const ok = await screen.findByText('确定');
    ok && fireEvent.click(ok);

    await waitFor(async () => {
      expect(mockOnChange).toHaveBeenCalledWith([
        { ssid: 0, name: '小红', remarks: '' },
        { ssid: 1, name: '小蓝', remarks: '' },
        { ssid: 2, index: undefined, name: '0', age: 1, remarks: '2' },
      ]);
    });

    const edits = await screen.findAllByText('编辑');
    const lastEdit = edits.pop();
    lastEdit && fireEvent.click(lastEdit);

    await waitFor(() => {
      const textarea = baseElement.querySelector(
        '.doraemon-form-item-control textarea',
      );
      textarea && fireEvent.change(textarea, { target: { value: 22 } });
    });

    const ok1 = await screen.findByText('确定');
    ok1 && fireEvent.click(ok1);

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith([
        { ssid: 0, name: '小红', remarks: '' },
        { ssid: 1, name: '小蓝', remarks: '' },
        { ssid: 2, index: undefined, name: '0', age: 1, remarks: '22' },
      ]);
    });

    const moveUps = await screen.findAllByText('上移');
    const moveUp = moveUps.pop();
    if (!moveUp) throw new Error('获取不到: + moveUp');
    fireEvent.click(moveUp);

    const moveDowns = await screen.findAllByText('下移');
    const moveDown = moveDowns[1];
    if (!moveDown) throw new Error('获取不到: + moveDown');
    fireEvent.click(moveDown);

    const dels = await screen.findAllByText('删除');
    const del = dels.pop();
    if (!del) throw new Error('获取不到: + del');
    fireEvent.click(del);

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith([
        { ssid: 0, name: '小红', remarks: '' },
        { ssid: 1, name: '小蓝', remarks: '' },
      ]);
    });
  });
});
