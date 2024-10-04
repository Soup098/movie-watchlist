const watchlistContainer = document.getElementById("watchlist-container")

function renderWatchlist(){
    let watchList = JSON.parse(localStorage.getItem("watchlist"))

    watchList.forEach(movie => {
        watchlistContainer.innerHTML += `
            <div class="movie-card" id="movie-card">
                <img class="movie-poster" src="${movie.poster}"/>
                    <div class="movie-info">
                        <div class="movie-title-rating">
                            <h2 class="movie-title">${movie.title}</h2>
                            <h4>⭐${movie.imdbRating}</h4>
                        </div>
                        <div class="runtime-genre-watchlist">
                            <p>${movie.runtime}</p>
                            <p>${movie.genre}</p>
                        </div>
                        <p>${movie.plot}</p>
                    </div>
                    <br>
            </div>
            <hr>
        `
    })
}

renderWatchlist()