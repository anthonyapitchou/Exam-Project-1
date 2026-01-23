import header from "../component/header.js";
import footer from "../component/footer.js";
import homePage, { displayPosts } from "../page/homePage.js";



document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

selectPageNumber();
displayPosts();