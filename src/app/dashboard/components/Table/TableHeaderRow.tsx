import React from 'react'

interface TableHeaderRowProps {
    headers: string[]
}

const TableHeaderRow: React.FC<TableHeaderRowProps> = ({headers}) => {

    console.log(headers);
    

  return (
    <>
        <tr className="bg-white">
            {
                headers.map((header, index)=>(
                    <th key={index} className="px-4 py-2 text-left">{header}</th>
                ))
            }
        </tr>
    </>
  )
}

export default TableHeaderRow