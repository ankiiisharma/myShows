import { Search } from "lucide-react";
import { useState } from "react";

function Filters({ searchInput, setSearch }) {
  const inputChangeHandler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="flex flex-row gap-2 m-5">
        <Search className="text-white underline-offset-1" />
        <input
          type="text"
          placeholder="search here!"
          className="px-7 py-1 rounded-sm"
          onChange={inputChangeHandler}
        />
      </div>
    </>
  );
}

export default Filters;
