<<<<<<< HEAD

import about from "../pages/about.js";
import contact from "../pages/contact.js";
import ferragamo from "../pages/ferragamo.js";
=======
// routes.js - CORRECTION DES MAJUSCULES (Vérifie bien tes fichiers !)

import about from "../pages/about.js";
import contact from "../pages/contact.js";
import ferragamo from "../pages/ferragamo.js"; 
>>>>>>> a8e9173c3c7cbefa59ec3a43f966054af4d29fc5
import home from "../pages/home.js";
import login from "../pages/login.js";
import lubutelvintage from "../pages/lubutelvintage.js"; 
import martens from "../pages/martens.js";
import newlook from "../pages/newlook.js";
import nike from "../pages/nike.js";
import register from "../pages/register.js";
import post from "../pages/post.js";
import edit from "../pages/edit.js";

const routes = [
    { path: "/", component: home },
    { path: "/home", component: home },
    { path: "/login", component: login },
    { path: "/register", component: register },
    { path: "/about", component: about },
    { path: "/contact", component: contact },
    { path: "/edit", component: edit },
    { path: "/post", component: post },
    { path: "/ferragamo", component: ferragamo },
    { path: "/lubutelvintage", component: lubutelvintage },
    { path: "/martens", component: martens },
    { path: "/newlook", component: newlook },
    { path: "/nike", component: nike },

];

export default routes;


