import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import firebase from 'firebase'

import Navbar from './components/NavBar.js';
import Footer from './components/Footer'
import AuthProvider from './context/AuthContext.js'
import PrivateRoute from './components/PrivateRoute'
import PrivateList from './components/PrivateList'
import AnonRoute from './components/AnonRoute'
import Search from './components/Search'
import SearchReferencia from './components/SearchReferencia'
import CrearViviendas from './components/CrearViviendas';
import EliminarVivienda from './components/EliminarVivienda'
import ModificarVivienda from './components/ModificarVivienda'
import RecibirInformacion from './components/RecicibirInformacion'

import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound'
import List from './pages/List'
import Home from './pages/Home'
import Detail from './pages/Detail'


const config = {
apiKey: "AIzaSyDeRbk1dsAHiQyr1T1FRhk1d317hzWaAKc",
authDomain:"inmob-frontend.firebaseapp.com",
storageBucket: "gs://inmob-frontend.appspot.com/"
}
firebase.initializeApp(config)


class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
        <div className="container">
          <Navbar />
          <section className="main-wrapper">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/signup" component={Signup} />
            <PrivateRoute  path ="/privatelist" component={PrivateList} />
            <AnonRoute  path="/login" component={Login} />
            <PrivateRoute  path="/private" component={Private} />
            <PrivateRoute  path="/crearvivienda" component={CrearViviendas} />
            <PrivateRoute  path="/eliminarvivienda" component={EliminarVivienda} />
            <PrivateRoute  path="/modificarvivienda" component={ModificarVivienda} />
            <Route path="/searchreferencia" component={SearchReferencia} />
            <Route path = "/list"  component={List} />
            <Route path = "/detail/:id"  component={Detail} />
            <Route path = "/recibirinformacion" component={RecibirInformacion} />
            <Route path="/search" component={Search} />       
            <Route component={NotFound} />
          </Switch>
          </section>
          <Footer />
        </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
