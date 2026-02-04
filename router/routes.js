import header from "../component/header.js";
import footer from "../component/footer.js";
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
    { path: "/", view: home },
    { path: "/about", view: about },
    { path: "/login", view: login },
    { path: "/contact", view: contact },
    { path: "/ferragamo", view: ferragamo },
    { path: "/home", view: home },
    { path: "/lubutelvintage", view: lubutelvintage },
    { path: "/martens", view: martens },
    { path: "/newlook", view: newlook },
    { path: "/nike", view: nike },
    { path: "/header", view: header },
    { path: "/footer", view: footer },

];

export default routes;