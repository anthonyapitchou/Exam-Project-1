export default function header() {
    const currentPath = window.location.pathname;

    return /*HTML*/ `
<header class="header">
<div class="header-container">


<div class="burger" id="burger">
  <span></span>
  <span></span>
  <span></span>
</div>

<div class="logo">
<h1>StudioHybrid</h1>
</div>

<div class="search-bar">
    <input type="text" id="searchInput" placeholder="Search products">
    </div>

<nav class="nav">
    <a href="#" onclick="window.navigateTo('/about')">About</a>
    <a href="#"  class="nav-contact" onclick="window.navigateTo('/contact')" class="${currentPath === '/contact' ? 'active' : ''}">Contact</a>
    <a href="#" onclick="window.navigateTo('/login')">Login</a>
    <a href="#" onclick="window.navigateTo('/newlook')">New Look</a>
</nav>
</nav>
</div>
</header>
    `;

}

