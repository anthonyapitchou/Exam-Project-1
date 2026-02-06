export default function contact() {
  return /*HTML*/ `

  <main class="login-contact">

  <div class="login-header">
<div class="back-arrow-contact" onclick="window.goBack();">
    ←
  </div>


  <div class="login-container-contact">
    <div class="left-container-contact">
    <div class ="text-container">
      <h1>Contact Us      
      </h1>
      <p>Keep in touch with us with the latest updates!</p>
      </div>

    <form id="contact-form">

  <label for="firstName">First Name</label>
  <input
    type="text"
    id="firstName"
    name="firstName"
    placeholder="Enter your First Name"
    required>

  <label for="lastName">Last Name</label>
  <input
    type="text"
    id="lastName"
    name="lastName"
    placeholder="Enter your Last Name"
    required>

  <label for="phone">Phone Number</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    placeholder="Enter your Phone Number"
    required>

  <label for="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your Email"
    required>

  <label for="message">Write your Message</label>
  <textarea
    id="message"
    name="message"
    placeholder="Enter your message"
    required 
    ></textarea>

  <button type="submit" class="submit-button-contact"> Send message </button>

</form>

   

   

    
    
       
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

