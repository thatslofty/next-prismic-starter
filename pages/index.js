import React from 'react';
import Post from 'components/post';
import { posts } from /* preval */ 'context/data';

const HomePage = () => (
  <div className='HomePage'>
    Home
    {console.log(posts)}
    {posts.map(p => (
      <Post key={p.id} data={p.data} />
    ))}
  </div>
);

export default HomePage;
