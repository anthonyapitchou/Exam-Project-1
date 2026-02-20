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
        if (!window.location.hash) {
            window.location.hash = '/home';
        }

        this.loadPage(this.getPath());

        window.addEventListener('hashchange', () => {
            this.loadPage(this.getPath());
        });
    }

    getPath() {
        return location.hash.replace('#', '') || '/home';
    }

    navigate(path) {
        previousPage = this.currentPage;
        location.hash = path;
    }

    loadPage(path) {
        const route =
            this.routes.find(r => r.path === path) ||
            this.routes.find(r => r.path === '/');

        if (!route) return;

        const app = document.querySelector('#app');
        if (!app) return;

        app.innerHTML = route.component();
        this.currentPage = path;

        this.attachEventListeners(path);
        setActiveNav();
    }

    attachEventListeners(path) {

        // LOGIN
        if (path === '/' || path === '/login') {
            const loginForm = document.querySelector('#login-form');
            if (loginForm) {
                loginForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.navigate('/home');
                });
            }
        }

        // CONTACT
        if (path === '/contact') {
            const contactForm = document.querySelector('#contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    if (typeof Swal === 'undefined') return;
                    Swal.fire({
                        title: 'Thank you!',
                        text: 'Your message has been received.',
                        icon: 'success'
                    }).then(() => {
                        goBack();
                    });
                });
            }
        }

        // HOME
        // HOME
        if (path === '/home') {
            document.querySelectorAll('.btn-open').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.navigate(`/${btn.dataset.page}`);
                });
            });

            // NEWSLETTER
            const newsletterForm = document.getElementById('newsletter');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const email = document.getElementById('email-input').value;
                    if (email) {
                        newsletterForm.reset();
                    }
                });
            }

            // POST
            const savedPost = localStorage.getItem("editedPost");

            if (savedPost) {
                const post = JSON.parse(savedPost);
                const homeContainer = document.querySelector(".home-section");

                if (!homeContainer) return;

                const newPost = document.createElement("div");
                newPost.classList.add("custom-post");

                newPost.innerHTML = `
            <div class="custom-post-inner">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                ${post.image ? `<img src="${post.image}" alt="Post image">` : ""}
                <div class="custom-post-buttons">
                    <button id="edit-post-btn">Edit</button>
                    <button id="delete-post-btn">Delete</button>
                </div>
            </div>
        `;

                homeContainer.appendChild(newPost);

                document.getElementById("delete-post-btn")
                    .addEventListener("click", () => {
                        localStorage.removeItem("editedPost");
                        newPost.remove();
                    });

                document.getElementById("edit-post-btn")
                    .addEventListener("click", () => {
                        this.navigate('/edit');
                    });
            }
        }

        // EDIT PAGE
        if (path === '/edit') {

            const form = document.getElementById('edit-post-form');
            const savedPost = localStorage.getItem("editedPost");

            if (savedPost) {
                const post = JSON.parse(savedPost);
                document.getElementById('edit-title').value = post.title || '';
                document.getElementById('edit-body').value = post.body || '';
            }

            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const title = document.getElementById('edit-title').value;
                    const body = document.getElementById('edit-body').value;
                    const imageInput = document.getElementById('edit-image');
                    const file = imageInput.files[0];

                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const postData = { title, body, image: event.target.result };
                            localStorage.setItem("editedPost", JSON.stringify(postData));
                            this.navigate('/home');
                        };
                        reader.readAsDataURL(file);
                    } else {
                        const savedPost = localStorage.getItem("editedPost");
                        const oldImage = savedPost ? JSON.parse(savedPost).image : '';
                        localStorage.setItem("editedPost", JSON.stringify({ title, body, image: oldImage }));
                        this.navigate('/home');
                    }
                });
            }

            const deleteBtn = document.getElementById("delete-post");
            if (deleteBtn) {
                deleteBtn.addEventListener("click", () => {
                    localStorage.removeItem("editedPost");
                    this.navigate('/home');
                });
            }
        }
    }
}

// EXPORTS
export function initRouter() {
    router = new Router(routes);
    router.init();
}

export function navigateTo(path) {
    if (router) router.navigate(path);
}

export function goBack() {
    if (previousPage) {
        router.navigate(previousPage);
    } else {
        router.navigate('/home');
    }
}

export function setActiveNav() {
    const links = document.querySelectorAll('.nav a');
    const currentPath = location.hash.replace('#', '') || '/home';

    links.forEach(link => {
        const route = link.dataset.route;
        if (route === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}