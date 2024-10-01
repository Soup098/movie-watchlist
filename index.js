//44f84d4e
//http://www.omdbapi.com/?apikey=[yourkey]&

const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const movieCardContainer = document.getElementById("movie-card-container")
movieSearches = 0
movieList = []
watchList = []

searchBtn.addEventListener("click", () => {
    fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=44f84d4e`)
        .then(response => response.json())
        .then(movie => {
            console.log(movie)
            const newMovie = {
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
            renderMovie()
            movieSearches++
        })
})

// function addToWatchList(){
//     document.getElementById(${movieList})
// }

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
                            <button id="${movieList[movieSearches].ID}">+ Watchlist</button>
                        </div>
                        <p>${movieList[movieSearches].plot}</p>
                    </div>
                    <br>
                </div>
                <hr>
            `
                
}



/*TODO
change the JS so that the movie info is saved to an object called movieDetails, then pull the info
from movieDetails to the movieCardContainer.innerHTML using a loop. This will make it easier to delete a movie card from the list.

*/
