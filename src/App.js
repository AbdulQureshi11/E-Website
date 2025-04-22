import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Navigation from './Pages/Fix Layout/Navigation';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Client from './Pages/Client';
import Services from './Pages/Services';
import Store from './Pages/Store';
import Dashboard from './Pages/Dashboard';
import Login from './Components/FixLayout Component/Header Component/Login';
import Signup from './Components/FixLayout Component/Header Component/Signup';

function App() {
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path='/' element= {<Navigation/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Client' element={<Client/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>


        {/*This is Customdrop Down Section*/}
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Route>


    )
  )
  return (
    <div>
      
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
