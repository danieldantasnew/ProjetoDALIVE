import style from './Slides.module.css';
import style2 from '../Assine/Assine.module.css';
import Modal from '../../../Helper/Modal';
import React from 'react';
import { UserContext } from '../../../UserContext';
import {ReactComponent as Arrow } from '../../../../public/icons/arrow.svg'

const Slides = ({images}) => {
  const referenciaSlide = React.useRef();
  const {posicaoSlide, efeitoTransicao, setPosicaoSlide, setEfeitoTransicao} = React.useContext(UserContext);

  React.useEffect(()=>{
    setEfeitoTransicao(false);
    function handleSlide() { 
      if(referenciaSlide){
        const {width} = referenciaSlide.current.getBoundingClientRect()
        const transicao = -(width * posicaoSlide);
        referenciaSlide.current.style.transform = `translate(${transicao}px, -50%)`
      } 
    }

    handleSlide();

    window.addEventListener('resize', handleSlide);

    return ()=> {
      window.removeEventListener('resize', handleSlide);
    }
  }, [posicaoSlide, setEfeitoTransicao]);

  function handleAnterior() {
    if(posicaoSlide > 0) setPosicaoSlide((posicao)=> posicao - 1);
  }

  function handleProximo() {
    if(posicaoSlide < images.length - 1) setPosicaoSlide((posicao)=> posicao + 1);
  }

  return (
    <>
      <Modal/>
      <section className={style.carroselImg} style={efeitoTransicao ? {transition: "none"} : {transition: "transform .3s"}} ref={referenciaSlide}>
        {images.map((image) => <div key={image.id} style={{backgroundImage: `url(${image.src})`}} className={style.imagemSlide}></div>)}
      </section>
      <button className={`${style.button1} ${style2.botaoInput}`} onClick={handleAnterior}><Arrow/></button>
      <button className={`${style.button2} ${style2.botaoInput}`} onClick={handleProximo}><Arrow/></button>
    </>
  )
}

export default Slides;