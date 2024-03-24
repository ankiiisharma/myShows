import Show from "./Show";
import "./Shows.css";

const ShowData = [
  {
    imageUrl:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11111906_v_v10_ap.jpg",
    Name: "Predestination",
    ReleasedOn: "2014",
    Rating: "7.4/10",
    Details:
      "A temporal agent (Ethan Hawke) embarks on a final time-traveling assignment to prevent an elusive criminal from launching an attack that kills thousands of people.",
  },
  {
    imageUrl:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11111906_v_v10_ap.jpg",
    Name: "Predestination",
    ReleasedOn: "2014",
    Rating: "7.4/10",
    Details:
      "A temporal agent (Ethan Hawke) embarks on a final time-traveling assignment to prevent an elusive criminal from launching an attack that kills thousands of people.",
  },
  {
    imageUrl:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11111906_v_v10_ap.jpg",
    Name: "Predestination",
    ReleasedOn: "2014",
    Rating: "7.4/10",
    Details:
      "A temporal agent (Ethan Hawke) embarks on a final time-traveling assignment to prevent an elusive criminal from launching an attack that kills thousands of people.",
  },
  // {
  //   imageUrl : "",
  //   Name : " ",
  //   ReleasedOn: " ",
  //   Rating: " ",
  //   Details: " "
  // },
  // {
  //   imageUrl : "",
  //   Name : " ",
  //   ReleasedOn: " ",
  //   Rating: " ",
  //   Details: " "
  // },
  // {
  //   imageUrl : "",
  //   Name : " ",
  //   ReleasedOn: " ",
  //   Rating: " ",
  //   Details: " "
  // }
];

function Shows() {
  return (
    <div className="shows">
      {ShowData.map((show) => (
        <Show
          key={show.name}
          imageUrl={show.imageUrl}
          name={show.Name}
          Rating={show.Rating}
          ReleasedOn={show.ReleasedOn}
          Details={show.Details}
        ></Show>
      ))}
    </div>
  );
}

export default Shows;
