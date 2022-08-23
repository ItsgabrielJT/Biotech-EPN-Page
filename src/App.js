import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Content from './components/Content';
import ContentTwo from './components/ContentTwo';
import ContentThree from './components/ContentThree';

function App() {
  return (
    <>
      <NavBar/>      
      <Hero/>
      <Content/>
      <ContentTwo/>
      <ContentThree/>
      <Footer/>
    </>
  );
}

export default App;
