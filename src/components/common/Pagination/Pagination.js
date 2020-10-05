import React, {useState} from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  let portionCount = Math.ceil(pagesCount / props.portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let portionLeftNumber = (portionNumber - 1) * props.portionSize + 1;
  let portionRightNumber = portionNumber * props.portionSize;

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.paginatorWrap}>
      {portionNumber > 1 &&
      <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>-{props.portionSize}</button>}
      {pages
        .filter(n => n >= portionLeftNumber && n <= portionRightNumber)
        .map(n => {
          return <span key={n} className={props.currentPage === n ? classes.selectedPage : undefined} onClick={(e) => {
            props.onPageChange(n)
          }}>{n}</span>
        })}
      {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}>+{props.portionSize}</button>}
    </div>
  )
};

export default Pagination;