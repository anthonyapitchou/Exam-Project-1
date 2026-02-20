export default function register() {
    return `
        <section class="auth-section">
            <h1>Register</h1>
            <form id="register-form">
                <input type="text" name="name" placeholder="Username Name" required>
                <input type="email" name="email" placeholder="Email" >
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Create Account</button>
            </form>
            <p>Already have an account? <a href="#/login">Login here</a></p>
        </section>
    `;
}
