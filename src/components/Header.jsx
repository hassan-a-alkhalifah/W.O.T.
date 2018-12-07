import React from 'react';
import homeIcon from '../assets/images/home-icon.png';
import archiveIcon from '../assets/images/archive-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';

function Header() {
  const mainTitleContainerSyles = {
    height: '68px',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: '26px'
  };
  const navigationBarStyles = {
    height: '47px',
    backgroundColor: '#DBDBDB',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  return(
    <div>
      <style jsx>{`
          img {
            width: 29px;
          }
      `}</style>
      <div style={mainTitleContainerSyles}>
        <h1>W.O.T.</h1>
      </div>
      <div style={navigationBarStyles}>
        <img src={homeIcon} alt="Home Icon"/>
        <img src={archiveIcon} alt="Archive Icon"/>
        <img src={finishIcon} alt="Finish Icon"/>
        <img src={deleteIcon} alt=" Delete Icon"/>
      </div>
    </div>
  );
}

export default Header;
