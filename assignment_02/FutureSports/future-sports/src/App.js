import logo from './logo.svg';
import './App.css';
import Aside from './Components/Aside/Aside';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header'
//import ContactUs from './Components/Aside/ContactUs';


function App() {

  return (
    <div className='App'>
      <Navigation />
      <Header />
      <Footer />
    </div>
  );
}

export default App;

