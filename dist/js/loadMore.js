const loadMore = document.getElementById('load');
const articlesNode = document.getElementById('articles');

loadMore.addEventListener('click', ()=> {
  loadMore.style.display = 'none';
  let articleNode = document.createElement('div');
  articleNode.innerHTML = `
        <div class="article hidden">
          <img src="images/content-image.png" alt="Article image">
          <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
          <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div class="view_full">
            <span><a href="#">View full article</a></span>
          </div>
        </div>
        <div class="article hidden">
          <img src="images/content-image.png" alt="Article image">
          <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
          <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div class="view_full">
            <span><a href="#">View full article</a></span>
          </div>
        </div>
        <div class="article hidden">
          <img src="images/content-image.png" alt="Article image">
          <h2>Roboto 40px Size, Spacing 44px - Comment On The Importance Of Human Life</h2>
          <p>Roboto Regular, 22px, Spacing 34px - Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div class="view_full">
            <span><a href="#">View full article</a></span>
          </div>
        </div>
  `;
      articlesNode.appendChild(articleNode);
})