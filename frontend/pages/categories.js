const categories = {
    generate: () => {
        let main = document.getElementById('main-conteneur');
        const conteneurName = document.getElementById('conteneurName');
        fetch("/api/produit/",{
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
        })
        .then((data) => {
            const listeCategories = data;
            main.innerHTML = `
            <div class="sectionProduits backGroundFleur">
                <div class="titreProduits">
                    <h3>Toutes les catégories :</h3>
                </div>
                <div id="cardsProduits" class="cardsProduits">
                    ${listeCategories.map( 
                        listeCategories =>`
                            <a href="#/pages/categories/${listeCategories.id_categorie}" class="card">
                                <div class="conteneurImgCard">
                                    <img class="imgCardProduit" src="${listeCategories.url_img}" alt="">
                                </div>
                                <label>${listeCategories.nom_categorie}</label>
                            </a>
                        `
                    ).join('\n')}
                </div>
            </div>
            `
            conteneurName.style.position = "relative";
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default categories;