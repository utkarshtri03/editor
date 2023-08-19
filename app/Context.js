"use client";
import React, { createContext, useState, useContext } from "react";

const QueryContext = createContext();

export function useQueryContext() {
  return useContext(QueryContext);
}

export function QueryProvider({ children }) {
  const [inputValue, setInputValue] = useState("select * from data");
  const [queriesAvailable, setQueriesAvailable] = useState([
    "select * from data",
    "select name,gender from data",
    "select id,phone from table",
  ]);
  const [queriesHistory, setQueriesHistory] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState("");
  return (
    <QueryContext.Provider
      value={{
        inputValue,
        setInputValue,
        queriesAvailable,
        setQueriesAvailable,
        queriesHistory,
        setQueriesHistory,
        selectedQuery,
        setSelectedQuery,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
}
