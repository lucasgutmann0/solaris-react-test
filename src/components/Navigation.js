//IMPORT REACT
import React, { Component } from 'react'

//IMPORT REACT-ROUTER-DOM
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

  //VISTAS - COMPONENTES
  import MainPage from '../pages/MainPage';
  import About from '../pages/About'
  import Registro from '../pages/RegistroProyectos'

  //CLASE NAVIGATION FOR MAKE ROUTES
export default class Navigation extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path='/' element={ <MainPage /> } />
            <Route exact path='/about' element={ <About /> } />
            <Route exact path='/proyecto' element={ <About /> } />
            <Route exact path='/proyecto/nuevo' element={ <Registro /> } />
          </Routes>
      </Router>
    )
  }
}