import React from 'react'

const useMedia = (tamanho) => {

  const [telaAtiva, setTelaAtiva] = React.useState(null);

  React.useEffect(()=> {
    function telaMobile() {
      const {matches} = window.matchMedia(tamanho);
      setTelaAtiva(matches);
    }
    telaMobile();

    window.addEventListener('resize', telaMobile);

    return (()=> {
      window.removeEventListener('resize', telaMobile);
    })

  }, [tamanho]);

  return telaAtiva;
}

export default useMedia;