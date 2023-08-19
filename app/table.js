import React from "react";
import { data1 } from "./data";

const Table = ({ type }) => {
  let data = [];
  let columns = [];

  switch (type) {
    case "table1":
      data = data1;
      columns = ["id", "first_name", "last_name", "email", "Phone"];
      break;
    case "table2":
      data = data1;
      columns = ["first_name", "last_name", "gender"];
      break;
    case "table3":
      data = data1;
      columns = ["id", "first_name", "gender", "Phone"];
      break;
    default:
      break;
  }

  return (
    <div className="max-h-400px overflow-y-auto w-full">
      <table className="w-full table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} className="border border-slate-600 text-left">
                {column.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border border-slate-700">
              {columns.map((column) => (
                <td key={column} className="border border-slate-700">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
