import React from "react";
import { getPagesArray } from "../../utils/page";
import MyButton from "../button/MyButton";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return ( 
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <MyButton
                    className={page === p ? 'page page__current' : 'page'}
                    onClick={() => changePage(p)}
                    key={p}

                >{p}</MyButton>
            )}
        </div>
    )
}

export default Pagination