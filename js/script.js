"use strict";

// const { checkPropertyChange } = require("json-schema");


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели?", "");
		
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели?", "");
		}
	},
	showMyDb: function (hidden) {
		if(!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function(hidden) {
		if(personalMovieDB.privat){
			personalMovieDB["privat"] = false;
		} else {
			personalMovieDB["privat"] = true;
		}
		
			
			
	},
	rememberMyFilms: function() {
		for (let i = 0; i<2;i++) {
			const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
			b = prompt("На сколько оцените его?", "");
			if(a != null && b != null && a != "" && b != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("done");
			} else {
				console.log("error");
				i--;
			}
		
			
		}
	},
	detectPersonalLevel: function() {
		if(personalMovieDB.count >=0 &&  personalMovieDB.count< 10) {
			console.log("Просмотрено мало фильмов");
		} else if(personalMovieDB.count >=10 &&personalMovieDB.counts <30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count >=30) {
			console.log("Вы киноман");
		} else {
			console.log("Ошибка");
		}
	},
	writeUrGenres:  function() {
		let str = "";
		for(let i = 1;i<=3;i++){
			const a = prompt(`Ваш любимый жанр под номером ${i}`);
			if(a != null &&  a != "" && a.length < 50) {
				personalMovieDB.genres[i-1]= a;
		    } else {
				console.log("error");
				i--;
			}	
		}
		personalMovieDB["genres"].forEach((item, i) =>{
			str = `Любимый жанр под номером ${i+1} - это ${item}`;	
			console.log(str);
		});	
		
	}
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeUrGenres();
personalMovieDB.showMyDb(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
























