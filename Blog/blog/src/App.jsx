import React, {createContext,useState} from 'react';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Write from './pages/write/Write';
import Nopage from './pages/Nopage';
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateHomeRoute from './components/routing/PrivateHomeRoute';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  
  return (
    <Router>
    <Topbar />
    <Routes>
      {/* <Route exact path='/' element={<PrivateRoute />}> */}
      <Route exact path='/' element= {<Home />} />
      {/* </Route> */}
      {/* <Route exact path='/register' element={<PrivateHomeRoute />}> */}
      <Route exact path='/register' element= {<Register />} />
      {/* </Route> */}
      {/* <Route exact path='/login' element={<PrivateHomeRoute />}> */}
      <Route exact path='/login' element= {<Login />} />
      {/* </Route> */}
      {/* <Route exact path='/post/:id' element={<PrivateRoute />}> */}
      <Route exact path='/post/:id' element= {<Single />} />
      {/* </Route> */}
      <Route exact path='/write' element={<PrivateRoute />}>
      <Route exact path='/write' element= {<Write />} />
      </Route>
      <Route exact path='/settings' element={<PrivateRoute />}>
      <Route exact path='/settings' element= {<Settings />} />
      </Route>      
      
      <Route path='*' element= {<Nopage />} />
    </Routes>
   
    
  </Router>
  );
};

export default App;
