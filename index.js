//44f84d4e
//http://www.omdbapi.com/?apikey=[yourkey]&

const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", () => {
    fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=44f84d4e`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
})
