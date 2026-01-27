import header from "../component/header.js";
import footer from "../component/footer.js";
import login from "../pages/login.js";
import contact from "../pages/contact.js";


document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();
document.getElementById("app").innerHTML = login();
document.getElementById("app").innerHTML = contact();

// Function to fetch and display posts

displayPosts();