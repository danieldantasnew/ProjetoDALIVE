import React from 'react';
import style from './Streamer.module.css';

const Streamer = ({classe, name, src}) => {

  const [ativo, setAtivo] = React.useState(false);

  return (
    <div className={`${classe}`} style={{backgroundImage: `url(${src})`, gridArea: `${name}`}} onMouseEnter={()=> setAtivo(!ativo)} onMouseLeave={()=> setAtivo(!ativo)}>
      <div className={ativo ? style.modalAtivo : style.modal}></div>
      <h2 className={ativo ? style.streamerAtivo : style.streamer}>{name}</h2>
    </div>
  )
}

export default Streamer;