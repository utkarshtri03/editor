"use client";
import React, { useState } from "react";
import Inputquery from "./inputquery";
import Table from "./table"; // Reusable Table component
import Message from "./message";

const RightDash = () => {
  const [tableData, setTableData] = useState(null);
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  const handleRunQuery = (query) => {
    setShowInitialMessage(false);
    switch (query.trim()) {
      case "select * from data":
        setTableData("table1");
        break;
      case "select name,gender from data":
        setTableData("table2");
        break;
      case "select id,phone from table":
        setTableData("table3");
        break;
      default:
        setTableData(null);
        setShowInitialMessage(true);
        window.alert("Please select querry from Saved Queries.");
        break;
    }
  };

  return (
    <div className="w-10/12 md:w-2/3 mt-5 md:mt-0 overflow-hidden h-screen flex flex-col space-y-5">
      <div className="h-1/2">
        <Inputquery handleRunQuery={handleRunQuery} />
      </div>
      <div className="h-1/2 w-full bg-red-50 flex flex-grow flex-col justify-center items-center">
        {showInitialMessage && <Message />}
        {tableData && <Table type={tableData} />}
      </div>
    </div>
  );
};

export default RightDash;
