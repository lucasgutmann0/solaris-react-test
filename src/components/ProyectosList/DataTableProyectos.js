// import React, { Component } from "react";
// import DataTable from "react-data-table-component";
// import Label from "../forms/Label";


// export default class DataTableProyectos extends Component {
//   constructor() {
//     super();
//     this.state = {
//       proyectos: {}
//     };
//   }

//   fetchData() {
//     fetch("http://127.0.0.1:8000/solaris_api/proyectos/")
//       .then((response) => {
//         return response.json();
//       })
//       .then((response) => {
//         this.setState({
//           proyectos: response
//         });
//         console.log(proyectos);
//       });
//   }

//   componentDidMount() {
//     this.fetchData();
//   }
//   render() {
    
//     //DATA TABLE - DATA
//     const emptyData = this.state.proyectos; //INFO TABLA
//     const proyectos_table_data = [];

//     for (let nombre in emptyData) {
//       proyectos_table_data.push(emptyData[nombre]);
//       console.log(proyectos_table_data);
//     }

//     //COLUMNAS DE LA TABLA
//     const columnas = [
//       {
//         name: "Nombre proyecto",
//         selector: "nombre",
//         sortable: true,
//       },
//       {
//         name: "Dirección",
//         selector: "direccion",
//         sortable: true,
//       },
//       {
//         name: "latitud",
//         selector: "latitud",
//         sortable: true,
//       },
//       {
//         name: "longitud",
//         selector: "longitud",
//         sortable: true,
//       },
//       {
//         name: "Capacidad",
//         selector: "capacidad",
//         sortable: true,
//       },
//     ];

//     const paginacionOpciones = {
//       rowsPerPageText: "Filas por pagina",
//       rangeSeparatorText: "de",
//       selectAllRowsItem: true,
//       selectAllRowsItemText: "Todos",
//     };

//     //DATA TABLE
//     return (
//       <div>
//         <DataTable
//           columns={columnas}
//           data={proyectos_table_data}
//           title="Proyectos"
//           pagination
//           paginationComponentOptions={paginacionOpciones}
//           fixedHeader
//           fixedHeaderScrollHeight="600px"
//         />
//       </div>
//     );
//   }
// }
