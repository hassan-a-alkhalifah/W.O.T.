import React from 'react';
import homeIcon from '../assets/images/home-icon.png';
import archiveIcon from '../assets/images/archive-icon.png';
import finishIcon from '../assets/images/finish-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';

function Header() {
  return(
    <div>
      <div>
        <h1>W.O.T.</h1>
      </div>
      <div>
        <img src={homeIcon} alt="Home Icon"/>
        <img src={archiveIcon} alt="Archive Icon"/>
        <img src={finishIcon} alt="Finish Icon"/>
        <img src={deleteIcon} alt=" Delete Icon"/>
      </div>
    </div>
  );
}

export default Header;
