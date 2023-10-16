import React from 'react';
import { UserContext } from '../UserContext';
import style from './Modal.module.css';

const Modal = ({estilo}) => {
  const {setSlide} = React.useContext(UserContext);

  function handleModalSlide() {
    setSlide(false);
  }

  return (
    <div className={style.modal} style={estilo} onClick={handleModalSlide}></div>
  )
}

export default Modal