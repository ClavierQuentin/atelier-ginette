import { carrouselAbout } from "../scripts/carrouselAbout.js";
let texte2 = "";
const aboutPage = {
    generate : () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const Init = {
            method: "GET",
            headers: headers,
            mode: "cors",
            cache: "default"
        }
        const myRequest = new Request("http://localhost:1337/api/about-texte-and-img-1s?populate=*", Init);
        const myRequest2 = new Request("http://localhost:1337/api/about-texte-and-img-2s?populate=*", Init);

        fetch(myRequest,Init)
        .then(function(res){
            if(res.ok){
                return res.json()
            }
        })
        .then(function(data){
            const texte1 =  data
            
            fetch(myRequest2,Init)
            .then((res) => {
                if(res.ok){
                    return res.json();
                }
            })
            .then((data) => {
                 const texte2 = data;
                 main.innerHTML = `
                 <!-----------------BANNIERE QUI JE SUIS--------------------->
                 <div class="banniere quiJeSuis backGroundFleur">
                     <div class="divTexte">
                         <!--TITRE-->
                         <h2>${texte1.data[0].attributes.Titre}</h2>
                         <!--TEXTE-->
                         ${texte1.data[0].attributes.Texte}
                     </div>
                     <!--IMAGE-->
                     <div class="portrait">
                         <img src="../back-atelier/public${texte1.data[0].attributes.image.data.attributes.formats.small.url}" alt="">
                     </div>
                 </div>
                 <!---------------------------------BANNIERE LIEU-------------------------------->
                 <div class="lieu banniere">
                     <!--CARROUSEL-->
                     <div class="conteneurCarrousel" id="conteneurCarrousel">
                         <div id="carrouselPrez" class="carrousel">
                         </div>
                     </div>
                     <!--TEXTE-->
                     <div class="divTexte">
                         <h2>${texte2.data[0].attributes.Titre}</h2>
                         ${texte2.data[0].attributes.Texte}
                     </div>
                 </div>
                 <!------------------------------------BANNIERE VALEURS----------------------------------->
                 <div class="backGroundFleur">
                     <div>
                         <!--TITRE-->
                         <h2 class="titreValeurs" >Nos valeurs</h2>
                         <div class="banniere " style="padding-top: 20px; padding-bottom: 10%">
                             <div class="divTexte">
                                 <!--TITRE-->
                                 <h2>Local et fait main</h2>
                                 <!--TEXTE-->
                                 <p>
                                     Les créations sont toutes fabriquées à la main avec beaucoup d’amour et de bienveillance. 
                                 </p>
                                 <p>
                                     Chaque accessoire est le fruit de plusieurs heures de travail consciencieux et attentionné, c’est ce qui rend chaque pièce unique et importante.
                                 </p>
                                 <p>
                                     A l’Atelier Ginette, je cherche l’authenticité, la rareté : les séries sont en quantité limitée. Les étiquettes sont tamponnées à la main et même les petites fleurs séchées que vous trouvez dans vos colis ont poussé dans mon jardin. 
                                 </p>
                             </div>
                             <!--IMAGE-->
                             <div>
                                <!-- <img class="paysage" src="" alt="">-->
                             </div>
                         </div>
                     </div>
                     <div class="banniere wrapReverse" style="padding-bottom: 80px;">
                         <!--IMAGE-->
                         <div class="portrait">
                           <!--  <img src="" alt="">-->
                         </div>
                         <div class="divTexte">
                             <!--TITRE-->
                             <h2>Une démarche éco-responsable</h2>
                             <!--TEXTE-->
                             <p>
                                 Pour créer les pièces de l’Atelier je m’inspire de la nature et de sa poésie. Je choisi des motifs fleuris et colorés qui apportent du pep’s et de la beauté aux accessoires de notre quotidien. J’apprécie les tissus aux tonalités anciennes, vintages.
                             </p>
                             <p>
                                 C’est aussi parce que je suis très attachée à mon environnement et à la préservation de sa beauté que je me suis engagée à diriger l’Atelier vers une démarche plus responsable. 
                             </p>
                             <p>
                                 J’utilise désormais principalement des matières naturelles et des tissus certifiés bio, labélisés OEKO-TEX®, GOTS ou upcyclés. J’évite le suremballage des commandes et je favorise, autant que possible, les matières compostables (ficelle de jute, papier kraft) et la récupération d’emballage déjà utilisés. J’essaie de valoriser au maximum toutes mes chutes de tissu en proposant des petits produits qui permettent de les réutiliser, (tels que les guirlandes de croissants ou les sachets de lavande.) 
                             </p>
                         </div>
                     </div>
                 </div>
         
                 `
                 carrouselAbout(texte2);
                 conteneurName.style.position = "relative"
     
            })
        })
        .catch(function(err){
            console.log(err);
        })
    }
}

export default aboutPage;