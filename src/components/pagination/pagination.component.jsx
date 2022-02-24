import React from "react";
import "./pagination.styles.scss";

export const Pagination = (props) => {

   return (
      <div className="pagination">
         <button type="button" onClick={(event) => props.handlePagination(event)} name="pagination-back-btn" className="pagination-btn" disabled={props.startIndex === 0}>&#60;</button>
         <p className="pagination-text">{props.startIndex + 1} - {props.endIndex + 1}</p>
         <button type="button" onClick={(event) => props.handlePagination(event)} name="pagination-forward-btn" className="pagination-btn" disabled={props.endIndex === props.total}>&#62;</button>
      </div>
   )
}