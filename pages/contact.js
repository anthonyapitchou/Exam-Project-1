export default function contact() {
  return /*HTML*/ `

  <main class="login-contact">

  <div class="login-header">
<div class="back-arrow-contact" onclick="window.history.back();">
    ←
  </div>


  <div class="login-container-contact">
    <div class="left-container-contact">
    <div class ="text-container">
      <h1>Contact Us      
      </h1>
      <p>Keep in touch with us with the latest updates!</p>
      </div>

      <!-- form -->
<form onsubmit="event.preventDefault(); Swal.fire({ title: 'Thank you!', text: 'Your message has been received, we will get back to you as soon as possible', icon: 'success', customClass: { popup: 'contact-swal-popup' } }).then(() => { window.navigateTo('/home'); });">    
      <label for="First Name">First Name</label>
      <input type="First Name" id="First Name" name="First Name" placeholder="Enter your Last Name" required>
    

      <label for="Last Name">Last Name</label>
      <input type="Last Name" id="Last Name" name="Last Name" placeholder="Enter your Last Name" required>

<label for="Phone Number">Phone Number</label>
      <input type="Phone Number" id="Phone Number" name="Phone Number" placeholder="Enter your Phone Number" required>

<label for="Email">Email</label>
      <input type="Email" id="Email" name="Email" placeholder="Enter your Email" required>

<label for="message">Write your Message</label>
      <input type="text" id="message" name="message" placeholder="Enter your message" required>

    <button type="submit" class="login-button-contact">Login</button>

   

   

    
    
       
      </form>
    </div>

    <div class="right-container-contact">
      <img src="assets/images/Screenshot.jpg" alt="Screenshot">
    </div>

  </div>
  </div>

</main>
    `;
}

