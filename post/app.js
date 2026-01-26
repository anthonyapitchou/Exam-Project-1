import header from "../component/header.js";
import footer from "../component/footer.js";
import login from "../pages/login.js";


document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();
document.getElementById("app").innerHTML = login();

displayPosts();