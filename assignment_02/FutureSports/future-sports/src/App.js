import logo from './logo.svg';
import './App.css';
import Aside from './Components/Aside/Aside';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Navigation />
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;

