var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" }
];

function getMovieTitle( index ){
  Return.movieList[3].title;
}

console.log(getMovieTitle(3));

function addMovie( movie ){
  movieList.push( movie );
  Return movieList;
}

var newMovie = {
  title: "Silence of the lamb", year: "1988", length: 155, rating: "8.5", genre: "Suspense" 
};
console.log(addMovie(newMovie));

function movieByRating(){
  //add code
  moviesrt = movieList;
  moviesrt.sort(function(va,vb)Return va.rating, vb.rating);
}

console.log(movieByRating());

function findByTitle( title ){
  //add code
}

console.log(findByTitle("matrix"));