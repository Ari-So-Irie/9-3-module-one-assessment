/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
//input: an array of movies 
//output: an array of movie titles
//1.iterate through array to find, store and return movie titles
function getAllMovieTitles(movies) {
  titleArray = []
  for (i = 0; i < movies.length; i++) {
    if (movies[i].title) {
      titleArray.push(movies[i].title)
    } else if (!movies[i].title) {
      titleArray = []
    }
  } return titleArray
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {

  let maxValue = 0;
  let result = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].metascore > maxValue) {
      maxValue = movies[i].metascore;
      result = Number(maxValue)
    }
    else if (!(movies)) {
      return 0
    }
  }
  return result
}


/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if (!movies.length) {
    return 0
  }
  let sum = 0;
  let count = 0;
  for (i = 0; i < movies.length; i++) {
    if (movies[i].imdbRating) {

      sum += Number(movies[i].imdbRating)
      count++
      total = Number(sum / count)
    }
  }
  return total
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let ratedObj = {}
  let count1 = 0;
  let count2 = 0
  let count3 = 0
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rated === "G") {
      count1++;
    } else if (movies[i].rated === "PG") {
      count2++;
    } else if (movies[i].rated === "PG-13") {
      count3++
    }
  }
  if (!movies.length) {
    return {}
  }else if (count1 > 0){
    ratedObj["G"] = count1;
    ratedObj["PG"]= count2;
    return ratedObj;
  }else  ratedObj["PG"] = count2;
  ratedObj["PG-13"] = count3;
  return ratedObj
}
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  for (i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      return movies[i];
    }
  }
  return null
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) { 
  let movArray = []
  for(i=0 ;i < movies.length ; i++){
    if(movies[i].genre.toLowerCase().includes(genre.toLowerCase())){
      movArray.push(movies[i])
    }
  }
  return movArray
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let releasedArray = [];
  
    if(!movies.length){
      return releasedArray
    }
    for (let i = 0; i < movies.length; i++) {
     if(movies[i].released.split(" ").pop() <= year) {
      releasedArray.push(movies[i])
    
    }
  }
  return releasedArray
}


/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies){ 
let moneybox = 0
let namebox = null
for(let i=0;i<movies.length;i++){
  let bigbox = movies[i].boxOffice.split(',').join('').substring(1);
  if(Number(bigbox) > moneybox){
    moneybox = bigbox;
    namebox = movies[i].title;
  }
}
return namebox
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
