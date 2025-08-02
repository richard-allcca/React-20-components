import "./App.css";
import img1 from './assets/img/1.jpg';
import img2 from './assets/img/2.jpg';
import img3 from './assets/img/3.jpg';
import img4 from './assets/img/4.jpg';
// import Slideshow from "./componentes/Slideshow";
import Slideshow from './Slider/Slideshow';

function App() {

  return (
    <>
      <p className="titulo">Productos Destacados</p>
      <Slideshow controles={true}>
        <div className="slide">
          <a href="https://www.linkedin.com/in/richard-allcca-llano/">
            <img src={img1} alt=""/>
          </a>
          <div className="texto-slide">
            <p>15% descuento en productos Apple</p>
          </div>
        </div>
        <div className="slide">
          <a href="https://www.linkedin.com/in/richard-allcca-llano/">
            <img src={img2} alt=""/>
          </a>
          <div className="texto-slide">
            <p>15% descuento en productos Apple</p>
          </div>
        </div>
        <div className="slide">
          <a href="https://www.linkedin.com/in/richard-allcca-llano/">
            <img src={img3} alt=""/>
          </a>
          <div className="texto-slide">
            <p>15% descuento en productos Apple</p>
          </div>
        </div>
        <div className="slide">
          <a href="https://www.linkedin.com/in/richard-allcca-llano/">
            <img src={img4} alt=""/>
          </a>
          <div className="texto-slide">
            <p>15% descuento en productos Apple</p>
          </div>
        </div>
      </Slideshow>

      <p className="titulo">Productos Destacados</p>
      <Slideshow controles={true} autoplay={true} velocidad="1000" intervalo="5000">
        <div className="slide">
          <a href="https://www.linkedin.com/in/richard-allcca-llano/">
            <img src={img1} alt=""/>
          </a>
          <div className="texto-slide" style={{ background: 'navy' }}>
            <p>15% descuento en productos Apple</p>
          </div>
        </div>
        <div className="slide">
          <a href="https://www.linkedin.com/in/richard-allcca-llano/">
            <img src={img2} alt=""/>
          </a>
          <div className="texto-slide">
            <p>15% descuento en productos Apple</p>
          </div>
        </div>
      </Slideshow>
    </>
  );
}

export default App;

