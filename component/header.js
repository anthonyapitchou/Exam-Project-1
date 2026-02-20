// component/header.js
export default function header() {
    const isLoggedIn = !!localStorage.getItem("accessToken");

    return `
<header class="header">
    <div class="header-container">
        <!-- Burger menu mobile -->
        <div class="burger" id="burger">
            <span></span><span></span><span></span>
        </div>

        <!-- Logo -->
        <nav class="logo">
            <a href="#/home" class="nav-logo">StudioHybrid</a>
        </nav>

        <!-- Barre de recherche -->
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="Search blog posts...">
        </div>

        <!-- Navigation principale -->
        <nav class="nav">
            <a href="#/home" data-route="/home">Home</a>
            <a href="#/about" data-route="/about">About</a>
            <a href="#/contact" data-route="/contact">Contact</a>
            
            <!-- Nike remplacé par New Look (et Edit plus bas) -->
            <a href="#/newlook" data-route="/newlook">New Look</a>

            <!-- Gestion dynamique de l'utilisateur -->
            ${!isLoggedIn ? `
                <a href="#/login" data-route="/login">Login</a>
                <a href="#/register" data-route="/register">Register</a>
            ` : `
                <!-- EDIT est ici maintenant, visible uniquement pour l'Owner -->
                <a href="#/edit" data-route="/edit">Edit Post</a>
                <button id="logout-btn" class="btn-logout">Log off</button>

            `}
        </nav>
    </div>
</header>
    `;
}

