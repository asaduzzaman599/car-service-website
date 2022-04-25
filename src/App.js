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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';
import About from './Components/About/About';
import PageTitle from './Components/Shared/PageTitle/PageTitle';
import AddService from './Components/AddService/AddService';
import Orders from './Components/Orders/Orders';
/**
 * 
 * 

 */

export const LoadingContext = createContext([])
function App() {
  const [loading, setLoading] = useState(false)
  console.log(loading)
  return (
    <div className="App">
      <Toaster />
      <ToastContainer />
      <Header></Header>
      <LoadingContext.Provider value={setLoading}>
        <Routes>
          <Route path='/' element={<PageTitle title='Home' ><Home></Home></PageTitle>}></Route>
          <Route path='/about' element={<PageTitle title='About' ><About></About></PageTitle>}></Route>
          <Route path='/home' element={<PageTitle title='Home' ><Home></Home></PageTitle>}></Route>
          <Route path='/service/:serviceId' element={<PageTitle title='Service Detail' ><ServiceDetail></ServiceDetail></PageTitle>}></Route>
          <Route path='/login' element={<PageTitle title='Login' ><Login></Login></PageTitle>}></Route>
          <Route path='/register' element={<PageTitle title='Register' ><Register></Register></PageTitle>}></Route>
          <Route path='/checkout/:serviceId' element={
            <RequireAuth><PageTitle title='CheckOut' >
              <CheckOut></CheckOut>
            </PageTitle></RequireAuth>
          }></Route>
          <Route path='/add' element={
            <RequireAuth><PageTitle title='Add Service' >
              <AddService></AddService>
            </PageTitle></RequireAuth>
          }></Route>
          <Route path='/orders' element={
            <RequireAuth><PageTitle title='Orders' >
              <Orders></Orders>
            </PageTitle></RequireAuth>
          }></Route>
          <Route path='/*' element={<PageTitle title='404' ><NotFound></NotFound></PageTitle>}></Route>
        </Routes>
      </LoadingContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
