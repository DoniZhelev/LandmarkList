import { Redirect, Route, Switch} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import './components/config/firebase'
import './App.css';
import { auth } from './components/config/firebase';
import CreateNewLandmark from './components/CreateNewLandmark/CreateNewLandmark';




function App() {
const [user, setUser] = useState(null);
useEffect(() =>{
  auth.onAuthStateChanged(setUser);
}, [])


  return (
    <div className="page-wrapper">
  <Header  email={user?.email} isAuth={Boolean(user)} />
 
<Switch>

<Route path="/" exact component={Main} />
<Route path="/register"  component={Register} />
<Route path="/login"   component={Login} />
<Route path="/logout" render={props =>{
  auth.signOut();
  return <Redirect to="/" />
}} />
<Route  path="/create" component={CreateNewLandmark} />

</Switch>
 

<Footer />
    </div>
  );
}

export default App;
