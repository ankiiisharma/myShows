import Filters from "./components/Filters";
import Show from "./components/Show";
import Shows from "./components/Shows";
import { useState } from "react";

function App() {
  const [searchInput, setSearch] = useState("");

  return (
    <div className="">
      <div className="w-full bg-gradient-to-br from-black via-gray-900 to-blue-900 min-h-screen flex flex-col  items-center justify-between py-10">
        {" "}
        {/* Changed flex-col to flex-row */}
        <div className="flex justify-between items-center">
          {" "}
          {/* Added items-center for vertical alignment */}
          <h1 className="flex text-white text-2xl font-black no-underline px-7 hover:underline decoration-red-500 cursor-pointer">
            {" "}
            moovies{" "}
          </h1>
          <Filters
            className="flex"
            searchInput={searchInput}
            setSearch={setSearch}
          />
        </div>
        <Shows searchInput={searchInput}></Shows>
      </div>
    </div>
  );
}

export default App;

// https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/176739/Interstellar-Film.jpg
