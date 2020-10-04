import React from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.paginatorWrap}>
            {pages.map(n => {
                return (props.currentPage - 3 <= n && n <= props.currentPage + 3) ?
                    <span key={n} className={props.currentPage === n ? classes.selectedPage : undefined} onClick={(e) => {
                        props.onPageChange(n)
                    }}>{n}</span> : null
            })}
        </div>
    )
};

export default Pagination;