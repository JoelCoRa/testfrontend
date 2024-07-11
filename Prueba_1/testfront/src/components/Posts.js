import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import '../styles/Posts.css';

const Posts = ({ userId }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts(userId));
  }, [dispatch, userId]);

  return (
    <div className="posts">
      <h2>Posts</h2>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <div className="comments">
            <h4>Comments:</h4>
            {post.comments.map(comment => (
              <div className="comment" key={comment.id}>{comment.body}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
