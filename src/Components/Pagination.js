import React, { useState } from 'react';
import JsonData from "./Mock_data.json";
import ReactPaginate from 'react-paginate';


function Pagination() {

    const [users, setUsers] = useState(JsonData.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pageVisited = pageNumber * usersPerPage;

    // { console.log(users) }

    const displayUsers = users.slice(pageVisited, pageVisited + 10)


    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className='userData'>

            <h2>Pagination</h2>

            {/* {console.log(displayUsers)} */}

            <div className='map-user'>

                <div className='serial-number'>

                    <h3>S.No.</h3>

                    {displayUsers.map((user) => (
                        <p>{user.id}</p>
                    ))}

                </div>

                <div className='serial-number'>

                    <h3>First Name</h3>

                    {displayUsers.map((user) => (
                        <p>{user.firstName}</p>
                    ))}

                </div>

                <div className='serial-number'>

                    <h3>Last Name</h3>

                    {displayUsers.map((user) => (
                        <p>{user.lastName}</p>
                    ))}

                </div>

                <div className='serial-number'>

                    <h3>Email</h3>

                    {displayUsers.map((user) => (
                        <p>{user.email}</p>
                    ))}

                </div>

            </div>


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
        </div >
    )
}

export default Pagination;
