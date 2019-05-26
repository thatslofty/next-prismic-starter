import React from 'react';
import Post from 'components/post';
import 'isomorphic-unfetch';

const HomePage = data => (
  <div className='HomePage'>
    Home
    {console.log(data.posts)}
    {data.posts.map(p => (
      <Post key={p.id} data={p.data} />
    ))}
  </div>
);

HomePage.getInitialProps = async ({ req }) => {
  // cms api url
  const url = 'https://next-prismic-starter.cdn.prismic.io/api/v2';

  // get required ref from prismic
  const refReq = await fetch(url);
  const refReqJson = await refReq.json();
  const { ref } = refReqJson.refs.find(obj => obj.id === 'master');

  // define func for data requests
  const get = async predicate => {
    const getReq = await fetch(`${url}/documents/search?ref=${ref}&q=[[${predicate}]]`);
    const getReqJson = await getReq.json();
    return getReqJson.results;
  };

  const posts = await get('at(document.type,"posts")');

  return {
    posts,
  };
};

export default HomePage;
