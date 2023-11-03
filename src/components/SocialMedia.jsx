import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/Shivpuje2204">
      <div>
        <BsTwitter />
      </div>
    </a>
    <a href="https://www.instagram.com/_swapnil_pvt_03">
      <div>
        <BsInstagram />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/swapnil-shivpuje-182305246/">
      <div>
        <IoLogoLinkedin />
      </div>
    </a>
    <a href="https://github.com/iamswapnil22">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://leetcode.com/swapnils_leetcode">
      <div>
        <SiLeetcode />
      </div>
    </a>
    <a href="https://auth.geeksforgeeks.org/user/swapnils_geeksforgeeks/practice/">
      <div>
        <SiGeeksforgeeks />
      </div>
    </a>
  </div>
);

export default SocialMedia;
