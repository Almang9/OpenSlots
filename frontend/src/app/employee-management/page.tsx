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
  import {Divider} from "@nextui-org/divider";
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
      {
        key: "2",
        name: "Zoey Lang",
        role: "Technical Lead",
        status: "Paused",
      },
      {
        key: "3",
        name: "Jane Fisher",
        role: "Senior Developer",
        status: "Active",
      },
      {
        key: "4",
        name: "William Howard",
        role: "Community Manager",
        status: "Vacation",
      },
      {
        key: "5",
        name: "Tony Reichert",
        role: "CEO",
        status: "Active",
      },
      {
        key: "6",
        name: "Zoey Lang",
        role: "Technical Lead",
        status: "Paused",
      },
      {
        key: "7",
        name: "Jane Fisher",
        role: "Senior Developer",
        status: "Active",
      },
      {
        key: "8",
        name: "William Howard",
        role: "Community Manager",
        status: "Vacation",
      },
  ]

export default function index() {
    return <>
    <h1> Employees</h1>
    <Divider/>
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

