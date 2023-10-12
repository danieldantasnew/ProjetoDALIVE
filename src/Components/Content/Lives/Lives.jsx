import Button from '../Items/Button';
import style from './Lives.module.css';

const Lives = () => {

  return (
    <div className={style.lives}>
      <div className={style.info}>
        <h2>Assista nossas lives</h2>
        <h3>Conecte-se</h3>
        <p>Uma plataforma online de streamming de games. Com momentos especiais com games nostálgicos.</p>
        <div className={style.botoes}>
          <Button nome='Saiba mais' classe={style.btn1}/>
          <Button nome='Assinar' classe={style.btn2}/>
        </div>
      </div>
      <div className={style.iframe}>
        <iframe src="https://www.youtube.com/embed/4TOycLs_7oE?si=vIDXLStaXrukKmmL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  )
}

export default Lives;