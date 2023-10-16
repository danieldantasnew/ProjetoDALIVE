import React from 'react';
import useMedia from '../../Hooks/useMedia';
import style from './Header.module.css';
import Menu from './Menu';
import DarkMode from './DarkMode';


const Header = () => {
  const mobile = useMedia('(max-width: 60rem)');
  const [mobileAtivo, setMobileAtivo] = React.useState(false);

  function handleScroll() {
    window.scrollTo(0,0)
  }
  
  return (
    <header>
      <div className={style.btnMain} onClick={handleScroll}>
        <span className={style.firstName}>DA</span>
        <span>LIVE</span>
        <span>👾</span>
      </div>

      {!mobile &&  <DarkMode />}

      <div style={{position: 'relative'}}>
        {mobile ? <button className={mobileAtivo ? style.botaoMenuAtivo : style.botaoMenu} onClick={()=> setMobileAtivo(!mobileAtivo)}/> : <Menu classe={style.listNav}/>}
        {mobile && mobileAtivo ? <Menu classe={`${style.listMobileActive} animationLeft`} screenMobile={mobile}/> : 
        ''}
      </div>
    </header>
  )
}

export default Header