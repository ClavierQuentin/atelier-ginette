import { parseRequestUrl } from "../utils.js";

const request = parseRequestUrl();

const productPage = {
    generate: () =>{
        let main = document.getElementById('main-conteneur');
        console.log(request.id);
        fetch('/pages/produit/'+ request.id,{
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
        })
        .then((data)=>{
            const produit = data;
            main.innerHTML = `
            <div class="backGroundFleur">
                <div class="sectionPhoto">
                    <img src="${produit[0].url_image}" alt="" class="imgProduitUnique">
                    <div class="description1">
                        <h2>${produit[0].nom_produit}</h2>
                        <div class="prix">
                            <p>
                                ${produit[0].prix_produit}€ l'unité
                            </p>
                        </div>
                        <div class="descriptionCourte">
                                ${produit[0].description_courte} 
                        </div>
                    <!-- <div><button id="boutonAjouter">Ajouter au panier</button></div>-->
                    </div>
                </div>
                <hr>
                <div class="compo">
                    ${produit[0].description_longue}
                </div>
                <!--<hr>
                <div>
                    <h3 class="titreProduitEquivalent">Vous pourriez aussi aimer :</h3>
                </div>-->
            </div>
            `
        })
        .catch((err)=>{
            console.log(err);
        }) 
    }
}
export default productPage;