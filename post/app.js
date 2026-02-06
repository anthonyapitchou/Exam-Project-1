import { initRouter, navigateTo } from "../../router/router.js";
import header from "../component/header.js";
import footer from "../component/footer.js";
import home from "../pages/home.js";

// Make navigateTo available globally
window.navigateTo = navigateTo;

document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

const app = document.getElementById("app");
app.innerHTML = home();

initRouter();

