/*------------- RECUPERATION DES DONNEES JSON ---------*/
fetch(`public/assets/data/samsung.json`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {

        // console.log(data);


        /*------------- FONCTION ONCLICK BOUTON CATEGORIES ---------*/
        let selectFamily = document.querySelectorAll('button');
        selectFamily.forEach(eachTableElement => {
            eachTableElement.onclick = (event) => {

                /*------------- NETTOYAGE DE L'AFFICHAGE ---------*/
                productsVue.innerHTML = '';

                /*------------- BOUCLAGE DES DONNEES DU JSON ---------*/
                data.results.forEach(element => {


                    /*------------- RECUPERATION INFO JSON ET BOUTON POUR COMPARAISON ---------*/
                    let queryFamily = event.target.dataset.famille;
                    let familyData = element.famille;

                    /*------------- COMPARAISON DES DONNEES ---------*/
                    if (queryFamily == familyData) {

                        /*------------- SI OK, RECUPERATION DES DONNEES A AFFICHER ---------*/
                        let marque = element.marque;
                        let commercialName = element.nom_commercial;
                        let technicalName = element.nom_technique;
                        let tutorialName = element.nom_tutoriel;

                        /*------------- AFFICHAGE DES DONNEES ---------*/
                        productsVue.innerHTML += `
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

                    }
                })
            }

        })



    })