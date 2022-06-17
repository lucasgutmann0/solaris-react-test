import React, { Component } from "react";
import NavbBar from "../components/NavbBar";
import Graphics from "../components/graphics/Graphics";
import Maps from "../components/graphics/Maps";
import Footer from "../components/Footer";
import ListaProyectos from "../components/Proyectos/ProyectosList";
import ProyectoInfoBasica from "../components/Proyectos/ProyectoInfoBasica";

export default class MainPage extends Component {
  render() {
    return (
      <div className="">
        <NavbBar />
        <div className="p-6 flex flex-col lg:flex-col w-full">
          <div className="flex-initial w-full flex flex-col h-3/4 md:flex-row mb-2">
            <div className="card w-full mr-2">
              <ProyectoInfoBasica 

              />
            </div>
            <div className="card w-full h-1/3 mr-2">
              <Graphics direccion="hola" nombreProyecto="Telepacifico" />
            </div>
            <div className="card w-full">
              <Maps />
            </div>
          </div>
          <div className="card flex-initial w-full mr-4">
            <ListaProyectos />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
