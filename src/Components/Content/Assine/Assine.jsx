import style from './Assine.module.css';

const Assine = () => {
  return (
    <div className={style.Assine}>
      <h4>Assine nossa Newsletter</h4>
      <div className={style.inputSub}>
        <label htmlFor="subscribe">
          <input type='email' id='subscribe' placeholder='user@email.com'/>
        </label>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Assine;