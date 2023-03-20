// import logo from './logo.svg';
import './App.css';

// Assets Imports
// import './assets/css/style.css'
// import './assets/lib/animate/animate.min.css'
// import './assets/lib/owlcarousel/assets/owl.carousel.min.css'
// import './assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
// import './assets/lib/wow/wow.min.js'
// import './assets/lib/easing/easing.min.js'
// import './assets/lib/waypoints/waypoints.min.js'
// import './assets/lib/counterup/counterup.min.js'
// import './assets/lib/owlcarousel/owl.carousel.min.js'
// import './assets/lib/tempusdominus/js/moment.min.js'
// import './assets/lib/tempusdominus/js/moment-timezone.min.js'
// import './assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js'
// // import './assets/'
// import './assets/'
// import './assets/'
// import './assets/'

import Home from './components/home';
// import Spinner from './components/base/spinner'
import { Route, Routes } from 'react-router-dom'
import Header from './components/base/header'
import Newsletter from './components/base/newsletter'
import Carousel from './components/base/carousel'
import Footer from './components/base/footer'
import Modal from './components/base/modal';
import Login from './components/account/login';
import Register from './components/account/register';

function App() {
  return (
    <div className="App">
      <div class="container-xxl bg-white p-0">
      <Header />
      <Modal/>
      <Carousel />      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register/> } />
        </Routes>
      <Newsletter/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
