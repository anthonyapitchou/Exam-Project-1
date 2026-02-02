import header from "../component/header.js";
import footer from "../component/footer.js";
import login from "../pages/login.js";
import contact from "../pages/contact.js";
import nike from "../pages/nike.js";
import martens from "../pages/martens.js";
import ferragamo from "../pages/ferragamo.js";
import lubutelVintage from "../pages/lubutelvintage.js";
import newlook from "../pages/newlook.js";
import about from "../pages/about.js";
import home from "../pages/home.js";

document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();
document.getElementById("app").innerHTML = login();
document.getElementById("app").innerHTML = contact();
document.getElementById("app").innerHTML = nike();
document.getElementById("app").innerHTML = martens();
document.getElementById("app").innerHTML = ferragamo();
document.getElementById("app").innerHTML = lubutelVintage();
document.getElementById("app").innerHTML = newlook();
document.getElementById("app").innerHTML = about();
document.getElementById("app").innerHTML = home();

// Function to fetch and display posts

displayPosts();