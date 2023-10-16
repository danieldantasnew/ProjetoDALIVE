import style from './Assine.module.css';

const Assine = () => {
  return (
    <div className={style.Assine} id='assinar'>
      <h4>Assine nossa Newsletter</h4>
      <div className={style.inputSub}>
        <label htmlFor="subscribe">
          <input type='email' id='subscribe' placeholder='user@email.com'/>
        </label>
        <button className={style.botaoInput}>Subscribe</button>
      </div>
    </div>
  )
}

export default Assine;