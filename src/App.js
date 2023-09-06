import React from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import AddFriend from './Components/AddFriend';
import Login from './Components/Login';
import FriendList from './Components/FriendList';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';



function App() {
  return (
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="/login" >Login.</Link>
          <Link className="link" to="/friends" >FriendList.</Link>
          <Link className="link" to="/friends/add" >AddFriend.</Link>
          <Link className="link" to="/logout" >Logout.</Link>
        </header>
        <Routes>
          <Route exact path="/" 
                 element={<Login />}/>
          <Route exact path="/login" 
                 element={<Navigate to="/"/>}/>
        <Route element={<PrivateRoute />}>        
          <Route exact path="/friends" 
                 element={<FriendList/>}
                 />
          <Route exact path="/friends/add" 
                 element={<AddFriend/> }/>
         </Route>


          <Route exact path="/logout" element={<Logout />}/>
           
        </Routes> 
      </div> 
    
  );
} 


export default App;
