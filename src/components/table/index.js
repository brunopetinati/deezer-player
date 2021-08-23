import { Columns } from './columns'
// import { useMemo } from "react"
import { useTable } from "react-table";
 

const Table = (data) => {

	//const columns_memo = useMemo(() => Columns, [])
	//const data_memo = useMemo(() => data, [])


	const tableInstance = useTable({columns:Columns,
	data:data})

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
				<tr {...headerGroup.getHeaderGroupProps()}>
					{
						headerGroup.headers.map( column => (<th {...column.getHeaderProps()}>{column.render('Header')}</th>))
					}
				</tr>))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{
					rows.map(row => {prepareRow(row)
					return (
					<tr {...row.getRowProps()}>
						{row.cells.map( cell => {
							return (
							<td {...cell.getCellProps()}>
								{cell.render('Cell')}</td>)
						})}
					</tr>)})
				}
			</tbody>
		</table>
	)
}

export default Table