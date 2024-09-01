import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// PostsComponent to display the fetched posts
const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts',
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
      staleTime: 1000 * 60, // Data is considered fresh for 1 minute
      refetchOnWindowFocus: true, // Refetch data when the window regains focus
      keepPreviousData: true, // Keep previous data while new data is being fetched
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
