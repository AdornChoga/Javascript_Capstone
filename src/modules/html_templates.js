import { postComment, getComment, countComments } from './apicomment.js';

const filmTemplate = (info, index, numLikes) => `
<li class="film">
  <div class='image-container'>
    <img src=${info.image} class='film-image'>
  </div>
  <div class='film-info'>
    <div class='likes'>
      <i class='far fa-heart' id='${info.id}'></i>
      <span class='likes'>${numLikes} ${Number(numLikes) === 1 ? 'Like' : 'Likes'} </span>
    </div>
  </div>
  <button type='button' class='comments' id='${index}'>Comments</button>
</li>
`;

const popUpTemplate = async (movie) => {
  const popUpContainer = document.querySelector('.popup-container');
  const commentData = await getComment(movie.id);
  const commentCount = countComments(commentData);
  const commentItems = () => {
    if (!Array.isArray(commentData)) {
      return '<li>No comments yet.</li>';
    }
    const commentTemplate = commentData.map((comment) => (`<li>${comment.username} : ${comment.comment}</li>`));
    return commentTemplate.join('');
  };

  popUpContainer.innerHTML = `
  <div class='popup-window'>
    <h2 class='movie-title'>${movie.name}</h2>
    <svg style='width:24px;height:24px' viewBox='0 0 24 24' class='close-icon'>
      <path fill='currentColor' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' />
    </svg>
  <div class='movie-info'>
    <img src=${movie.image} class='popup-image'>
    <div class='description'>
      <span><b>Average Runtime:</b> ${movie.runtime} minutes</span>
      <span><b>Summary:</b> ${movie.description}</span>
    </div>
  </div>
  <div class='popup-comments'>Comments (${commentCount})</div>
  <form class='form-container'>
    <ul class='comment-list'>${commentItems()}</ul>
    <div class='name-field'>
      <input type='text' id='username' placeholder='Please enter your name' required>
      <textarea name='textarea' id='comment' placeholder='please add a comment' required></textarea>
      <span id="input-error">Input cannot be empty strings</span>
      <button type='submit' id="submit">Comment</button>
    </div>
  </form>
  </div>
  `;

  popUpContainer.style.display = 'block';
  const closePopup = document.querySelector('.close-icon');
  closePopup.addEventListener('click', () => { popUpContainer.style.display = 'none'; });

  const form = document.querySelector('.form-container');
  const errorMessage = document.querySelector('#input-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const listContainer = document.querySelector('.comment-list');
    const comment = {
      username: form.elements.username.value.trim(),
      comment: form.elements.comment.value.trim(),
      item_id: movie.id,
    };
    if (comment.username !== '' && comment.comment !== '') {
      await postComment(comment);
      const commentInfo = await getComment(comment.item_id);
      const countComment = countComments(commentInfo);
      document.querySelector('.popup-comments').innerHTML = `Comments (${countComment})`;
      listContainer.innerHTML = '';
      commentInfo.forEach((comment) => {
        const listItem = `<li>${comment.username}: ${comment.comment}</li>`;
        listContainer.innerHTML += listItem;
      });
      form.reset();
    } else if (comment.username === '' || comment.comment === '') {
      setTimeout(() => { errorMessage.style.display = 'block'; }, 500);
      setTimeout(() => { errorMessage.style.display = 'none'; }, 4500);
    }
  });
};

export { filmTemplate, popUpTemplate };
