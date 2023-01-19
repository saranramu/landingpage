// import logo from './logo.svg';
import './App.css';
import Form from './components/form/form';
import CarouselFadeExample from './components/carousel/bootstrapcarousel';
import Iframe from './components/iframe/iframe';
import Contact from './components/contact/contact';
import Map from './components/map/map';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Form />
        <CarouselFadeExample />
        <Iframe />
        <Contact /> 
        <Map />
        <Footer />
    </div>
  );
}

export default App;
