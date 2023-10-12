import style from './Content.module.css';
import Lives from './Lives/Lives';
import Transmission from './Transmission/Transmission';
import Streamers from './Streamers/Streamers';
import Apoiadores from './Apoiadores/Apoiadores';
import Assine from './Assine/Assine';
import Conect from './Conect/Conect';

const Content = () => {
  return (
    <section className={`${style.Content} animationLeft` }>
      <Lives/>
      <Transmission/>
      <Streamers/>
      <Apoiadores/>
      <Assine/>
      <Conect/>
    </section>
  )
}

export default Content;