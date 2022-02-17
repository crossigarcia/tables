import React from "react";
import "./pagination.styles.scss";

export const Pagination = (props) => {
   return (
      <div className="pagination">
         <button type="button" onClick={(event) => props.handlePagination(event)} name="pagination-back-btn">&#60;</button>
         <p>pagination</p>
         <button type="button" onClick={(event) => props.handlePagination(event)} name="pagination-forward-btn">&#62;</button>
      </div>
   )
}