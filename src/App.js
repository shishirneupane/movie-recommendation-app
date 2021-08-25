import { useState } from "react";
import "./styles.css";

const movieDictionary = {
  Thriller: [
    {
      name: "Shutter Island",
      director: "Martin Scorsese",
      rating: "8.2/10",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      name: "Nightcrawler",
      director: "Dan Gilroy",
      rating: "7.8/10",
      description:
        "Louis Bloom, a petty thief, realises that he can make money by capturing photographs of crime scenes and starts resorting to extreme tactics to get them.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjM5NjkzMjE5MV5BMl5BanBnXkFtZTgwNTMzNTk4MjE@._V1_.jpg"
    },
    {
      name: "No Country for Old Men",
      director: "Coen brothers",
      rating: "8.1/10",
      description:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg"
    }
  ],
  Drama: [
    {
      name: "The Social Network",
      director: "David Fincher",
      rating: "7.7/10",
      description:
        "Mark Zuckerberg creates a social networking site, Facebook, with his friend Eduardo's help. Though it turns out to be a successful venture, he severs ties with several people along the way.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "The Godfather",
      director: "Francis Ford Coppola",
      rating: "9.2/10",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      name: "Taxi Driver",
      director: "Martin Scorsese",
      rating: "8.2/10",
      description:
        "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he decides to save an underage prostitute from her pimp in an effort to clean the city of its corruption.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
    }
  ],
  Horror: [
    {
      name: "Hereditary",
      director: "Ari Aster",
      rating: "7.3/10",
      description:
        "When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "A Quiet Place",
      director: "John Krasinski",
      rating: "7.5/10",
      description:
        "A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures. They are forced to communicate in sign language to keep the creatures at bay.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Sinister",
      director: "Scott Derrickson",
      rating: "6.8/10",
      description:
        "Washed-up true crime writer Ellison Oswalt finds a box of super 8 home movies in his new home that suggest the murder that he is currently researching is the work of a serial killer whose legacy dates back to the 1960s.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_.jpg"
    }
  ],
  Anime: [
    {
      name: "Attack On Titan",
      director: "Tetsuro Araki, Masashi Koizuka, Shinji Higuchi",
      rating: "9/10",
      description:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Death Note",
      director: "Tetsuro Araki",
      rating: "9/10",
      description:
        "A high-school student discovers a supernatural notebook that grants its user the ability to kill.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_.jpg"
    },
    {
      name: "Kengan Ashura",
      director: "Seiji Kishi",
      rating: "8/10",
      description:
        "Underground gladiator Tokita Ohma fights on behalf of business mogul Nogi Hideki, who wagers mega-business deals on the outcomes of the brutal matches.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOGZhNjVmZmYtNDU1NS00M2RlLWE2ZTktOGU3NjNhYWFlODc3XkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_FMjpg_UX1000_.jpg"
    }
  ],
  Romance: [
    {
      name: "Your Name",
      director: "Makoto Shinkai",
      rating: "8.4/10",
      description:
        "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "500 Days of Summer",
      director: "Marc Webb",
      rating: "7.7/10",
      description:
        "Tom revisits the approximate one year he shared with Summer, the girl he thought he could spend the rest of his life with. She, on the other hand, does not believe in relationships or boyfriends.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_.jpg"
    },
    {
      name: "About Time",
      director: "Richard Curtis",
      rating: "7.8/10",
      description:
        "Like all the men in his family, Tim Lake possesses the power to travel in time. With the advice of his father, he uses his special ability to pursue his romantic interest, Mary.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg"
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("Drama");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <a
        id="github-repo"
        title="Source code for this app"
        href="https://github.com/shishirneupane/movie-recommendation-app"
      >
        <i className="fab fa-github"></i>
      </a>
      <h1>
        <span role="img" aria-label="clapper board emoji">
          🎬{" "}
        </span>
        Movie Recommendation App
      </h1>
      <p>Check out my favourite movies. Select a genre to get started.</p>
      {Object.keys(movieDictionary).map((genre, index) => {
        return (
          <button onClick={() => genreClickHandler(genre)} key={index}>
            {genre}
          </button>
        );
      })}
      <hr />
      <ul>
        {movieDictionary[genre].map((movie, index) => {
          return (
            <li key={index}>
              <img src={movie.poster} alt="movie poster" />
              <div>
                <h2>{movie.name}</h2>
                <h4>Director - {movie.director}</h4>
                <h4>IMDb - {movie.rating}</h4>
                <p>{movie.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
