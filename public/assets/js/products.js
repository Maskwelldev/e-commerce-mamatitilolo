/*
id
original_title
overview
poster_path
vote_average
*/


const API_KEY = "7f1f1402996361135b864d977d5871b8";

fetch(`public/assets/data/samsung.json`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);


        data.results.forEach(element => {

            let marque = element.marque;
            let commercialName = element.nom_commercial;
            let technicalName = element.nom_technique;
            let tutorialName = element.nom_tutoriel;
            console.log(commercialName);

            cardMovie.innerHTML += `
                        <div id="cardMovieCss" class="col-12 col-md-3">
                            <!-- CARD -->
                            <div class="row">
                                <div id="imgMovie" class="col-4">
                                <img style="width:50px;" src="https://trepidai-astuces.s3.amazonaws.com/images/modeles/${marque}_${tutorialName}.jpg">
                                </div>
                                <div id="infoMovie" class="col-8">
                                    <div id="titleMovie" class="row">
                                        <div class="col">
                                            <strong>${commercialName}</strong>
                                        </div>
                                    </div>
                                    <div id="textMovie" class="row">
                                        <div class="col">
                                        ${technicalName.substring(0, 90)}
                                        </div>
                                    </div>
                                    <div id="voteAverage" class="row">
                                        <div id="starsMovie" class="col-12">
                                        


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        })



    })
