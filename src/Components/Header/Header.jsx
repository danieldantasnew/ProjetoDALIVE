import React from 'react';
import useMedia from '../../Hooks/useMedia';
import style from './Header.module.css';
import Menu from './Menu';

const Header = () => {
  const mobile = useMedia('(max-width: 60rem)');
  const [mobileAtivo, setMobileAtivo] = React.useState(false);

  return (
    <header>
      <div className={style.btnMain}>
        <span className={style.firstName}>DA</span>
        <span>LIVE</span>
        <span>👾</span>
      </div>
      <div style={{position: 'relative'}}>
        {mobile ? <button className={mobileAtivo ? style.botaoMenuAtivo : style.botaoMenu} onClick={()=> setMobileAtivo(!mobileAtivo)}/> : <Menu classe={style.listNav}/>}
        {mobile && mobileAtivo ? <Menu classe={`${style.listMobileActive} animationLeft`}/> : 
        ''}
      </div>
    </header>
  )
}

export default Header