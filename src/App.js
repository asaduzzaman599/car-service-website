import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home/Home';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Login from './Components/Auth/Login/Login';
import NotFound from './Components/Shared/NotFound/NotFound';
import Register from './Components/Auth/Register/Register';
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import { Toaster } from 'react-hot-toast';
/**
 * 
 * 

 */
function App() {
  return (
    <div className="App">
       <Toaster />
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
