
const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return{
        page: request[1],
        destination: request[2],
        id: request[3]
    } ;
}
let requestUrl = parseRequestUrl();
let pageAccueil = false
if(!requestUrl.page){
    pageAccueil = true
}
else{
    pageAccueil = false
}
//On récupère la div cliquable
let divMenu = document.getElementById('divMenu');

//On récupère les éléments nav et main de l'html
let nav = document.querySelector('nav');
let main = document.getElementById('main-conteneur');

//On récupère le titre principale
let nom = document.getElementById('name');

//On récupère conteneur-name
let conteneurName = document.getElementById('conteneurName');


//On déclare un booléen faux pour valider une condition
let isOuvert = false;
const gestionMenu = () => {
    let requestUrl = parseRequestUrl();
    let pageAccueil = false
    if(requestUrl.page == undefined){
        pageAccueil = true
    }
    else{
        pageAccueil = false
    }   
    console.log(requestUrl.page);
    //Si le booléen est faux
    if(!isOuvert){
        //On rajoute la class css pour effectuer les mouvements
        divMenu.classList.add('ouverture');
        
        //On initialise setTimeOut pour une apparition dans 0.3s
        setTimeout(function(){
            //On fait apparaître nav et passe en flex
            nav.style.display = 'block';
            nav.style.display = 'flex';
            //On fait disparaitre le reste de la page
            main.style.display = 'none';
            //On rajoute une classe pour corriger le décalage du titre
            nom.classList.add('marginRight10');
            //On change la position du titre du site lors de l'apparation des liens de navigation
            //conteneurName.style.position = "absolute";
        },300)
        //On passe le booléen à vrai
        isOuvert = true;
    }
    else{//Si le booléen est vrai
        //On retire la classe
        divMenu.classList.remove('ouverture');
        //On retire nav et on remets le reste de la page
        setTimeout(function(){
            nav.style.display = 'none';
            main.style.display = 'block';
            //On replace le titre
            nom.classList.remove('marginRight10');
          //  conteneurName.style.position = "relative";
           /* if(requestUrl.page){
                conteneurName.style.position = "relative";
            }*/

        },300)
        isOuvert = false;
    }
}
//Au click du menu
divMenu.addEventListener('click', gestionMenu);

let links = document.getElementsByClassName('links');

Array.from(links).forEach(link =>{
    link.addEventListener('click', gestionMenu)
})

let blocPanier = document.getElementById('blocPanier')
let panier = document.getElementById('panier')
let panierClique = false
blocPanier.addEventListener('click', () => {
    //document.location.hash = '/pages/panier'
    if(!panierClique){
        panier.classList.add('affichagePanier')
        panierClique = true;
    
    }
    else{
        panier.classList.remove('affichagePanier')
        panierClique = false
    }
})

let divPanier = document.getElementById('emptyBasket');
let panierItems =JSON.parse(localStorage.getItem('panierItems'));
function genererPanier(){
    if(panierItems.length > 0){
        for(let y= 0; y< panierItems.length; y++){
            let divProduit = document.createElement('div');
            divProduit.classList.add('divProduit')
            divPanier.appendChild(divProduit)

            let img = document.createElement('img');
            img.src = panierItems[y].image;
            img.classList.add('imgProduitPanierDefilant')
            divProduit.appendChild(img)

            let divDescription = document.createElement('div');
            divDescription.classList.add('divDescription')
            divProduit.appendChild(divDescription)

            let para = document.createElement('p');
            para.textContent = panierItems[y].nom;
            divDescription.appendChild(para)
            
            let prix = document.createElement('p')
            prix.textContent = panierItems[y].prix + "€" ;
            divDescription.appendChild(prix)
            
            let quantite = document.createElement('p')
            quantite.textContent = "Qté :" + panierItems[y].qte
            divDescription.appendChild(quantite)
        }
        /*let button = document.createElement("button");
        button.textContent = "Acceder au panier"
        button.onclick = "document.location.hash = '/pages/panier'"
        divPanier.appendChild(button)*/
    }
    else{
        divPanier.innerHTML = "Votre panier est vide"
    }
}
genererPanier();