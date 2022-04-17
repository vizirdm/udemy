'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastMovie = prompt('Один з останніх фільмів?', ''),
    personalRating = +prompt('На скільки його оцінете? Від 1 до 10.', ''),
    lastMovieA = prompt('Один з останніх фільмів?', ''),
    personalRatingA = +prompt('На скільки його оцінете? Від 1 до 10.', '')
;

personalMovieDB.movies[lastMovie] = personalRating;
personalMovieDB.movies[lastMovieA] = personalRatingA;

console.log(personalMovieDB);
