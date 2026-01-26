export default function header() {
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



    <a href="about.index.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="login.html">Login</a>
    <a href="Newlook.html">New Look</a>
</nav>
</div>
</header>
    `;

}