// router.js - Simple SPA Router for Fashion Blog
import routes from './routes.js';

let router = null;

class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentPage = null;
    }

    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.loadPage(window.location.pathname);
        });

        // Handle initial page - attach listeners for current page
        this.attachEventListeners(window.location.pathname);
    }

    // Navigate to a new page
    navigate(path) {
        console.log('Navigating to:', path); // Debug log
        // Update browser URL without reloading
        window.history.pushState(null, null, path);
        this.loadPage(path);
    }

    // Load the page content
    loadPage(path) {
        console.log('Loading page:', path); // Debug log
        // Find matching route
        const route = this.routes.find(r => r.path === path) || this.routes.find(r => r.path === '/');

        if (route) {
            // Get the page function
            const pageFunction = route.component;

            // Render the page in app container
            const appContainer = document.querySelector('#app');
            if (appContainer) {
                appContainer.innerHTML = pageFunction();

                // After rendering, attach event listeners
                this.attachEventListeners(path);

                // Store current page
                this.currentPage = path;
            }
        }
    }

    // Attach event listeners after page loads
    attachEventListeners(path) {
        // Handle login form submission
        if (path === '/' || path === '/login') {
            const loginForm = document.querySelector('#login-form');
            console.log('Login form found:', loginForm); // Debug log

            if (loginForm) {
                // Use arrow function to preserve 'this' context
                loginForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    console.log('Form submitted!'); // Debug log

                    // Get form values
                    const email = document.querySelector('#email').value.trim();
                    const password = document.querySelector('#password').value.trim();

                    console.log('Email:', email, 'Password:', password); // Debug log



                    console.log('About to navigate to /home'); // Debug log

                    // Navigate to home page
                    this.navigate('/home');
                });
            }
        }

        // Handle "Open" buttons on home page
        if (path === '/home') {
            const openButtons = document.querySelectorAll('.btn-open');
            openButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const page = e.target.getAttribute('data-page');
                    this.navigate(`/${page}`);
                });
            });
        }
    }
}

// Initialize the router - called from app.js
export function initRouter() {
    router = new Router(routes);
    router.init();
    console.log('Router initialized with routes:', routes);
}

// Export navigate function for use in other files
export function navigateTo(path) {
    if (router) {
        router.navigate(path);
    } else {
        console.error('Router not initialized!');
    }
}

export default Router;