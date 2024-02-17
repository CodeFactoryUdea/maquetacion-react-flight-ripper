import React from 'react'


interface TableDataRowProps {
    flightNumer: String;
    origin: String;
    destination: String;
    departure: String;
}

const TableDataRow = ({ flightNumer, origin, destination, departure }: TableDataRowProps) => {
    return (
        <>
            <tr className="bg-white">
                <td className="px-4 py-2">{flightNumer}</td>
                <td className="px-4 py-2">{origin}</td>
                <td className="px-4 py-2">{destination}</td>
                <td className="px-4 py-2">{departure}</td>
            </tr>

        </>
    )
}

export default TableDataRow