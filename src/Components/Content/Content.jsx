import React from 'react';
import style from './Content.module.css';
import Lives from './Lives/Lives';
import Transmission from './Transmission/Transmission';
import Streamers from './Streamers/Streamers';
import Apoiadores from './Apoiadores/Apoiadores';
import Assine from './Assine/Assine';
import Conect from './Conect/Conect';
import {UserContext} from '../../UserContext';
import Slides from './Streamers/Slides';

const Content = () => {

  const {slide} = React.useContext(UserContext);
  const images = [
    {
      src: '../../../../public/images/streamer-diana.jpg',
      id: 0,
      name: 'diana',
    },
    {
      src: '../../../../public/images/streamer-alanzoka.png',
      id: 1,
      name: 'alan',
    },
    {
      src: '../../../../public/images/streamer-jovirone.jpg',
      id: 2,
      name: 'jovirone',
    },
    {
      src: '../../../../public/images/streamer-casimiro.jpg',
      id: 3,
      name: 'casimiro',
    },
    {
      src: '../../../../public/images/streamer-nivi.png',
      id: 4,
      name: 'nivi',
    },
    {
      src: '../../../../public/images/streamer-pato.jpg',
      id: 5,
      name: 'pato',
    },
  ]
  
  return (
    <>
      {slide && <Slides images={images}/>}
      <section className={`${style.Content} animationLeft` }>
        <Lives/>
        <Transmission/>
        <Streamers images={images}/>
        <Apoiadores/>
        <Assine/>
        <Conect/>
      </section>
      <button className={style.botaoScrollUp} onClick={()=> window.scrollTo(0,0)}><img src="../../../public/icons/upward-arrow.png" alt="Scroll Up" /></button>
    </>
  )
}

export default Content;