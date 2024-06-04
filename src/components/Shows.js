import Show from "./Show";
import "./Shows.css";

const ShowData = [
  {
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BY2NhNTc1OWYtODY0Zi00YjU1LTljNGItNTAzZjY5MjJlNDdmXkEyXkFqcGdeQXVyMTU0NTE4MTkz._V1_FMjpg_UX1000_.jpg",
    Name: "Predestination",
    ReleasedOn: "2014",
    Rating: "7.4/10",
    Details:
      "A temporal agent (Ethan Hawke) embarks on a final time-traveling assignment to prevent an elusive criminal from launching an attack that kills thousands of people.",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    Name: "Inception",
    ReleasedOn: "2010",
    Rating: "8.8/10",
    Details:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    Name: "Interstellar",
    ReleasedOn: "2014",
    Rating: "8.6/10",
    Details:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    Name: "The Matrix",
    ReleasedOn: "1999",
    Rating: "8.7/10",
    Details:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoAcJOvVP7JfEFBG3grthWGfZvREmlO__55Q&s",
    Name: "The Martian",
    ReleasedOn: "2015",
    Rating: "8.0/10",
    Details:
      "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
    Name: "Blade Runner 2049",
    ReleasedOn: "2017",
    Rating: "8.0/10",
    Details:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
  },
];

function Shows() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ShowData.map((show) => (
          <Show
            key={show.Name}
            imageUrl={show.imageUrl}
            name={show.Name}
            Rating={show.Rating}
            ReleasedOn={show.ReleasedOn}
            Details={show.Details}
          />
        ))}
      </div>
    </div>
  );
}

export default Shows;
