export default function footer() {
    return /*HTML*/ `

<footer class="footer">
<div class="footer-container">

<!-- brand -->

<div class="footer-brand">
<nav class="footer-logo">
    <a href="javascript:void(0)" class="footer-logo" onclick="window.navigateTo('/home')">StudioHybrid</a>
</nav>
<div class="social-icons">
<img src="assets/icons/facebook.png" alt="facebook-logo" class="facebook-logo">
<img src="assets/icons/instagram.png" alt="twitter-logo" class="instagram-logo">
<img src="assets/icons/twitter.png" alt="twitter-logo" class="twitter-logo">
<img src="assets/icons/linkedin.png" alt="linkedin-logo" class="linkedin-logo">


</div>
</div>

<!-- quick links -->
<nav class="footer-links">
<h3>Quick Links</h3>
<ul>
    <li><a href=javascript:void(0)" onclick="window.navigateTo('/about')">About</a></li>   
    <li><a href=javascript:void(0)" onclick="window.navigateTo('/contact')">Contact</a></li>
    <li><a href=javascript:void(0)" onclick="window.navigateTo('/login')">Login</a></li>
    <li><a href=javascript:void(0)" onclick="window.navigateTo('/newlook')">New Look</a></li>
</ul>
</nav>

<div class="footer-payments">
<h3>Payment Service</h3>
<img src="assets/images/payment.jpg" alt="Payment Methods">
</div>  



    `;

}