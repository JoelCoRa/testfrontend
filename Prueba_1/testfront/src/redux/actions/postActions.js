
// Función para obtener las publicaciones de un usuario y sus comentarios.
export const fetchPosts = (userId) => async (dispatch) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  const posts = await response.json();
  const postsWithComments = await Promise.all(posts.map(async (post) => {
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    const comments = await commentsResponse.json();
    return { ...post, comments };
  }));
  dispatch({ type: 'FETCH_POSTS', payload: postsWithComments });
};
  