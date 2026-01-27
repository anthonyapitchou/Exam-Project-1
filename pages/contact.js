export default function contact() {
  return /*HTML*/ `
<main class="login-page">

  <div class="login-header">
<div class="back-arrow">
    ←
  </div>
  <div class="login-container">



    <div class="left-container">
    <div class ="text-container">
      <h1>Contact Us      
      </h1>
      <p>Keep in touch with us with the latest updates!</p>
      </div>

      <!-- form -->
      <form class="login-form">

    
      <label for="First Name">First Name</label>
      <input type="First Name" id="First Name" name="First Name" placeholder="Enter your Last Name" required>
    

      <label for="Last Name">Last Name</label>
      <input type="Last Name" id="Last Name" name="Last Name" placeholder="Enter your Last Name" required>

<label for="Phone Number">Phone Number</label>
      <input type="Phone Number" id="Phone Number" name="Phone Number" placeholder="Enter your Phone Number" required>

<label for="Email">Email</label>
      <input type="Email" id="Email" name="Email" placeholder="Enter your Email" required>

    <button type="submit" class="login-button">Login</button>

   

   

    
    
       
      </form>
    </div>

    <div class="right-container">
      <img src="assets/images/Screenshot.jpg" alt="Screenshot">
    </div>

  </div>
  </div>

</main>
    `;
}