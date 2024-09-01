// src/components/Post.jsx
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  return <div>Post ID: {id}</div>;
}

export default Post;
