const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'A6awKRj5ONHGw5twcKDH';

const postLikes = async (id) => {
  fetch(`${baseUrl}${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getLikes = async () => {
  const response = fetch(`${baseUrl}${appId}/likes`);
  const likesData = (await response).json();
  return likesData;
};

const filmLikes = async (likesIcons) => {
  likesIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      postLikes(icon.id);
    });
  });
};

export { filmLikes, getLikes, postLikes };