//44f84d4e
//http://www.omdbapi.com/?apikey=[yourkey]&


// assign variables for objects in the DOM, search counter, and movieList and watchList arrays. 
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const movieCardContainer = document.getElementById("movie-card-container")

let movieSearches = 0 // movie search incrementor 
let movieList = [] // array to store searched movies as objects
let watchList = JSON.parse(localStorage.getItem("watchlist")) || [] //check local storage to see if watchlist already exists. otherwise initiate as empty string.

//event listener for the search button that calls the API to receive movie data.
searchBtn.addEventListener("click", () => {
    fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=44f84d4e`)
        .then(response => response.json())
        .then(movie => {
            const newMovie = { // create a new movie object to add to the movieList array
                poster: movie.Poster,
                title: movie.Title,
                imdbRating: movie.imdbRating,
                runtime: movie.Runtime,
                genre: movie.Genre,
                plot: movie.Plot,
            }
            movieList.push(newMovie)
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
                            <button class="watchlist-button" data-title="${movieList[movieSearches].title}">+ Watchlist</button>
                        </div>
                        <p>${movieList[movieSearches].plot}</p>
                    </div>
                    <br>
                </div>
                <hr>
            `  
}

// event listener to give functionality to rendered add to watchlist button
movieCardContainer.addEventListener("click", function(e){
    for(movie of movieList){
        if(e.target.dataset.title === movie.title){
            const onWatchlist = watchList.some(item => item.title === movie.title)
            if(!onWatchlist){
                watchList.push(movie)
                localStorage.setItem("watchlist", JSON.stringify(watchList))
                alert(`${movie.title} added to watch list`)
            }else{
                alert(`${movie.title} already on watchlist`)
            }
        }
    } 
})


