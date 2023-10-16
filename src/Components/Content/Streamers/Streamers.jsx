import React from 'react';
import Streamer from './Streamer';
import style from './Streamers.module.css';
import {UserContext} from '../../../UserContext'

const Streamers = ({images}) => {

  const {setSlide, setPosicaoSlide, setEfeitoTransicao} = React.useContext(UserContext)

  function handleSlide(event) {
    setSlide(true);
    setPosicaoSlide(Number(event.currentTarget.id));
    setEfeitoTransicao(true);
  }

  return (
    <div className={style.streamers} id='estrelas'>
      {images.map((image)=> <Streamer key={image.id} id={image.id} src={image.src} name={image.name} classe={style.image} onClick={handleSlide}/>)}
    </div>
  )
}

export default Streamers