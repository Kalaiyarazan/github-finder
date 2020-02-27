import React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className='about'>
      <FaGithub size='100' />
      <h2>Github Finder v1.0</h2>
      <p>
        With <FaHeart /> Kalaiyarazan
      </p>
    </div>
  );
};

export default About;
