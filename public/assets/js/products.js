var productsCart = JSON.parse(localStorage.getItem('productsCart'));
console.log(productsCart);
if (productsCart == null) {
    productsCart = [];
    console.log('Initialisation du tableau');
} else {

    productsCart = productsCart;
    console.log('Tableau existant');

    // displayDatas();
}

/*------------- AFFICHAGE DU PANIER ---------*/
let cartVue = () => {

    CartVueTitle.innerHTML = `<h5 class="modal-title" id="staticBackdropLabel">Votre panier</h5>`;
    cartVueModal.innerHTML = ``;
    let listProducts = JSON.parse(localStorage.getItem('productsCart'));
    // console.log(listProducts);
    listProducts.forEach(element => {

        idProject = listProducts.indexOf(element);

        cartVueModal.innerHTML += `
        <div class=" col-12 modal-header">
            <div class="row p-3">
                <div class="col-1">
                    <img data-id="${idProject}" class="delete" src="public/assets/img/delete.png" title="Supprimer l'article du panier">
                </div>
                <div class="col-3">${element.marque}</div>
                <div class="col-8">${element.commercialName} (${element.technicalName})</div>
            </div>
        </div>`;
    });


    cartFooterPrice.innerHTML = `<div class="text-center">
        Souhaitez vous valider le panier ou continuer vos achats ?
    </div>`;
    cartFooterVue.innerHTML = `
    <button id="btnDeleteAll" class="btn btn-secondary">Vider le panier</button>
    <button id="btnValidCmd" data-id="" type="button" class="btn btn-primary" data-bs-toggle="modal"
        data-bs-target="#modalCart">
        Confirmer la commande
    </button>
    `;
}



let btnValidCmd = () => {

    CartVueTitle.innerHTML = `<h5 class="modal-title" id="staticBackdropLabel">Confirmation de commande</h5>`;

    cartVueModal.innerHTML += `
        <div class="col-12">
            <div class="row">
                <div class="col-1">
                    <img data-id="${idProject}" class="delete" src="public/assets/img/delete.png">
                </div>
                <div class="col-3">${element.productID}</div>
                <div class="col-7">${element.marque}</div>
            </div>
        </div>`;


    cartFooterPrice.innerHTML = `<div class="text-center">
        Souhaitez vous valider le panier ou continuer vos achats ?
    </div>`;
    cartFooterVue.innerHTML = `
    <button id="btnValidCmd" data-id="" type="button" class="btn btn-primary" data-bs-toggle="modal"
        data-bs-target="#modalCart">
        Confirmer la commande
    </button>
    `;

}




let saveData = () => {

    let dataProductID = document.getElementById('btnDataLocalStorage').dataset.id;
    // console.log(dataProductID);

    /*------------- RECUPERATION DES DONNEES JSON ---------*/
    fetch(`public/assets/data/samsung.json`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            data.results.forEach(element => {
                // console.log(element.id);
                if (dataProductID == element.id) {
                    console.log('Bravo !!!');
                    infoProject = {
                        'productID': dataProductID,
                        'marque': element.marque,
                        'commercialName': element.nom_commercial,
                        'technicalName': element.nom_technique,
                        'tutorialName': element.nom_tutoriel,
                        'priceProduct': element.price,
                        'statusCmd': 'pending'
                    }
                    productsCart.push(infoProject);
                    localStorage.setItem("productsCart", JSON.stringify(productsCart));

                    CartVueTitle.innerHTML = `<h5 class="modal-title" id="staticBackdropLabel">Ajout au panier</h5>`;
                    cartVueModal.innerHTML = `
                        <div class="col-12">
                            <p>
                                <strong>Le produit à bien été ajouté au panier</strong>
                            </p>
                            <p>
                                <i>Samsung ${element.nom_commercial} (${element.nom_technique})</i>
                            </p>
                        </div>`;
                    cartFooterPrice.innerHTML = `<div class="text-center">
                        Souhaitez vous valider le panier ou continuer vos achats ?
                    </div>`;
                    cartFooterVue.innerHTML = `
                    <button id="btnCartVue" data-id="" type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#modalCart">
                        Valider mon panier
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Continuer mes achats</button>
                    `;


                }

            })
        })

}

/*------------- FONCTION ONCLICK BOUTON CATEGORIES ---------*/
let selectFamily = document.querySelectorAll('#categories');
selectFamily.forEach(eachTableElement => {
    eachTableElement.onclick = (event) => {
        /*------------- RECUPERATION DES DONNEES JSON ---------*/
        fetch(`public/assets/data/samsung.json`, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {

                // console.log(data);
                /*------------- NETTOYAGE DE L'AFFICHAGE ---------*/
                productsVue.innerHTML = '';
                /*------------- BOUCLAGE DES DONNEES DU JSON ---------*/
                data.results.forEach(element => {
                    /*------------- RECUPERATION INFO JSON ET BOUTON POUR COMPARAISON ---------*/
                    let productID = element.id;
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
                                                    <button data-id="${productID}" type="button" data-target="addToCart" class="btn btnModalModel" data-bs-toggle="modal"
                                                        data-bs-target="#modalCart">
                                                        ?
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                    }
                })

            })



            .finally(() => {


                /*------------- MODAL INFORMATIONS MODELE ---------*/
                let verifBtn = document.querySelectorAll('.btnModalModel');
                verifBtn.forEach((eachTableElement) => {
                    // console.log(eachTableElement.dataset.id);

                    eachTableElement.addEventListener('click', (event) => {
                        // console.log(event.target.dataset.id);

                        /*------------- RECUPERATION DES DONNEES JSON ---------*/
                        fetch(`public/assets/data/samsung.json`, {
                                method: "GET"
                            })
                            .then(response => response.json())
                            .then(data => {

                                data.results.forEach(element => {

                                    /*------------- COMPARAISON DES DONNEES ---------*/

                                    let productID = element.id;
                                    if (productID == event.target.dataset.id) {
                                        // console.log(element.marque);
                                        // console.log(element.nom_tutoriel);
                                        CartVueTitle.innerHTML = `<h5 class="modal-title" id="staticBackdropLabel"><strong>Samsung ${element.nom_commercial}</strong>
                                        (${element.nom_technique})</h5>`;
                                        cartVueModal.innerHTML = `
                                        <div class="modal-header">
                                            <div class="col-4">
                                                <img style="width:100%;"
                                                    src="https://trepidai-astuces.s3.amazonaws.com/images/modeles/${element.marque}_${element.nom_tutoriel}.jpg">
                                            </div>
                                            <div class="offset-1 col-7">
                                                <p>
                                                    <strong>Taille de l'écran :</strong>
                                                    <br>${element.taille_ecran} pouces
                                                </p>
                                                <p>
                                                    <strong>Caméra arrière :</strong>
                                                    <br>${element.camera_arriere}Mpx
                                                </p>
                                                <p>
                                                    <strong>Caméra avant :</strong>
                                                    <br>${element.camera_avant}Mpx
                                                </p>
                                                <p>
                                                    <strong>Capacité de stockage :</strong>
                                                    <br>${element.capacite_stockage}
                                                </p>
                                            </div>
                                        </div>`;
                                        cartFooterPrice.innerHTML = `
                                        <div>${element.price}€
                                        </div>`;
                                        cartFooterVue.innerHTML = `
                                                            <button id="btnDataLocalStorage" data-id="${productID}" type="button" class="btn btn-primary"
                                                                >
                                                                Ajouter au panier
                                                            </button>`;


                                    }
                                })

                            })
                            .finally(() => {
                                btnDataLocalStorage.addEventListener('click', saveData);
                            })
                    });
                })

            })


        /*------------- FUNCTION AJOUTER DATA EN LOCALSTORAGE ---------*/






    }
})


btnCartVue.addEventListener('click', cartVue);
btnValidCmd.addEventListener('click', validCmd);
btnDeleteAll.addEventListener('click', deleteAll);