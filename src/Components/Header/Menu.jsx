const Menu = ({classe}) => {
  return (
    <nav>
    <ul className={classe}>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#estrelas">Estrelas</a></li>
      <li><a href="#apoiadores">Apoiadores</a></li>
      <li><a href="#assinar">Assinar</a></li>
    </ul>
  </nav>
  )
}

export default Menu;