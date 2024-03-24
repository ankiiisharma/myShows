import "./Show.css";

function Show(props) {
  const { imageUrl, name, ReleasedOn, rating } = props;

  return (
    <div>
      <img className="show-img" src={imageUrl} alt="Intersteller"></img>
      <h2 className="show-title"> {name} </h2>
      <p className="show-release">
        Released on :
        <span>
          <b> {ReleasedOn}</b>
        </span>
      </p>
      <p className="show-rating">
        iMDB rating :{" "}
        <span>
          <b>{rating}</b>
        </span>
      </p>
    </div>
  );
}

export default Show;
