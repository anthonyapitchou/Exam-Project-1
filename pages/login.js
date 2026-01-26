export default function login() {
  return /*HTML*/ `
<main class="login-page">

  <div class="login-header">
<div class="back-arrow">
    ←
  </div>
  <div class="login-container">



    <div class="left-container">
      <h1>
        Welcome Back 
        <img src="assets/icons/waving-hand.png" alt="hand">
      </h1>

      <!-- form -->
      <form class="login-form">

    
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required>
    

      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" required>

    <button type="submit" class="login-button">Login</button>

   

    <div class="or-separator">
      <span class">OR</span>
    </div>

    
      <button class="social-button-google">
        <img src="./assets/icons/icon-google.png" alt="Google logo">
Continue with Google</button>
      <button class="social-button-facebook">
              <img src="./assets/icons/facebook.png" alt="facebook logo">
Continue with Facebook</button>

       
      </form>
    </div>

    <div class="right-container">
      <img src="assets/images/headphone.jpg" alt="Headphone">
    </div>

  </div>
  </div>

</main>

    `;

}