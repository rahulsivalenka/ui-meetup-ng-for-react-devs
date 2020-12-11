import Axios from 'axios';
import React, { useEffect } from 'react';

// postsService.js
const http = Axios.create();

export const getPosts = async () => {
  const { data } = await http.get('https://jsonplaceholder.typicode.com/posts');

  return data;
};

// MyComp.js
import { getPosts } from 'services/postsService';

const MyComp = () => {
  useEffect(() => {
    const serviceCall = async () => {
      try {
        const posts = await getPosts();

        console.log('http result: posts', posts);
      } catch (err) {
        console.error('http error', error);
      }
    };

    serviceCall();
  }, []);

  return <div></div>;
};

export default MyComp;
