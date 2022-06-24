import { fonctionCarrousel } from "../scripts/carrousel.js";

const homePage = {
    generate : () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
    
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
            <div class="prez">
                        <!--TITRE-->
                <h2>Quelques mots sur l'Atelier :</h2>
            </div>
            <!--TEXTE-->
            <div class="banniereCitation">
                <p>A la recherche d’authenticité, d’une vie plus calme, au rythme lent des saisons, d’un vrai retour à la simplicité, j’ai vécu sur les routes et mon aventure m’a mené dans une vieille maison au cœur du Bocage Normand, plantée dans un espace préservé et sauvage. C’est là que l’Atelier Ginette prend place, au creux d’une nature splendide et authentique. Les créations sont toutes fabriquées à la main avec beaucoup d’amour et de bienveillance. </p>
            </div>
            <!-------------------------------------BANNIERE CATEGORIES---------------------------------------->
        <div class="backGroundFleur">
            <div class="decouvrir">
                <!--TITRE-->
                <h2>A Découvrir</h2>
            </div>
            <div class="categories">
                <!--CATEGORIE-->
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
            fonctionCarrousel(data);
            conteneurName.style.position = "absolute";
        })
        .catch(function(err){
            console.log(err);
        })
    }    
}

export default homePage;