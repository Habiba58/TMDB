// AJAX

var myHttp = new XMLHttpRequest();
var allMovies;
myHttp.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50");
myHttp.send();
myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
        allMovies = JSON.parse(myHttp.response).results;
        displayMovies();
    }
});

function displayMovies() {
    var container = ``;
    console.log(allMovies.length);
    for (var i = 0; i < allMovies.length; i++) {
        container += ` <div class="col-md-3">
        <div class="movie position-relative">
        <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" class="w-100">
        <h4 class="py-4"> ${allMovies[i].title}</h4>
        <p >${allMovies[i].overview}</p>
        <div class="vote bg-info position-absolute p-2 font-weight-bolder" >
            ${parseFloat((allMovies[i].vote_average).toFixed(1))} </div>
    </div>
    </div>
    `
    }
    document.getElementById("rowData").innerHTML = container;
}