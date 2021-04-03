import { Route, Switch} from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import useToken from './services/useToken'

import './App.css';




function App() {
 
  const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="page-wrapper">
  <Header />
<Switch>

<Route path="/" exact component={Main} />
<Route path="/register"  component={Register} />
<Route path="/login"   component={Login} />
</Switch>
 

<Footer />
    </div>
  );
}

export default App;
