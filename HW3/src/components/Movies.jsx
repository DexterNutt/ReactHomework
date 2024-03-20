import React from "react";

export const Movies = ({ movies }) => {
  return (
    <div id="movie-table">
      <table border={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Genre</th>
            <th>Plot</th>
            <th>Link</th>
            <th>Img</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, i) => {
            return (
              <tr key={i}>
                <td>{movie.title}</td>
                <td>{movie.date}</td>
                <td>{movie.genre}</td>
                <td>{movie.plot}</td>
                <td>
                  <a href={movie.imdbLink}>See on IMDB</a>
                </td>
                <td>
                  <img src={movie.imgUrl} alt="movie-poster" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

//? Да се прикаже во дополнителен фајл листа од филмови (минимум 5)
//? Да се издефинира во App.jsx со атрибути {name, date, genre, plot, imdbLink, imgUrl}
//? Листата на атрибути и приказ и слика за филмот (Сликата не мора да биде од imdb)
//? Дополнително да се користат PropTypes за дефинирање на пренесените properties
//? Како бонус може да се направи и репрезентација со ѕвезди на рејтингот на филмот.
