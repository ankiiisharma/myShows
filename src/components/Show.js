import { Heart } from "lucide-react";
import "./Show.css";
import { useState } from "react";

function Show(props) {
  const { imageUrl, name, ReleasedOn, Rating } = props;

  const [count, setCount] = useState(0);

  const likeButton = () => {
    setCount(count + 1);
    console.log("clicked");
  };

  return (
    <div className="bg-gray-800 text-white p-5 rounded-lg">
      <img
        className="rounded w-full h-80 object-cover"
        src={imageUrl}
        alt={name}
      ></img>
      <h2 className="text-xl font-bold mt-3 underline decoration-sky-500 hover:underline-offset-4 cursor-pointer">
        {" "}
        {name}{" "}
      </h2>
      <p className="mt-2">
        Released on :
        <span>
          <b> {ReleasedOn}</b>
        </span>
      </p>
      <div className="flex items-center gap-2 mt-3">
        <Heart
          onClick={likeButton}
          fill={count > 0 ? "red" : "white"}
          className="cursor-pointer hover:text-red-500 "
        />
        <span>{count}</span>
      </div>
      <p className="mt-2">
        iMDB rating :
        <span>
          <b> {Rating}</b>
        </span>
      </p>
    </div>
  );
}

export default Show;
