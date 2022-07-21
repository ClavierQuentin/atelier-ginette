export const fonctionCarrousel = (data) => {

        const listeCategories = data;
        let listeCarrou = [];
        for(let i = 0; i < listeCategories.length; i++){
            for(let y = 0; y < listeCategories[i].attributes.articles.data.length; y++){
                if(listeCategories[i].attributes.articles.data[y].attributes.Nouveaute == true){
                    listeCarrou.push({
                        url: listeCategories[i].attributes.articles.data[y].attributes.image.data[0].attributes.formats.large.url,
                        id: listeCategories[i].attributes.articles.data[y].id,
                    });
                }
            }
        }
        //On récupère l'élément carrousel dans html
        let carrousel = document.getElementById('carrousel');
        //On déclare une variable à 1
        let idBtn = 1;
        //On récupère la largeur de l'écran de l'utilisateur
        let largeurEcran = screen.width;
        function generate(){
            for(let i = 0; i < listeCarrou.length; i++){
        
                //On crée un élément img
                let photo = document.createElement('img');
                //On y modifie l'id et src selon le array
                photo.src = "../back-atelier/public"+listeCarrou[i].url;
                photo.id = listeCarrou[i].id;
                //On donne à l'image la largeur de l'écran
                photo.style.minWidth = largeurEcran+"px";
                photo.classList.add('tailleImg')
                //On rajoute l'image au carrousel
                carrousel.appendChild(photo);
            }
        }
        //Création d'une fonction de génération du carrousel selon la taille du array
        generate();
        //On appelle un compteur pour suivre la position des images
        let compteur = 1;
        //On créer la fonction slide du carrousel
        function slide(){
            //Si est arrivé à la dernière image
            if(compteur == listeCarrou.length){
                //On remet le compteur à 0
                compteur = 0;
            }
            //On translate le carrousel selon la largeur de l'écran et multiplié par le compteur (position de l'image)
            carrousel.style.transform = 'translateX(-' +largeurEcran*compteur+'px)';
            //On incrémente compteur
            compteur++;
            //On assigne le compteur à la variable idBtn
            idBtn = compteur;
            //On retourne la variable
            return idBtn
        }
        //setInterval nous permet de lancer slide toutes les 6s
        setInterval(slide,6000);

}
