//44f84d4e
//http://www.omdbapi.com/?apikey=[yourkey]&


// assign variables for objects in the DOM, search counter, and movieList and watchList arrays. 
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const movieCardContainer = document.getElementById("movie-card-container")
movieSearches = 0
movieList = []
watchList = []

//event listener for the search button that calls the API to receive movie data.
searchBtn.addEventListener("click", () => {
    fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=44f84d4e`)
        .then(response => response.json())
        .then(movie => {
            console.log(movie)
            const newMovie = { // create a new movie object to add to the movieList array
                poster: movie.Poster,
                title: movie.Title,
                imdbRating: movie.imdbRating,
                runtime: movie.Runtime,
                genre: movie.Genre,
                plot: movie.Plot,
                ID: movie.imdbID,
            }
            movieList.push(newMovie)
            console.log(movieList)
            renderMovie() // use the renderMovie() function to render the searched movie to the DOM
            movieSearches++ //increment the movie searches count by 1 (Used later in the code)
        })
})

//fuction to render the moview to the DOM. data is added to the button element within the innerHTML in order to extract data from the contianer and add to the watchlist
function renderMovie(){
    movieCardContainer.innerHTML += `
                <div class="movie-card" id="movie-card">
                    <img class="movie-poster" src="${movieList[movieSearches].poster}"/>
                    <div class="movie-info">
                        <div class="movie-title-rating">
                            <h2 class="movie-title">${movieList[movieSearches].title}</h2>
                            <h4>⭐${movieList[movieSearches].imdbRating}</h4>
                        </div>
                        <div class="runtime-genre-watchlist">
                            <p>${movieList[movieSearches].runtime}</p>
                            <p>${movieList[movieSearches].genre}</p>
                            <button class="watchlist-btn movie-poster="${[movieSearches].poster}" movie-title="${movieList[movieSearches].title}" 
                            movie-imdbRating="${movieList[movieSearches].imdbRating}" movie-runtime="${movieList[movieSearches].runtime}" 
                            movie-genre="${movieList[movieSearches].genre}" movie-plot="${movieList[movieSearches].plot}">+ Watchlist</button>
                        </div>
                        <p>${movieList[movieSearches].plot}</p>
                    </div>
                    <br>
                </div>
                <hr>
            `  
}

// function to add movie to the watchlist using the add movie button
// function addToWatchList(){
//     document.getElementById(${movieList})
// }



/*TODO
change the JS so that the movie info is saved to an object called movieDetails, then pull the info
from movieDetails to the movieCardContainer.innerHTML using a loop. This will make it easier to delete a movie card from the list.

*/
