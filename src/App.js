import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Data } from "./components/Data";
import "./App.css";

function App() {
  const [users, setUsers] = useState(Data.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const usersVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(usersVisited, usersVisited + usersPerPage)
    .map((user) => {
      return (
        <div key={user.id} className="user">
          <h3>{user.fname}</h3>
          <h3>{user.lname}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <h1>USERS</h1>
      {displayUsers}
      <ReactPaginate
        previousLabel="Previous"
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationButtons"
        previousLinkClassName="previousButton"
        nextLinkClassName="nextButton"
        activeClassName="paginationActive"
        disabledClassName="paginatiionDisabled"
      />
    </div>
  );
}

export default App;
