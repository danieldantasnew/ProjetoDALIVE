import style from './Apoiadores.module.css';

const Apoiadores = () => {

  const pessoas = [
    {
      id: 0,
      nome: 'John Doe',
      funcao: 'Fundador',
      src: '../../../../public/images/john.jpg',
    },
    {
      id: 1,
      nome: 'Jane Doe',
      funcao: 'Diretora de Mídia',
      src: '../../../../public/images/jane.jpg',
    },
    {
      id: 2,
      nome: 'John Doe Jr',
      funcao: 'Assistência Técnica',
      src: '../../../../public/images/jr.jpg',
    },
  ]

  return (
    <div className={style.Apoiadores} id='apoiadores'>
      {pessoas.map((pessoa)=> 
      <div key={pessoa.id} className={style.apoiador}>
        <div className={style.imagem} style={{backgroundImage: `url(${pessoa.src})`}}></div>
        <h3>{pessoa.nome}</h3>
        <p>{pessoa.funcao}</p>
      </div>
      )}
    </div>
  )
}

export default Apoiadores