import React from "react";
import MaterialTable from "material-table";
import Workbook from "react-excel-workbook";
import SaveIcon from "@material-ui/icons/Save";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { addToDataBase } from "../../store/actions/projectActions";

import CreateExcelFile from "./CreateExcelFile";
import { Component } from "react";
import DynamicSort from "./DynamicSort";

// const ExcelSummary = (projects) => {
//   console.log("here in excel");
//   console.log(projects);

//   let [state, setState] = React.useState({
//     rowsAll: [projects.object],

//     columns: [
//       { title: "Data", field: "data", defaultSort: "asc", type: "time" },
//       { title: "Temperatura zewnetrzna", field: "temp_z" },
//       { title: "Vw", field: "Vw" },
//       { title: "Zachmurzenie", field: "zach" },
//     ],
//   });

//   var tabela = JSON.parse(JSON.stringify(state.rowsAll));

//   var tableToDataBase = JSON.parse(JSON.stringify(state.rowsAll));
//   delete tableToDataBase[0]["id"];

//   var tableAdd = [];
//   Object.keys(tabela[0]).forEach(function (item) {
//     tableAdd.push(tabela[0][item]);
//   });
//   tableAdd.splice(0, 1);

//   const loc = tableAdd.slice().sort();
//   loc.sort(DynamicSort("data"));

//   //if (tableAdd) {
//   return (
//     <div
//       style={{
//         marginLeft: "5%",
//         marginRight: "5%",
//         marginTop: "2%",
//         marginBottom: "2%",
//         //height: "80px",
//         textAlign: "center",
//         backgroundColor: "#6f2232",
//       }}
//     >
//       <MaterialTable
//         title="Dalkia data"
//         options={{
//           sort: true,
//         }}
//         columns={state.columns}
//         data={tableAdd}
//         editable={{
//           onRowAdd: (newData) =>
//             new Promise((resolve) => {
//               setTimeout(() => {
//                 resolve();
//                 setState((prevState) => {
//                   const data = [...prevState.data];
//                   data.push(newData);
//                   return { ...prevState, data };
//                 });
//               }, 600);
//             }),
//           onRowUpdate: (newData, oldData) =>
//             new Promise((resolve) => {
//               setTimeout(() => {
//                 resolve();
//                 if (oldData) {
//                   setState((prevState) => {
//                     const data = [...prevState.data];
//                     data[data.indexOf(oldData)] = newData;
//                     return { ...prevState, data };
//                   });
//                 }
//               }, 600);
//             }),
//           onRowDelete: (oldData) =>
//             new Promise((resolve) => {
//               setTimeout(() => {
//                 resolve();
//                 setState((prevState) => {
//                   const data = [...prevState.data];
//                   data.splice(data.indexOf(oldData), 1);
//                   return { ...prevState, data };
//                 });
//               }, 600);
//             }),
//         }}
//       />
//       <div
//         style={{
//           marginTop: "10px",
//           height: "50px",
//           textAlign: "center",
//           // backgroundColor: "#6f2232",
//         }}
//       >
//         <Workbook
//           filename="Dane.xlsx"
//           element={
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<SaveIcon />}
//               onClick={projects.addToDataBase(tabela[0])}
//               style={{
//                 width: "100%",
//                 height: "100%",
//               }}
//             >
//               ZAPISZ DANE!
//             </Button>
//           }
//         >
//           <Workbook.Sheet data={loc} name="Dane">
//             <Workbook.Column label="Data" value="data" />
//             <Workbook.Column label="temp_z" value="temp_z" />
//             <Workbook.Column label="Vw" value="Vw" />
//             <Workbook.Column label="zach" value="zach" />
//           </Workbook.Sheet>
//         </Workbook>
//       </div>
//     </div>
//   );
//   //}
// };

export class ExcelSummary extends Component {
  componentDidMount() {}
  constructor(props) {
    super(props);
    // this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      rowsAll: [this.props.object],

      columns: [
        { title: "Data", field: "data", defaultSort: "asc", type: "time" },
        { title: "Temperatura zewnetrzna", field: "temp_z" },
        { title: "Vw", field: "Vw" },
        { title: "Zachmurzenie", field: "zach" },
      ],
    };
  }

  render() {
    console.log("here in excel");
    console.log(this.props);

    var tabela = JSON.parse(JSON.stringify(this.state.rowsAll));

    var tableToDataBase = JSON.parse(JSON.stringify(this.state.rowsAll));
    delete tableToDataBase[0]["id"];

    var tableAdd = [];
    Object.keys(tabela[0]).forEach(function (item) {
      tableAdd.push(tabela[0][item]);
    });
    tableAdd.splice(0, 1);

    const loc = tableAdd.slice().sort();
    loc.sort(DynamicSort("data"));

    this.props.addToDataBase(tabela[0]);

    return (
      <div
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "2%",
          marginBottom: "1%",
          textAlign: "center",
        }}
      >
        <MaterialTable
          title="Dalkia data"
          options={{
            sort: true,
          }}
          columns={this.state.columns}
          data={tableAdd}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    this.setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
        <div
          style={{
            marginTop: "10px",
            height: "50px",
            textAlign: "center",
            // backgroundColor: "#6f2232",
          }}
        >
          <CreateExcelFile dataToSave={loc} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDataBase: (project) => dispatch(addToDataBase(project)),
  };
};

export default connect(null, mapDispatchToProps)(ExcelSummary);
