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
    <a href="javascript:void(0)" class="nav-about ${currentPath === '/about' ? 'active' : ''}" onclick="window.navigateTo('/about')">About</a>
    <a href="javascript:void(0)" class="nav-contact ${currentPath === '/contact' ? 'active' : ''}" onclick="window.navigateTo('/contact')">Contact</a>
    <a href="javascript:void(0)" class="nav-newlook ${currentPath === '/newlook' ? 'active' : ''}" onclick="window.navigateTo('/newlook')">New Look</a>
    <a href="javascript:void(0)" class="nav-login ${currentPath === '/login' ? 'active' : ''}" onclick="window.navigateTo('/login')">Login</a>
</nav>


</div>
</header>
    `;

}

