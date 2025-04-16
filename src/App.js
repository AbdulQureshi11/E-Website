import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Navigation from './Pages/Fix Layout/Navigation';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Client from './Pages/Client';
import Services from './Pages/Services';
import Store from './Pages/Store';
import Dashboard from './Pages/Dashboard';

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
