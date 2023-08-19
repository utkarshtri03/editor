"use client";
import React from "react";
import { useQueryContext } from "./Context";
import QueryList from "./QueryList";

const LeftDash = () => {
  const { queriesHistory, queriesAvailable, setSelectedQuery } =
    useQueryContext();
  return (
    <div className="h-screen w-10/12 md:w-1/4 flex flex-col space-y-6 md:ml-8">
      <QueryList
        title="Queries History"
        queries={queriesHistory}
        setSelectedQuery={setSelectedQuery}
      />
      <QueryList
        title="Saved Queries"
        queries={queriesAvailable}
        setSelectedQuery={setSelectedQuery}
      />
    </div>
  );
};

export default LeftDash;
