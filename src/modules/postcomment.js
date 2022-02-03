
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'A6awKRj5ONHGw5twcKDH';


const postComment = async (score) => {
    const response = await fetch(`${baseUrl}${appId}/comments`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    });
  
    const { result } = await response.json();
    return result;
  };

  const getComment = async (id) => {
    const response = await fetch(`${baseUrl}${appId}/comments?item_id=${id}`);
    const  result  = await response.json();
    console.log(result)
  };

  export {postComment,getComment} ;