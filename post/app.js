import { initRouter } from "../router/router.js";
import header from "../component/header.js";
import footer from "../component/footer.js";

document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();


initRouter();

window.addEventListener('hashchange', () => {
    const isEditPage = window.location.hash === '#/edit';
    const token = localStorage.getItem("accessToken");

    if (isEditPage && !token) {
        window.location.hash = '#/login';
        alert("You must be logged in to manage posts.");
    }
});
