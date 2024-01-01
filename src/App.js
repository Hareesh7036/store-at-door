import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='nav-bar'>
      <Navbar/>
      </div>
      <div className='footer-main'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
