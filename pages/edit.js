export default function edit() {
  return /*HTML*/ `
    <div class="edit-container">
    <div class="back-arrow-edit" onclick="window.goBack();" >
    ←
  </div>

  <div class="edit-header">
  <img src="./assets/images/vogue.jpg" alt="fashion" class="fashion">
    
  </div>
    

<div class="edit-content">
<h1>Express yourself </h1>
<p>Here you can edit your blog post, add your own content and share it with the world. be creative, and let your unique style shine through. 

    <section class="edit-page">

      <h1>Edit Blog Post</h1>

      <form id="edit-post-form">

        <label>Title</label>
        <input type="text" id="edit-title" required />

        <label>Content</label>
        <textarea id="edit-body" rows="6" required></textarea>

        <label>Image</label>
<input type="file" id="edit-image" accept="image/*" />

        <nav class="edit-buttons">
          <button type="submit" >Save Changes</button>
          <button type="button" id="delete-post" >Delete Post</button>
        </nav>

      </form>

    </section>
  `;
}


















