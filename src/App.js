import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home/Home';
/**
 * 
 * 
https://i.ibb.co/92PfNb1/expert-6.png
https://i.ibb.co/qjsJqPR/expert-1.jpg
https://i.ibb.co/2d2KbbM/expert-2.jpg
https://i.ibb.co/L9T0tV7/expert-3.jpg
https://i.ibb.co/yp9b3d2/expert-4.jpg
https://i.ibb.co/dgv82xC/expert-5.jpg

 */
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
