import React from "react";
import MaterialTable from "material-table";

function CreateProjectComponent(props) {
  return (
    <div class="row">
      <div class="input-field col s2">
        <input
          type="text"
          id="data"
          class="validate"
          defaultValue={props.timee}
          className={props.name}
          onChange={props.handleChange}
        />
        <label htmlFor="data"></label>
      </div>

      <div class="input-field col s2">
        <input
          type="tel"
          id="temp_z"
          class="validate"
          className={props.name}
          onChange={props.handleChange}
        />
        <label htmlFor="temp_z">Temperatura</label>
      </div>
      <div class="input-field col s2">
        <input
          id="Vw"
          type="tel"
          class="validate"
          className={props.name}
          onChange={props.handleChange}
        />
        <label htmlFor="Vw">Vw</label>
      </div>
      <div class="input-field col s2">
        <input
          type="tel"
          id="zach"
          class="validate"
          className={props.name}
          onChange={props.handleChange}
        />
        <label htmlFor="zach">Zachmurzenie</label>
      </div>
    </div>
  );
}

export default CreateProjectComponent;
