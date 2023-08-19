"use client";
import React, { useState } from "react";

const QueryList = ({ title, queries, setSelectedQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
  };

  const filteredQueries = queries.filter((query) =>
    query.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-1/2 bg-zinc-300 rounded-2xl ">
      <div className="flex flex-col items-center pt-3">
        <p className="mb-2 text-blue-700 font-bold">{title}</p>
        <input
          className="rounded-lg w-4/5 h-8"
          placeholder="Search...."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />

        <ul className="overflow-y-auto max-h-48  w-4/5">
          {filteredQueries.map((val, i) => {
            return (
              <li key={i}>
                <button
                  className="bg-white rounded-lg w-full h-full mt-2 flex pl-2"
                  onClick={() => handleQueryClick(val)}
                >
                  {val}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QueryList;
