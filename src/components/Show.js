import "./Show.css";

function Show() {
  return (
    <div>
      <img
        className="show-img"
        src="https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/176739/Interstellar-Film.jpg"
        alt="Intersteller"
      ></img>
      <h2 className="show-title"> Intersteller </h2>
      <p className="show-release">
        Released on :
        <span>
          <b> November 5, 2014</b>
        </span>
      </p>
      <p className="show-rating">
        iMDB rating :{" "}
        <span>
          <b>8.2/10</b>
        </span>
      </p>
    </div>
  );
}

export default Show;
