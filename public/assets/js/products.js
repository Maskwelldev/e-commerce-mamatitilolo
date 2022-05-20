/*------------- RECUPERATION DES DONNEES JSON ---------*/
fetch(`public/assets/data/samsung.json`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);


        /*------------- FONCTION ONCLICK BOUTON CATEGORIES ---------*/
        let selectFamily = document.querySelectorAll('button');
        selectFamily.forEach(eachTableElement => {
            eachTableElement.onclick = (event) => {

                /*------------- NETTOYAGE DE L'AFFICHAGE ---------*/
                productsVue.innerHTML = '';

                /*------------- BOUCLAGE DES DONNEES DU JSON ---------*/
                data.results.forEach(element => {


                    /*------------- RECUPERATION INFO JSON ET BOUTON POUR COMPARAISON ---------*/
                    var productID = element.id;
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
                            
                                <div class="col-12 col-md-3">
                                    <!-- CARD -->
                                    <div class="row ">
                                        <div class="col-4">
                                        <img style="width:50px;" src="https://trepidai-astuces.s3.amazonaws.com/images/modeles/${marque}_${tutorialName}.jpg">
                                        </div>
                                        <div id="infoMovie" class="col-8">
                                            <div id="titleMovie" class="row">
                                                <div class="col-12">
                                                <i>${productID}</i> / <strong>${commercialName}</strong>
                                                </div>
                                            </div>
                                            <div id="textMovie" class="row">
                                                <div class="col-10">
                                                ${technicalName}
                                                </div>
                                                <div class="col-2">
                                                    <button id="btn" data-id="${productID}" type="button" class="btn" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal${productID}">
                                                        ?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                    <div class="modal fade" id="exampleModal${productID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel"><strong>Samsung ${element.nom_commercial}</strong> (${element.nom_technique})</h5>
                                            </div>
                                            <div class="modal-body">
                                                <div class="col-6">
                                                    <img style="width:100%;" src="https://trepidai-astuces.s3.amazonaws.com/images/modeles/${marque}_${tutorialName}.jpg">
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                    <div class="col-12">
                                                        Mémoire Ram : ${element.ram}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ajouter au panier</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                    }



                    // /*------------- FONCTION ONCLICK BOUTON CATEGORIES ---------*/
                    // let infoProduct = document.querySelectorAll('#btn');
                    // infoProduct.forEach(eachTableElement => {
                    //     eachTableElement.onclick = (event) => {
                    //         console.log(event.target.dataset.id);
                    //         productIDModal = event.target.dataset.id;

                    //         data.results.forEach(elementModal => {

                    //             if (elementModal.id == productIDModal) {


                    //                 productsVue.innerHTML += `
                    //                 <div class="modal fade" id="exampleModal${productID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    //                 <div class="modal-dialog">
                    //                     <div class="modal-content">
                    //                         <div class="modal-header">
                    //                             <h5 class="modal-title" id="staticBackdropLabel"><strong>Samsung ${elementModal.nom_commercial}</strong> (${elementModal.nom_technique})</h5>
                    //                         </div>
                    //                         <div class="modal-body">
                    //                             <p>La partie se joue à deux joueurs</p>
                    //                             <p>Chaque joueur choisi entre <i>Papier</i>, <i>Feuille</i> ou <i>Ciseaux</i></p>
                    //                             <p>Les points se comptent ainsi :
                    //                                 <br>Pierre : perd face à Feuille, gagne face à Ciseaux
                    //                                 <br>Feuille : perd face à Ciseaux, gagne face à Pierre
                    //                                 <br>Ciseaux : perd face à Feuille, gagne face à Ciseaux
                    //                             </p>
                    //                             <p>Celui qui gagne marque un point </p>
                    //                         </div>
                    //                         <div class="modal-footer">
                    //                             <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Jouer</button>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //             `;
                    //             }


                    //         });


                    //     }
                    // })
                })
            }
        })



    })