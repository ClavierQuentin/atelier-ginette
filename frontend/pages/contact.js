const contactPage = {
    generate: () =>{
        let main = document.getElementById('main-conteneur');
        main.innerHTML = `
        <div class="conteneurContact backGroundFleur">
            <h2>Contactez-moi !</h2>
            <form method="post" action="/send">
                <div>
                    <input type="text" name="prenom" placeholder="Votre prénom">
                    <input type="text" name="nom" placeholder="Votre nom">
                </div>
                <div>
                    <input type="text" name="sujet" placeholder="Sujet du mail">
                    <input type="email" name="email" placeholder="Votre email">
                </div>
                <div class="submit-div">
                    <textarea placeholder = "Indiquez-moi votre message" name = "body"></textarea>
                    <input type="submit" value="Envoyer">
                </div>
            </form>
        </div>
        `
    }
}
export default contactPage;