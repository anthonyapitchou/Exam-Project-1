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
    <a href="javascript:void(0)" class="nav-logo" onclick="window.navigateTo('/logo')">StudioHybrid</a>
</nav>

<div class="search-bar">
    <input type="text" id="searchInput" placeholder="Search products">
    </div>



<nav class="nav">
    <a href="javascript:void(0)" class="nav-about" onclick="window.navigateTo('/about')">About</a>
    <a href="javascript:void(0)" class="nav-contact active" onclick="window.navigateTo('/contact')">Contact</a>
    <a href="javascript:void(0)" class="nav-newlook"  onclick="window.navigateTo('/newlook')">New Look</a>
    <a href="javascript:void(0)" class="nav-login" onclick="window.navigateTo('/login')">Login</a>
</nav>

</div>
</header>
    `;

}

