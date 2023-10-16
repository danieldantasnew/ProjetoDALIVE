import React from 'react';
import style from './Streamer.module.css';
import useMedia from '../../../Hooks/useMedia';
import Modal from '../../../Helper/Modal';

const Streamer = ({classe, name, src, onClick, ...props}) => {

  const [ativo, setAtivo] = React.useState(false);
  const mobileMax = useMedia('(max-width: 60rem)');
  const mobileMin = useMedia('(min-width: 30.1rem)');

  return (
    <div className={`${classe}`} 
    style={(mobileMax && mobileMin) ? 
      {backgroundImage: `url(${src})`, gridArea: `initial`} : 
      {backgroundImage: `url(${src})`, gridArea: `${name}`}} 
    onMouseEnter={()=> setAtivo(!ativo)} 
    onMouseLeave={()=> setAtivo(!ativo)} 
    onClick={onClick} {...props}>
        {ativo ? <Modal estilo={{zIndex: 100, position: 'absolute'}}/> : ''}
        <h2 className={ativo ? style.streamerAtivo : style.streamer}>{name}</h2>
    </div>
  )
}

export default Streamer;