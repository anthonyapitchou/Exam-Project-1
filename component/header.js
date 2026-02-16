export default function header() {

    return /*HTML*/ `
<header class="header">
<div class="header-container">


<div class="burger" id="burger">
  <span></span>
  <span></span>
  <span></span>
</div>

<nav class="logo">
    <a href="javascript:void(0)" class="nav-logo" onclick="window.navigateTo('/home')">StudioHybrid</a>
</nav>

<div class="search-bar">
    <input type="text" id="searchInput" placeholder="Search products">
    </div>



<nav class="nav">
  <a href="javascript:void(0)" data-route="/about" onclick="window.navigateTo('/about')">About</a>
  <a href="javascript:void(0)" data-route="/contact" onclick="window.navigateTo('/contact')">Contact</a>
  <a href="javascript:void(0)" data-route="/newlook" onclick="window.navigateTo('/newlook')">New Look</a>
  <a href="javascript:void(0)" data-route="/login" onclick="window.navigateTo('/login')">Login</a>
</nav>







</div>
</header>
    `;

}

export function setActiveNav() {
    const links = document.querySelectorAll('.nav a');
    const currentPath = window.location.pathname;

    links.forEach(link => {
        const route = link.dataset.route;

        if (route === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

