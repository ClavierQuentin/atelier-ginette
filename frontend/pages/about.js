import { carrouselAbout } from "../scripts/carrouselAbout.js";

const aboutPage = {
    generate : () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        fetch("/pages/about/", {
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then(function(res){
            if(res.ok){
                return res.json()
            }
        })
        .then(function(data){
            const listeImages = data;
            main.innerHTML = `
            <!-----------------BANNIERE QUI JE SUIS--------------------->
            <div class="banniere quiJeSuis backGroundFleur">
                <div class="divTexte">
                    <!--TITRE-->
                    <h2>Qui je suis</h2>
                    <!--TEXTE-->
                    <p>
                        L’Atelier Ginette est né au printemps (comme moi) de l’année 2021. Après avoir été initiée par ma maman à la couture, sur la vieille Singer de ma grand-mère, j’ai découvert une vraie passion et depuis j’ai le pied sur la pédale tous les jours. Il m’est apparu comme une évidence que mon atelier porte le prénom de ma grand-mère, en hommage à sa transmission. 
                    </p>
                    <p> 
                        En quête de sens, j’ai voulu développer une activité professionnelle qui m’offre un espace de créativité et de connexion à moi-même, un métier passion qui me donne la possibilité de travailler à mon rythme et de produire de manière raisonnée des articles uniques.
                    </p>
                </div>
                <!--IMAGE-->
                <div class="portrait">
                    <img src="${listeImages[0].url_image}" alt="">
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
                    <h2>Le lieu</h2>
                    <p>
                        A la recherche d’authenticité, d’une vie plus calme, au rythme lent des saisons, d’un vrai retour à la simplicité, j’ai vécu sur les routes et mon aventure m’a mené dans une vieille maison au cœur du Bocage Normand, plantée dans un espace préservé et sauvage. 
                    </p>
                    <p>
                        C’est là que l’Atelier Ginette prend place, au creux d’une nature splendide et authentique. 
                    </p>
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
                            <img class="paysage" src="${listeImages[1].url_image}" alt="">
                        </div>
                    </div>
                </div>
                <div class="banniere wrapReverse" style="padding-bottom: 80px;">
                    <!--IMAGE-->
                    <div class="portrait">
                        <img src="${listeImages[7].url_image}" alt="">
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
            carrouselAbout(data);
            conteneurName.style.position = "relative";
        })
        .catch(function(err){
            console.log(err);
        })
    }
}

export default aboutPage;