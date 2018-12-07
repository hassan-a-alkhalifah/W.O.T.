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
  };
  const homeIconStyles = {
    width: '29px',
    height: '29px'
  };
  const archiveIconStyles = {
    width: '30px',
    height: '26px'
  };
  const finishIconStyles = {
    width: '25px',
    height: '25px'
  };
  const deleteIconStyles = {
    width: '30px',
    height: '30px'
  };

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
        <img src={homeIcon} alt="Home Icon" style={homeIconStyles}/>
        <img src={archiveIcon} alt="Archive Icon" style={archiveIconStyles}/>
        <img src={finishIcon} alt="Finish Icon" style={finishIconStyles}/>
        <img src={deleteIcon} alt=" Delete Icon" style={deleteIconStyles}/>
      </div>
    </div>
  );
}

export default Header;
