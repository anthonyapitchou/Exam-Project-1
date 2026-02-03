import header from "../component/header.js";
import footer from "../component/footer.js";
import login, { initLoginForm } from "../pages/login.js";

document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

const app = document.getElementById("app");
app.innerHTML = login();

initLoginForm();


// Function to fetch and display posts