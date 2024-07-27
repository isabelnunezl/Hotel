import HeaderComp from './components/Header.jsx'
import FooterComp from './components/Footer.jsx'
import HomePage from './components/Home.jsx'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <HeaderComp />
      <HomePage />
      <FooterComp />
    </div>
  );
};

export default App