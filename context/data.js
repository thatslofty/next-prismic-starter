// load in sync for requests
const request = require('sync-request');

// cms api url
const url = 'https://next-prismic-starter.cdn.prismic.io/api/v2';

// get required ref from prismic
const refReq = request('GET', url);
const { ref } = JSON.parse(refReq.getBody('utf8')).refs.find(obj => obj.id === 'master');

// define func for data requests
const get = predicate => {
  const getReq = request('GET', `${url}/documents/search?ref=${ref}&q=[[${predicate}]]`);
  return JSON.parse(getReq.getBody('utf8'));
};

const posts = get('at(document.type,"posts")').results;

module.exports = {
  posts
};
