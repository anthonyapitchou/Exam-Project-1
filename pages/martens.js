export default function martens() {
  return /*HTML*/ `

<section class="martens-page">

  <div class="login-header">
<div class="back-arrow-martens" >
    ←
  </div>

<button class="share-btn-martens" onclick="window.sharePost()" style="cursor:pointer; background:none; border:1px solid #000; padding:5px 15px; border-radius:20px; font-weight:bold;">
        SHARE 🔗
    </button>

  <div class="login-container-martens">


    <!-- LEFT : image -->
    <div class="left-container-martens">
      <img src="assets/images/martens.jpg" alt="Nike Athletic Shoe">
    </div>

    <!-- RIGHT : content -->
    <div class="right-container-martens">

      <div class="text-container">
        <h1>Dr Martens</h1>
      </div>

      <div class="main-text-martens ">
        <p>
          A bold statement piece that blends rebellious attitude with timeless craftsmanship. 
          This iconic yellow boot stands out with its striking color and graphic branding, instantly drawing attention and adding character to any outfit. 
          Built with durable materials and a solid sole, it combines style and functionality, making it perfect for both urban exploration and everyday wear. 
          Its lace-up design and structured silhouette give it a strong, confident look, ideal for those who aren’t afraid to express their individuality and break away from the ordinary.
        </p>
      </div>

      <div class="price-button">
        <p class="price">Price: 180 €</p>
      </div>

      <a href="https://www.pexels.com/photo/unpaired-yellow-dr-martens-lace-up-boot-1159670/"  target="_blank" class="source-button"> Click to see the shoes
     
      </a>

    </div>
  </div>

  </section>

    `;
}