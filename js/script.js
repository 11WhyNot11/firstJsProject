"use strict";

let numOfFilms;

function start() {
	numOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
	
	while (numOfFilms == "" || numOfFilms == null || isNaN(numOfFilms)) {
		numOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();


const personalMovieDB = {
	count: numOfFilms,
	
	movies: {

	},
	actors: {},
	genres: [],
	privat: false
};

function showMyDb (hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}



function rememberMyFilms() {
	for (let i = 0; i<2;i++) {
		const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = prompt("На сколько оцените его?", "");
		if(a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			console.log("error");
			i--;
		}
	
		
	}
}

rememberMyFilms();

function detectPersonalLevel () {
	if(numOfFilms >=0 &&  numOfFilms< 10) {
		console.log("Просмотрено мало фильмов");
	} else if(numOfFilms >=10 && numOfFilms <30) {
		console.log("Вы классический зритель");
	} else if (numOfFilms >=30) {
		console.log("Вы киноман");
	} else {
		console.log("Ошибка");
	}
}

detectPersonalLevel();

function writeUrGenres() {
	for(let i = 1;i<=3;i++){
		const a = prompt(`Ваш любимый жанр под номером ${i}`);
		if(a != null &&  a != "" && a.length < 50) {
			personalMovieDB.genres[i-1]= a;
	}
}
}

writeUrGenres();

showMyDb(personalMovieDB.privat);


















