import {ReactComponent as Sun} from '../../../public/icons/sun.svg';
import {ReactComponent as Moon} from '../../../public/icons/moon.svg';
import style from './DarkMode.module.css';
import React from 'react';

const DarkMode = ({estilo}) => {

  const[dark, setDark] = React.useState(false);
  const contentMain = document.querySelector('main');

  function handleDark() {
    setDark(!dark)
    contentMain.classList.toggle('modoDark');
  }

  return (
    <div className={style.darkMode} style={estilo}>
    <Sun/>
    <Moon/>
    <button className={dark? style.btnDarkAtivo : style.btnDark} onClick={handleDark}></button>
  </div>
  )
}

export default DarkMode