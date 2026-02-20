export default function ferragamo() {
  return /*HTML*/ `

<section class="ferragamo-page">


  <div class="login-header">
<div class="back-arrow-ferragamo"  >
    ←
  </div>

  <button class="share-btn-ferragamo" onclick="window.sharePost()" style="cursor:pointer; background:none; border:1px solid #000; padding:5px 15px; border-radius:20px; font-weight:bold;">
        SHARE 🔗
    </button>

  <div class="login-container-ferragamo">

  

    <!-- LEFT : image -->
    <div class="left-container-ferragamo">
      <img src="assets/images/bag.jpg" alt="bag">
    </div>

    <!-- RIGHT : content -->
    <div class="right-container-ferragamo">

      <div class="text-container">
        <h1>Ferragamo</h1>
      </div>

      <div class="main-text-ferragamo">
        <p>
          This elegant handbag combines refined luxury with a warm, natural texture. 
          The smooth leather top contrasts beautifully with the woven body, creating a perfect balance between sophistication and craftsmanship. 
          Its structured shape and subtle metallic clasp add a timeless touch, while the rich orange tone brings warmth and personality to any look. 
          Designed to be both practical and stylish, it's ideal for carrying everyday essentials while elevating your outfit with a distinctive, fashion-forward statement.
        </p>
      </div>

      <div class="price-button">
        <p class="price">Price: 400 €</p>
      </div>

      <a href="https://unsplash.com/photos/brown-leather-handbag-on-brown-wooden-table-ZT16YkAYueo"  target="_blank" class="source-button"> Click to see the bag
     
      </a>

    </div>

  </div>
</section>


    `;
}