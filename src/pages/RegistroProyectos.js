import React, { Component } from "react";

//componentes
import Footer from "../components/Footer";
import Button from "../components/forms/Button";
import InputText from "../components/forms/InputText";
import Label from "../components/forms/Label";
import NavbBar from "../components/NavbBar";
import ListaProyectos from "../components/Proyectos/ProyectosList";
// import DataTableProyectos from "../components/ProyectosList/DataTableProyectos";

export default class ProyectosList extends Component {
  render() {
    // //formulario
    // const $form = document.querySelector("#crearProyectoForm");
    // $form.addEventListener("submit", (event) => {
    //   event.preventDefault(); //evitar reload de la pagina

    //   const formData = new FormData(event.currentTarget)
    //   debugger
    // });

    return (
      <div className="h-screen flex flex-col w-full">
        <NavbBar />
        <div className="mx-auto content-center flex-1 w-full flex flex-col p-8 lg:flex-row">
          <div className="flex w-full lg:w-1/2 items-center flex-initial mb-10">
            <form
              id="crearProyectoForm "
              className="w-full card lg:mr-20 mr-0 p-8 items-center"
            >
              <div className="mb-6">
                <div>
                  <Label
                    contenido="Nombre Proyecto:"
                    for="input_name"
                    className="formLabel"
                  />
                </div>
                <div>
                  <InputText
                    id="input_nombre_proyecto"
                    placeholder="Nombre Proyecto"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div>
                  <Label
                    contenido="Dirección:"
                    for="input_direccion"
                    className="formLabel"
                  />
                </div>
                <div>
                  <InputText
                    id="input_direccion"
                    placeholder="Cra.."
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div>
                  <Label
                    contenido="Capacidad:"
                    for="input_name"
                    className="formLabel"
                  />
                </div>
                <div>
                  <InputText
                    id="input_cantidad"
                    placeholder="10"
                    type="number"
                  />
                </div>
              </div>

              <div className="flex-initial">
                <div className="w-full  flex flex-row content-around">
                  <div className="mb-6 pr-2 flex-1">
                    <Label
                      contenido="Longitud:"
                      for="input_name"
                      className="formLabel"
                    />
                    <InputText
                      id="input_longitud"
                      placeholder="Longitud"
                      type="number"
                    />
                  </div>
                  <div className="mb-6 pl-2 flex-1">
                    <Label
                      contenido="Latitud:"
                      for="input_name"
                      className="formLabel"
                    />
                    <InputText
                      id="input_latitud"
                      placeholder="Latitud"
                      type="number"
                    />
                  </div>
                </div>
              </div>

              <div className="items-center w-full text-center">
                <Button nombre="Añadir" />
              </div>
            </form>
          </div>

          <div className="flex-initial items-center w-full lg:w-1/2 mr-4">
            <ListaProyectos />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
