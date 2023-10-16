import './App.css';
import {GlobalContext} from './UserContext';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';

function App() {

  return (
    <GlobalContext>
      <main>
        <Header/>
        <Content/>
        <Footer/>
      </main>
    </GlobalContext>
  )
}

export default App;
