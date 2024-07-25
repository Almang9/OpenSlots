'use client'
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    getKeyValue
  } from "@nextui-org/table";
export default function ShiftsManagement(){
    const columns: {key:string,label:string}[] = [
        {
            key: 'key',
            label:'ID'
        },
        {
            key: 'name',
            label:'Name'
        },
        {
            key:"role",
            label: 'Role'
        },
        {
            key: 'status',
            label:'Status'
        },
      ]
      const rows = [
        {
            key: "1",
            name: "Tony Reichert",
            role: "CEO",
            status: "Active",
          },
      ]
    return <>

    <Table aria-label="Employee Table" color="danger">
    <TableHeader columns={columns}>
    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
  </TableHeader>
  <TableBody items={rows}>
  {rows.map((row) =>
      <TableRow key={row.key}>
        {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
      </TableRow>
    )}
  </TableBody>
    </Table>
    </>
}