import React from "react";
import "./table.styles.scss";
import Button from '@mui/material/Button';

const Table = (props) => {
   
   return (
      <table className="table">
         <thead>
            <tr className="table-header-row">
               {props.thead.map(heading => <th key={heading}>{heading}</th>)}
            </tr>
         </thead>
         <tbody>
            {props.tbody.map(data => 
               <tr key={data.id} className="table-data-row">
                  <td>{data.name}</td>
                  <td>{data.house}</td>
                  <td>{data.ancestry}</td>
                  <td>{data.patronus}</td>
                  <td><Button variant="outlined" color="error" onClick={() => props.handleDelete(data.id, data.name)}>delete</Button></td>
               </tr> 
            )}
         </tbody>
      </table>
   )
}

export default Table;