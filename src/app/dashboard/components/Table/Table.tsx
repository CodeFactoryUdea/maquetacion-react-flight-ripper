import React from 'react'
import TableDataRow from './TableDataRow'
import TableHeaderRow from './TableHeaderRow'

const Table = () => {
  return (
    <div className="flex flex-col m-16">
        <table className="table-auto min-w-full divide-y divide-grey-400">
           <thead>
            <TableHeaderRow headers={["Flight", "Destination", "Origin", "Departure"]}/>
           </thead>
            <tbody className="divide-y divide-grey-400">
               <TableDataRow flightNumer={"VIB-12"} origin={"Madrid"} destination={"Medellin"} departure={"12-03-2023"} />
               <TableDataRow flightNumer={"VIB-12"} origin={"Madrid"} destination={"Medellin"} departure={"12-03-2023"} />
               <TableDataRow flightNumer={"VIB-12"} origin={"Madrid"} destination={"Medellin"} departure={"12-03-2023"} />
               <TableDataRow flightNumer={"VIB-12"} origin={"Madrid"} destination={"Medellin"} departure={"12-03-2023"} />
            </tbody>
        </table>
    </div>
  )
}

export default Table