import React from 'react';
import { nanoid } from 'nanoid';

const Pagination = ({
  paginationPageCount,
  data,
  paginate,
  setCurrentPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(data / paginationPageCount); i++) {
    pageNumber.push(i);
  }

  const nextPage = (event, pageNumber) => {
    if (!pageNumber) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (!pageNumber) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <nav aria-label="...">
      <ul
        className="pagination"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <li className="page-item">
          <a className="page-link" href="#" onClick={prevPage}>
            Previous
          </a>
        </li>
        {pageNumber.map((numbers) => (
          <li className="page-item" key={nanoid()}>
            <a className="page-link" href="#" onClick={() => paginate(numbers)}>
              {numbers}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
