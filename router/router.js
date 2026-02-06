// router.js - SPA Router with hash (#) to avoid reload white page

import routes from './routes.js';

let router = null;
let previousPage = null;

class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentPage = null;
    }

    init() {
        // Load initial page from hash
        this.loadPage(this.getPath());

        // Listen to hash change
        window.addEventListener('hashchange', () => {
            this.loadPage(this.getPath());
        });
    }

    getPath() {
        return location.hash.replace('#', '') || '/';
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

                    if (typeof Swal === 'undefined') {
                        console.error('SweetAlert is not loaded');
                        return;
                    }

                    Swal.fire({
                        title: 'Thank you!',
                        text: 'Your message has been received, we will get back to you as soon as possible',
                        icon: 'success',
                        customClass: { popup: 'contact-swal-popup' }
                    }).then(() => {
                        goBack();
                    });
                });
            }
        }


        // HOME buttons
        if (path === '/home') {
            document.querySelectorAll('.btn-open').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.navigate(`/${btn.dataset.page}`);
                });
            });
        }
    }
}

// INIT
export function initRouter() {
    router = new Router(routes);
    router.init();
}

// NAVIGATION
export function navigateTo(path) {
    if (router) router.navigate(path);
}

// BACK (SPA safe)
export function goBack() {
    if (previousPage) {
        router.navigate(previousPage);
    } else {
        router.navigate('/');
    }
}

// GLOBAL
window.navigateTo = navigateTo;
window.goBack = goBack;
