import './Button.module.css';

const Button = ({nome, classe}) => {
  return (
    <button className={classe}>{nome}</button>
  )
}

export default Button