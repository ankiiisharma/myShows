import React, { useState } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Shows from "../components/Shows";

function Home() {
  const [searchInput, setSearch] = useState("");

  return (
    <div className="w-full bg-gradient-to-br from-black via-gray-900 to-blue-900 min-h-screen flex flex-col items-center justify-between py-10">
      <div className="flex justify-between items-center">
        <h1 className="flex text-white text-2xl font-black no-underline px-7 hover:underline decoration-red-500 cursor-pointer">
          moovies
        </h1>
        <Filters
          className="flex"
          searchInput={searchInput}
          setSearch={setSearch}
        />
      </div>
      <Shows searchInput={searchInput} />
      <div className="mt-5 mb-5">
        <Link
          to="/fillform"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
        >
          click here, to upload your fav. movies!
        </Link>
      </div>
    </div>
  );
}

export default Home;
