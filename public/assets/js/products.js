/*
id
original_title
overview
poster_path
vote_average
*/


const API_KEY = "7f1f1402996361135b864d977d5871b8";

fetch(`../data/samsung.json`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {

        // console.log(data); // <- {id: number, name: string}[]


        data.results.forEach(element => {
            let originalTitle = element.title;
            let overview = element.overview;
            let posterPath = element.poster_path;
            let voteAverage = element.vote_average;

            if (voteAverage >= 0 && voteAverage <= 1) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            } else if (voteAverage > 1 && voteAverage <= 2) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            } else if (voteAverage > 2 && voteAverage <= 3) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            } else if (voteAverage > 3 && voteAverage <= 4) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            } else if (voteAverage > 5 && voteAverage <= 6) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            } else if (voteAverage > 6 && voteAverage <= 7) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            } else if (voteAverage > 7 && voteAverage <= 8) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            } else if (voteAverage > 8 && voteAverage <= 9) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            } else if (voteAverage > 9 && voteAverage <= 10) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starHalf.svg"></div>
                </div>`;
            } else if (voteAverage == 10) {
                voteStars = `
                <div class="row">
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                    <div class="col-2"><img class="stars" src="public/assets/img/starFull.svg"></div>
                </div>`;
            }

            cardMovie.innerHTML += `
                        <div id="cardMovieCss" class="col-12 col-md-3">
                            <!-- CARD -->
                            <div class="row">
                                <div id="imgMovie" class="col-4">
                                <img src="https://image.tmdb.org/t/p/w500${posterPath}">
                                </div>
                                <div id="infoMovie" class="col-8">
                                    <div id="titleMovie" class="row">
                                        <div class="col">
                                            <strong>${originalTitle}</strong>
                                        </div>
                                    </div>
                                    <div id="textMovie" class="row">
                                        <div class="col">
                                        ${overview.substring(0, 90)}...
                                        </div>
                                    </div>
                                    <div id="voteAverage" class="row">
                                        <div id="starsMovie" class="col-12">
                                        


                                        ${voteStars}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        })

        let img = document.querySelectorAll('#cardMovieCss');
        let para = document.querySelector('#cardMovieCss');
        // console.table(img);
        
        img.forEach(element => {
            element.addEventListener('click', (event) => {
                let imgValue = event.target.innerText;
                console.log(imgValue);

            })
        })


    })

    .catch(function (error) {
        console.error(error);
    });
