'use strict';

let numberOfFilms;

function filmQuantityQuestion() {
    numberOfFilms = prompt('Скільки фільмів ви подивились?');
    return numberOfFilms;
}

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        filmQuantityQuestion();
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt('Один з останніх фільмів?', ''),
            personalRating = +prompt('На скільки його оцінете? Від 1 до 10.', '');

        if (lastMovie == '' || personalRating == '' ||
            lastMovie.length > 50 || lastMovie == null || personalRating == null) {
            i--;
        } else {
            personalMovieDB.movies[lastMovie] = personalRating;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Переглянуто мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Ви класичний глядач');
    } else if (personalMovieDB.count > 30) {
        console.log('Ви кіноман');
    } else {
        console.log('Виникла помилка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, '');
    }
}

writeYourGenres();
showMyDB();