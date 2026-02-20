// router.js
import routes from './routes.js';

let router = null;
let previousPage = null;

class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentPage = null;
    }

    init() {
        if (!window.location.hash) window.location.hash = '/home';
        this.loadPage(this.getPath());
        window.addEventListener('hashchange', () => this.loadPage(this.getPath()));

        // --- GESTION GLOBALE DES CLICS (DÉLÉGATION) ---
        document.addEventListener('click', (e) => {

            // 1. LOG OFF (Déconnexion)
            if (e.target.id === 'logout-btn') {
                localStorage.removeItem("accessToken");
                alert("Logged off!");
                window.location.hash = "#/home";
                window.location.reload();
            }

            // 2. BOUTONS OPEN (Nike, Martens, etc.)
            if (e.target.classList.contains('btn-open')) {
                const page = e.target.dataset.page;
                if (page) this.navigate(`/${page}`);
            }

            // 3. BOUTONS BACK-ARROW (Correction pour toutes tes classes spécifiques)
            // Ce sélecteur détecte n'importe quelle classe qui contient "back-arrow"
            const backBtn = e.target.closest('[class*="back-arrow"]');
            if (backBtn) {
                goBack();
            }
        });
    }

    getPath() { return location.hash.replace('#', '') || '/home'; }

    navigate(path) {
        previousPage = this.currentPage;
        location.hash = path;
    }

    loadPage(path) {
        // Sécurité Edit
        if (path === '/edit' && !localStorage.getItem("accessToken")) {
            alert("Please login first.");
            this.navigate('/login');
            return;
        }

        const route = this.routes.find(r => r.path === path) || this.routes.find(r => r.path === '/home');
        if (route) {
            const app = document.querySelector('#app');
            app.innerHTML = route.component();
            this.currentPage = path;
            this.attachEventListeners(path);
            setActiveNav();
        }
    }

    attachEventListeners(path) {
        // LOGIN & REGISTER (Redirection Home)
        if (path === '/login' || path === '/register') {
            const formId = path === '/login' ? '#login-form' : '#register-form';
            document.querySelector(formId)?.addEventListener('submit', (e) => {
                e.preventDefault();
                localStorage.setItem("accessToken", "demo-token");
                alert(path === '/login' ? "Welcome back!" : "Account created & logged in!");
                window.location.hash = "#/home";
                window.location.reload();
            });
        }

        // HOME : Affichage du post créé avec photo
        if (path === '/home') {
            const savedPost = localStorage.getItem("editedPost");
            if (savedPost) {
                const post = JSON.parse(savedPost);
                const homeContainer = document.querySelector(".home-section");
                if (homeContainer) {
                    const postDiv = document.createElement("div");
                    postDiv.className = "custom-post";
                    postDiv.innerHTML = `
                        <div style="border:1px solid #ddd; padding:20px; border-radius:10px; margin-top:20px;">
                            <h2>${post.title}</h2>
                            <p>${post.body}</p>
                            ${post.image ? `<img src="${post.image}" style="max-width:100%; margin-top:10px; border-radius:5px;">` : ""}
                        </div>`;
                    homeContainer.appendChild(postDiv);
                }
            }
        }

        // EDIT (Save & Delete)
        if (path === '/edit') {
            const form = document.getElementById('edit-post-form');
            const savedPost = localStorage.getItem("editedPost");

            if (savedPost && form) {
                const post = JSON.parse(savedPost);
                if (document.getElementById('edit-title')) document.getElementById('edit-title').value = post.title || '';
                if (document.getElementById('edit-body')) document.getElementById('edit-body').value = post.body || '';
            }

            form?.addEventListener('submit', (e) => {
                e.preventDefault();
                const title = document.getElementById('edit-title').value;
                const body = document.getElementById('edit-body').value;
                const imageInput = document.getElementById('edit-image');

                if (imageInput && imageInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        localStorage.setItem("editedPost", JSON.stringify({ title, body, image: ev.target.result }));
                        alert("Post saved with photo!");
                        this.navigate('/home');
                    };
                    reader.readAsDataURL(imageInput.files[0]);
                } else {
                    const oldImg = savedPost ? JSON.parse(savedPost).image : '';
                    localStorage.setItem("editedPost", JSON.stringify({ title, body, image: oldImg }));
                    alert("Post updated!");
                    this.navigate('/home');
                }
            });

            document.getElementById("delete-post")?.addEventListener("click", () => {
                if (confirm("Delete post?")) {
                    localStorage.removeItem("editedPost");
                    this.navigate('/home');
                }
            });
        }
    }
}

// EXPORTS
export function initRouter() { router = new Router(routes); router.init(); }
export function navigateTo(path) { if (router) router.navigate(path); }

export function goBack() {
    if (previousPage) {
        window.location.hash = `#${previousPage}`;
    } else {
        window.location.hash = "#/home";
    }
}

export function setActiveNav() {
    const links = document.querySelectorAll('.nav a');
    const currentPath = location.hash.replace('#', '') || '/home';
    links.forEach(link => {
        link.classList.toggle('active', link.dataset.route === currentPath);
    });
}

// --- TOUT EN BAS DE ROUTER.JS ---

// Fonction de partage globale pour tes pages de marques
window.sharePost = async () => {
    try {
        // Tente d'ouvrir le menu de partage natif (Mobile/Mac)
        if (navigator.share) {
            await navigator.share({
                title: 'StudioHybrid Blog',
                url: window.location.href
            });
        } else {
            // Solution de secours : Copie le lien pour Desktop/Windows
            await navigator.clipboard.writeText(window.location.href);
            alert("Lien de l'article copié dans le presse-papier !");
        }
    } catch (err) {
        console.log("Erreur de partage:", err);
    }
};

// On s'assure aussi que goBack est bien global pour tes flèches de retour
window.goBack = goBack;


// Rendre accessible au onclick du HTML
window.goBack = goBack;

