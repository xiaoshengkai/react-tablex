import { forwardRef } from "react";
import { IVirtualTableImperativeReturn, IVirtualTableProps, MyVirtualTable } from "./common/type";
import VirtualNo from "./components/VirtualNo";
import InternalTable from "./innerVFTable";

const VirtualTable = forwardRef<
  IVirtualTableImperativeReturn,
  IVirtualTableProps
>(InternalTable) as MyVirtualTable;

VirtualTable.VirtualNo = VirtualNo;

export * from './common/constants';
export * from './common/constants/type';
export * from './common/type';
export * from './methods';

export default VirtualTable;