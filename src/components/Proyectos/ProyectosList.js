import { useEffect, useState } from "react";
import React from "react";

import * as proyectos_server from "./ProyectosAPI_server";
import DataTable from "react-data-table-component";

export default function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);

  const listadoProyectos = async () => {
    try {
      const res = await proyectos_server.proyectos();
      //console.log(res)
      const data = await res.json();
      setProyectos(data.proyectos);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listadoProyectos();
  }, []);

  //DATA TABLE - DATA
  const proyectos_table_data = [] //INFO TABLA

  for (let nombre in proyectos){
    proyectos_table_data.push(proyectos[nombre])
    console.log(proyectos_table_data)
  }

  //COLUMNAS DE LA TABLA
  const columnas = [
    {
      name: 'Nombre proyecto',
      selector: 'nombre',
      sortable: true
    },
    {
      name: 'Dirección',
      selector: 'direccion',
      sortable: true
    },
    {
      name: 'latitud',
      selector: 'latitud',
      sortable: true
    },
    {
      name: 'longitud',
      selector: 'longitud',
      sortable: true
    },
    {
      name: 'Capacidad',
      selector: 'capacidad',
      sortable: true
    },
  ]


  const paginacionOpciones={
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
  }

  //DATA TABLE
  return (
    <div>
      <DataTable
        columns={columnas}
        data={proyectos_table_data}
        title="Proyectos"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  );
}
