import { fonctionCarrousel } from "../scripts/carrousel.js";

const homePage = {
    generate : () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
    
        fetch('http://localhost:1337/api/categories?populate[articles][populate][0]=image&populate=image_categories',{
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
            const listeCategories = data.data;
            fetch('http://localhost:1337/api/texte-accueils', {
                headers:{
                    "Content-Type":"application/json",
                }
            })
            .then((res)=>{
                if(res.ok){
                    return res.json();
                }
            })
            .then((result)=>{
                const texte = result.data[0].attributes;
        
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
                    <h2>${texte.titre_accueil}</h2>
                </div>
                <!--TEXTE-->
                <div class="banniereCitation">
                    <p>${texte.texte_accueil}</p>
                </div>
                <!-------------------------------------BANNIERE CATEGORIES---------------------------------------->
            <div class="backGroundFleur">
                <div class="decouvrir">
                    <!--TITRE-->
                    <h2>A Découvrir</h2>
                </div>
                <div class="categories">
                    <!--CATEGORIE-->
                    <a href="#/pages/categories/${listeCategories[0].id}" >
                        <div>
                            <div class="divImg">
                                <img class="imgCategorie" src="../back-atelier/public${listeCategories[0].attributes.image_categories.data[0].attributes.formats.medium.url}" alt="">
                            </div
                            <label for="">${listeCategories[0].attributes.nom_categorie}</label>
                        </div>
                    </a>
                    <!---->
                    <!--CATEGORIE-->
                    <a href="#/pages/categories/${listeCategories[1].id}" >
                        <div>
                            <div class="divImg">
                                <img class="imgCategorie" src="../back-atelier/public${listeCategories[1].attributes.image_categories.data[0].attributes.formats.medium.url}" alt="">
                            </div>
                            <label for="">${listeCategories[1].attributes.nom_categorie}</label>
                        </div>
                    </a>
                    <!---->
                    <!--CATEGORIE-->
                    <a href="#/pages/categories/${listeCategories[2].id}" >
                        <div>
                            <div class="divImg">
                                <img class="imgCategorie" src="../back-atelier/public${listeCategories[2].attributes.image_categories.data[0].attributes.formats.medium.url}" alt="">
                            </div>
                            <label for="">${listeCategories[2].attributes.nom_categorie}</label>
                        </div>
                    </a>
                    <!---->
                    <!--CATEGORIE-->
                    <a href="#/pages/categories/${listeCategories[4].id}" >
                        <div>
                        <div class="divImg">
                                <img class="imgCategorie" src="../back-atelier/public${listeCategories[3].attributes.image_categories.data[0].attributes.formats.medium.url}" alt="">
                        </div>
                        <label for="">${listeCategories[4].attributes.nom_categorie}</label>
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
            fonctionCarrousel(listeCategories);
            conteneurName.style.position = "absolute";
            })
        })
        .catch(function(err){
            console.log(err);
        })
    }    
}

export default homePage;