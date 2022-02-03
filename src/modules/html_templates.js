const filmTemplate = (info, index, numLikes) => `
<li>
  <div class="image-container">
    <img src=${info.image} class="film-image">
  </div>
  <div class="film-info">
    <h1 class="film-title">${info.name}</h1>
    <div class="likes">
      <i class="far fa-heart" id="${info.id}"></i>
      <span class="likes">${numLikes} ${Number(numLikes) === 1 ? 'Like' : 'Likes'}</span>
    </div>
  </div>
  <button type="button" class="comments" id="${index}">Comments</button>
</li>
`;

const popUpTemplate = (movie) => {
  const popUpContainer = document.querySelector('.popup-container');
  popUpContainer.innerHTML = `
  <div class="popup-window">
    <h2 class="movie-title">${movie.name}</h2>
    <svg style="width:24px;height:24px" viewBox="0 0 24 24" class="close-icon">
      <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
    <div class="movie-info">
      <img src=${movie.image} class="film-image">
      <div class="description">
        <span><b>Average Runtime:</b> ${movie.runtime} minutes</span>
        <span><b>Ended:</b> ${movie.ended} </span>
        <span><b>Summary:</b> ${movie.description}</span>
      </div>
    </div>
    <div class="popup-comments">Comments</div>
  </div>
  `;
  popUpContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-icon');
  closePopup.addEventListener('click', () => {
    popUpContainer.style.display = 'none';
  });
};

export { filmTemplate, popUpTemplate };