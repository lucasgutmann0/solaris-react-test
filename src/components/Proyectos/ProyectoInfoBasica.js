import React from "react";
import InputText from "../forms/InputText";
import Label from "../forms/Label";

export default function ProyectoInfoBasica() {
  return (
    <div className="h-full p-4">
      <div className="">
        <h2 className="font-bold mb-2">Información del proyecto</h2>
        <hr class="rounded" />
      </div>
      <div>
        <div className="flex mb-3 mt-3">
          <Label
            contenido="Nombre proyecto:"
            for="input_name"
            className="formLabel--left-noPadding"
          />
          <h3 className="ml-4">Telepacifico</h3>
        </div>
        
        <div className="flex mb-3">
          <Label
            contenido="Ubicación:"
            for="input_name"
            className="formLabel--left-noPadding"
          />
          <h3 className="ml-4">Santiago de Cali, Valle del Cauca</h3>
        </div>

        <div className="flex mb-3">
          <Label
            contenido="Dirección:"
            for="input_name"
            className="formLabel--left-noPadding"
          />
          <h3 className="ml-4">Calle 5A # 38A-14, Piso 3</h3>
        </div>

        <div className="flex mb-3">
          <Label
            contenido="Fecha de instalación:"
            for="input_name"
            className="formLabel--left-noPadding"
          />
          <h3 className="ml-4">Informacion</h3>
        </div>

        <div className="flex mb-3">
          <Label
            contenido="Intervalo de actualización:"
            for="input_name"
            className="formLabel--left-noPadding"
          />
          <h3 className="ml-4">15 minutos</h3>
        </div>
        
      </div>
    </div>
  );
}
