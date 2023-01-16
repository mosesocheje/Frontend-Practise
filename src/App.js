import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Features from './Components/Features/Features'; 
import Gallery from './Components/Gallery/Gallery';
import Client from './Components/Client/Client';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="App">
     <Navigation/>
     <Home/>
     <About/>
     <Features/>
     <Gallery/>
     <Client/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
