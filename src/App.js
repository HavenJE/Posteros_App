
import './App.css';
import Logo from './components/Logo';
import Main from './components/Main';
import Contact from './components/Contact';
import FirstCarousel from './components/FirstCarousel';
// import About_img1 from './pages/aboutUs/About_img1';
// import About_img3 from './pages/aboutUs/About_img3';
// import ab_Images from './assets/ab_Images';


function App() {

  return (
    <div className="App">
      <Logo />

      <div className='first-ab-image-outer-div'>
        
        <div className='inner-div'>
          <Main />
          <Contact />
          
        </div>
      </div>

    </div>
  );
}


export default App;
