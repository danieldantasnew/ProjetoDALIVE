import React from 'react';

export const UserContext = React.createContext();

export const GlobalContext = ({children}) => {

  const [slide, setSlide] = React.useState(null);
  const [posicaoSlide, setPosicaoSlide] = React.useState(null);
  const [efeitoTransicao, setEfeitoTransicao] = React.useState(null);

  return (
    <UserContext.Provider value={{slide, setSlide, setPosicaoSlide, posicaoSlide, efeitoTransicao, setEfeitoTransicao}}>
      {children}
    </UserContext.Provider>
  )
}