import { initRouter, navigateTo } from "../../router/router.js";
import header from "../component/header.js";
import footer from "../component/footer.js";
import Contact from "../pages/contact.js";

// Make navigateTo available globally
window.navigateTo = navigateTo;

document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();
document.getElementById("app").innerHTML = Contact();


document.querySelector(".header").classList.add("is-contact");

const app = document.getElementById("app");
app.innerHTML = contact();

initRouter();