import { parseRequestUrl } from "../utils.js";
const request = parseRequestUrl();

const produits = {
    generate: () => {
        let main = document.getElementById('main-conteneur');
        fetch(`/pages/categories/${request.id}`,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
        })
        .then((data)=>{
            const produits = data;
            main.innerHTML = `
            <div class="sectionProduits backGroundFleur">
                <div class="titreProduits">
                    <h3>${produits[0].nom_categorie} :</h3>
                </div>
                <div id="cardsProduits" class="cardsProduits">
                ${produits.map( 
                    produits =>`
                            <a href="#/pages/produit/${produits.id_produit}" class="cardProduit">
                                <div class="conteneurImgProduit">
                                    <img class="imgProduit" src="${produits.url_image}" alt="">
                                </div>
                                <label>${produits.nom_produit}</label>
                                <label>${produits.prix_produit}€</label>
                            </a>
                            `
                            ).join('\n')}
                </div>
            </div>
            `
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
export default produits;