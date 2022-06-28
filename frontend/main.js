import aboutPage from "./pages/about.js";
import categories from "./pages/categories.js";
import contactPage from "./pages/contact.js";
import homePage from "./pages/home.js";
import productPage from "./pages/productPage.js";
import produits from "./pages/produits.js";

import { parseRequestUrl } from "./utils.js";


const routes = {
    "/" : homePage,
    "/pages": homePage,
    "/pages/about": aboutPage,
    "/pages/categories": categories,
    "/pages/categories/id": produits,
    "/pages/produit/id": productPage,
    "/contact": contactPage
}

const router = () =>{  
    const request = parseRequestUrl();
    const parseUrl = (request.page? `/${request.page}` : '/') + (request.destination? `/${request.destination}` : "") + (request.id? `/id` : "");
    const screen = routes[parseUrl]? routes[parseUrl] : "";
    screen.generate();
}
window.addEventListener('load', () =>{
    router();
});

window.addEventListener('hashchange', () =>{

    router();
    document.documentElement.scrollTop = 0;
})