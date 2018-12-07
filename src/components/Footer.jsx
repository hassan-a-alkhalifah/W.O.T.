import React from 'react';
import commentIcon from '../assets/images/comment-icon.png';
import githubIcon from '../assets/images/github-icon.png';

function Footer() {
  const footerStyles = {
    width: '100%',
    height: '47px',
    backgroundColor: '#000',
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#FFF',
    fontSize: '12px'
  };

  return(
    <div style={footerStyles}>
      <style jsx>{`
          img {
            width: 21px;
          }
      `}</style>
      <p>Coded and Designed by Hassan Al-khalifah</p>
      <img src={commentIcon} alt="Comment Icon"/>
      <img src={githubIcon} alt="Github Icon"/>
    </div>
  );
}

export default Footer;
