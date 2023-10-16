import DarkMode from "./DarkMode";

const Menu = ({classe, screenMobile}) => {

  function handleScroll(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <nav>
    <ul className={`${classe}`}>
      <li><a href="#sobre" onClick={handleScroll}>Sobre</a></li>
      <li><a href="#estrelas" onClick={handleScroll}>Estrelas</a></li>
      <li><a href="#apoiadores" onClick={handleScroll}>Apoiadores</a></li>
      <li><a href="#assinar" onClick={handleScroll}>Assinar</a></li>
      {screenMobile && <DarkMode estilo={{alignSelf: 'flex-start'}}/>}
    </ul>
  </nav>
  )
}

export default Menu;