import { fonctionCarrousel } from "../scripts/carrousel.js";

const homePage = {
    generate : () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        main.innerHTML = `
        <header>
            <div class="conteneurNew">
                <h2>Ouverture du site !</h2>
                <button id="boutonNouveaute" onclick='window.location = "#/pages/categories"'>Découvrir</button>
            </div>
            <div id="conteneur" class="conteneur">
                <div id="carrousel" class="carrousel">
                </div>
            </div>
        </header>
    <!---------------------------------BANNIERE PRESENTATION------------------------>
        <div class="prez" >
                    <!--TITRE-->
            <h2 id="titre_accueil"></h2>
        </div>
        <!--TEXTE-->
        <div class="banniereCitation">
            <p  id="texte_accueil"> </p>
        </div>
        <!-------------------------------------BANNIERE CATEGORIES---------------------------------------->
    <div class="backGroundFleur">
        <div class="decouvrir">
            <!--TITRE-->
            <h2>A Découvrir</h2>
        </div>
        <div class="categories" id="categories">
            <!--CATEGORIE-->
            <!---->
        </div>
    </div>
    <!----------------------------------BANNIERE PICTOS---------------------------------------->
    <div class="bannierePicto">
        <div>
            <img src="./img/hand-made.png" alt="">
            <label for="">Fait maison</label>
        </div>
        <div>
            <img src="./img/icons8-machine-à-coudre-80.png" alt="">
            <label for="">Produits artisanaux</label>
        </div>
        <div>
            <img src="./img/ecologique.png" alt="">
            <label for="">Eco-responsable</label>
        </div>
    </div>
        `

    const categories = document.getElementById('categories');
    const titreAcceuil = document.getElementById('titre_accueil');
    const texteAccueil = document.getElementById('texte_accueil');

        fetch('/api/produit/',{
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then(function(res){
            if(res.ok){
                return res.json();
            }
        })
        .then(function(data){
            const listeCategories = data;
            categories.innerHTML = `
            <a href="#/pages/categories/${listeCategories[0].id_categorie}">
                <div>
                    <div class="divImg">
                        <img class="imgCategorie" src="${listeCategories[0].url_img}" alt="">
                    </div
                    <label for="">${listeCategories[0].nom_categorie}</label>
                </div>
            </a>
            <!---->
            <!--CATEGORIE-->
            <a href="#/pages/categories/${listeCategories[1].id_categorie}">
                <div>
                    <div class="divImg">
                        <img class="imgCategorie" src="${listeCategories[1].url_img}" alt="">
                    </div>
                    <label for="">${listeCategories[1].nom_categorie}</label>
                </div>
            </a>
            <!---->
            <!--CATEGORIE-->
            <a href="#/pages/categories/${listeCategories[2].id_categorie}">
                <div>
                    <div class="divImg">
                        <img class="imgCategorie" src="${listeCategories[2].url_img}" alt="">
                    </div>
                    <label for="">${listeCategories[2].nom_categorie}</label>
                </div>
            </a>
            <!---->
            <!--CATEGORIE-->
            <a href="#/pages/categories/${listeCategories[4].id_categorie}">
                <div>
                <div class="divImg">
                        <img class="imgCategorie" src="${listeCategories[4].url_img}" alt="">
                </div>
                <label for="">${listeCategories[4].nom_categorie}</label>
                </div>
            </a>

            `
            fonctionCarrousel(data);
            conteneurName.style.position = "absolute";
        })
        .catch(function(err){
            console.log(err);
        });

        fetch('/home/', {
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
        })
        .then((data)=>{
            titreAcceuil.innerHTML = data[0].titre_accueil;
            texteAccueil.innerHTML = data[0].texte_accueil;
        })
    }    
}

export default homePage;