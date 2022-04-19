'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i=0; i<2; i++) {
    const lastMovie = prompt('Один з останніх фільмів?', ''),
    personalRating = +prompt('На скільки його оцінете? Від 1 до 10.', '');

    if (lastMovie == '' || personalRating == '' || 
    lastMovie.length > 50 || lastMovie == null || personalRating == null) {
        i--;
    } else {
        personalMovieDB.movies[lastMovie] = personalRating;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Переглянуто мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    console.log('Ви класичний глядач');
} else if (personalMovieDB.count > 30) {
    console.log('Ви кіноман');
} else {
    console.log('Виникла помилка');
}

console.log(personalMovieDB);
