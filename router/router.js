import routes from "./routes.js";


const app = document.querySelector("#app");

function navigateTo(path) {
    console.log("navigateTo:", path);

    const route = routes.find(r => r.path === path);

    if (!route) {
        app.innerHTML = "<h1>404</h1>";
        return;
    }

    app.innerHTML = route.view();

    if (route.afterRender) {
        route.afterRender();
    }
}

window.navigateTo = navigateTo;

navigateTo("/login");
