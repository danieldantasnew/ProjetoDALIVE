import Streamer from './Streamer';
import style from './Streamers.module.css';

const Streamers = () => {

  const images = [
    {
      src: '../../../../public/images/streamer-diana.jpg',
      id: 0,
      name: 'diana',
    },
    {
      src: '../../../../public/images/streamer-alanzoka.png',
      id: 1,
      name: 'alan',
    },
    {
      src: '../../../../public/images/streamer-jovirone.jpg',
      id: 2,
      name: 'jovirone',
    },
    {
      src: '../../../../public/images/streamer-casimiro.jpg',
      id: 3,
      name: 'casimiro',
    },
    {
      src: '../../../../public/images/streamer-nivi.png',
      id: 4,
      name: 'nivi',
    },
    {
      src: '../../../../public/images/streamer-pato.jpg',
      id: 5,
      name: 'pato',
    },
  ]

  return (
    <div className={style.streamers}>
      {images.map((image)=> <Streamer key={image.id} src={image.src} name={image.name} classe={style.image} />)}
    </div>
  )
}

export default Streamers