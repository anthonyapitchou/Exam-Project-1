// routes.js - Route definitions for Fashion Blog

import about from "../pages/about.js";
import contact from "../pages/contact.js";
import ferragamo from "../pages/ferragamo.js";
import home from "../pages/home.js";
import login from "../pages/login.js";
import lubutelvintage from "../pages/lubutelvintage.js";
import martens from "../pages/martens.js";
import newlook from "../pages/newlook.js";
import nike from "../pages/nike.js";

const routes = [
    { path: "/", component: home },
    { path: "/login", component: login },
    { path: "/home", component: home },
    { path: "/about", component: about },
    { path: "/contact", component: contact },
    { path: "/ferragamo", component: ferragamo },
    { path: "/lubutelvintage", component: lubutelvintage },
    { path: "/martens", component: martens },
    { path: "/newlook", component: newlook },
    { path: "/nike", component: nike },
];

export default routes;