export default function newlook() {
    return /*HTML*/ `

<main>

  <section class="new-looks">

    <!-- TITLES -->
    <div class="title-row">
      <h2 class="section-title">New Looks</h2>
      <h2 class="collection-title">Comme des Garçons</h2>
    </div>

    <!-- FASHION GRID -->
    <div class="looks-grid">

      <div class="photo1">
        <a href="chanel.html">
          <img src="assets/images/chanel.jpg" alt="Chanel look">
        </a>
        <p class="taken from google images">Chanel</p>
      </div>

      <div class="photo2">
        <a href="https://www.chanel.com/us/fashion/p/A01112Y0129594305/classic-handbag-lambskin-gold-tone-metal/.html">
          <img src="assets/images/bagchanel.jpg" alt="Chanel bag">
        </a>
        <p class="brand-name">Chanel</p>
      </div>

      <div class="photo3">
        <img src="assets/images/blue.jpg">
      </div>

      <div class="photo4">
        <img src="assets/images/converse.jpg">
      </div>

      <div class="photo5">
        <a href="chanel-suit.html">
          <img src="assets/images/suit.jpg" alt="Chanel suit">
        </a>
        <p class="brand-name">Chanel</p>
      </div>

      <div class="photo6">
        <img src="assets/images/red.jpg">
      </div>

      <div class="photo7">  <img src="assets/images/dress.jpg">
      </div>

    </div>

  </section>

  <!-- NEWSLETTER -->
  <section class="newsletter">
    <h2>Let's Keep In Touch</h2>
    <div class="newsletter-box">
      <input type="email" placeholder="Email Address"><button>Subscribe</button>
    </div>
  </section>

</main>




    `;
}