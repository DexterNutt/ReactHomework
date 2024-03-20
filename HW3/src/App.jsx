import React from "react";
import { Movies } from "./components/Movies";

export function App() {
  const movieArr = [
    {
      _id: 0,
      title: "Inception",
      date: "2010",
      genre: "Science Fiction",
      plot: "A thief who enters the dreams of others to steal their secrets from their subconscious.",
      imdbLink: "https://www.imdb.com/title/tt1375666/",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    },
    {
      _id: 1,
      title: "Star Wars: A New Hope",
      date: "1977",
      genre: "Science Fiction, Fantasy",
      plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      imdbLink: "https://www.imdb.com/title/tt0076759/",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg",
    },
    {
      _id: 2,
      title: "The Matrix",
      date: "1999",
      genre: "Science Fiction",
      plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      imdbLink: "https://www.imdb.com/title/tt0133093/",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    },
    {
      _id: 3,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      date: "2001",
      genre: "Fantasy",
      plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      imdbLink: "https://www.imdb.com/title/tt0120737/",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings%2C_TFOTR_%282001%29.jpg",
    },
    {
      _id: 4,
      title: "Dune",
      date: "2021",
      genre: "Science Fiction, Fantasy",
      plot: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
      imdbLink: "https://www.imdb.com/title/tt1160419/",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    },
  ];
  return <Movies movies={movieArr} />;
}
