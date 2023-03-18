// import logo from './logo.svg';
// import './App.css';
import Home from './components/home';
// import Spinner from './components/base/spinner'
import { Route, Routes } from 'react-router-dom'
import Header from './components/base/header'
import Newsletter from './components/base/newsletter'
import Carousel from './components/base/carousel'
import Footer from './components/base/footer'

function App() {
  return (
    <div className="App">
      <div class="container-xxl bg-white p-0">
      <Header />
      <Carousel />      
        <Routes>
          <Route path='/' element={ <Home/>} />
        </Routes>
      <Newsletter/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
