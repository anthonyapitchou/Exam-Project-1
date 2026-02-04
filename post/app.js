import { initRouter } from "./router/router.js";
import header from "../component/header.js";
import footer from "../component/footer.js";
import login from "../pages/login.js";

document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

const app = document.getElementById("app");
app.innerHTML = login();

initRouter();


// Function to fetch and display posts