//44f84d4e
//http://www.omdbapi.com/?apikey=[yourkey]&

const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const movieCardContainer = document.getElementById("movie-card-container")

searchBtn.addEventListener("click", () => {
    fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=44f84d4e`)
        .then(response => response.json())
        .then(movie => {
            console.log(movie)
            movieCardContainer.innerHTML += `
                <div class="movie-card" id="movie-card">
                    <img class="movie-poster" src="${movie.Poster}"/>
                    <div class="movie-info">
                        <div class="movie-title-rating">
                            <h2 class="movie-title">${movie.Title}</h2>
                            <h4>⭐${movie.imdbRating}</h4>
                        </div>
                        <div class="runtime-genre-watchlist">
                            <p>${movie.Runtime}</p>
                            <p>${movie.Genre}</p>
                            <button class="add-to-watchlist">+ Watchlist</button>
                        </div>
                        <p>${movie.Plot}</p>
                    </div>
                    <br>
                </div>

            `
        })
})

/*TODO
change the JS so that the movie info is saved to an object called movieDetails, then pull the info
from movieDetails to the movieCardContainer.innerHTML using a loop. This will make it easier to delete a movie card from the list.

*/