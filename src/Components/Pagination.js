import React, { useState } from 'react';
import JsonData from "./Mock_data.json";
import ReactPaginate from 'react-paginate';


function Pagination() {

    const [users, setUsers] = useState(JsonData.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pageVisited = pageNumber * usersPerPage;

    const displayUsers = users.slice(pageVisited, pageVisited + 10)
        .map((user) => {
            return (
                <div className='map-user'>
                    <h3>{user.firstName}</h3>
                    <h3>{user.lastName}</h3>
                    <h3>{user.email}</h3>
                </div>
            )
        })

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className='userData'>
            <h2>Pagination</h2>
            {/* {console.log(displayUsers)} */}
            {displayUsers}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    )
}

export default Pagination;
