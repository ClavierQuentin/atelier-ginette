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
                                     Les cr??ations sont toutes fabriqu??es ?? la main avec beaucoup d???amour et de bienveillance. 
                                 </p>
                                 <p>
                                     Chaque accessoire est le fruit de plusieurs heures de travail consciencieux et attentionn??, c???est ce qui rend chaque pi??ce unique et importante.
                                 </p>
                                 <p>
                                     A l???Atelier Ginette, je cherche l???authenticit??, la raret?? : les s??ries sont en quantit?? limit??e. Les ??tiquettes sont tamponn??es ?? la main et m??me les petites fleurs s??ch??es que vous trouvez dans vos colis ont pouss?? dans mon jardin. 
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
                             <h2>Une d??marche ??co-responsable</h2>
                             <!--TEXTE-->
                             <p>
                                 Pour cr??er les pi??ces de l???Atelier je m???inspire de la nature et de sa po??sie. Je choisi des motifs fleuris et color??s qui apportent du pep???s et de la beaut?? aux accessoires de notre quotidien. J???appr??cie les tissus aux tonalit??s anciennes, vintages.
                             </p>
                             <p>
                                 C???est aussi parce que je suis tr??s attach??e ?? mon environnement et ?? la pr??servation de sa beaut?? que je me suis engag??e ?? diriger l???Atelier vers une d??marche plus responsable. 
                             </p>
                             <p>
                                 J???utilise d??sormais principalement des mati??res naturelles et des tissus certifi??s bio, lab??lis??s OEKO-TEX??, GOTS ou upcycl??s. J?????vite le suremballage des commandes et je favorise, autant que possible, les mati??res compostables (ficelle de jute, papier kraft) et la r??cup??ration d???emballage d??j?? utilis??s. J???essaie de valoriser au maximum toutes mes chutes de tissu en proposant des petits produits qui permettent de les r??utiliser, (tels que les guirlandes de croissants ou les sachets de lavande.) 
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