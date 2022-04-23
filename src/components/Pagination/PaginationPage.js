import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationPage = ({ activePage, setActivePage, data, limitUsers }) => {
  let items = [];
  let active = activePage;
  const totalPagesCount = Math.ceil(data.length / limitUsers);

  const setActivePageNumber = (number) => setActivePage(number);

  for (let number = 1; number <= totalPagesCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActivePageNumber(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination className="justify-content-center">{items}</Pagination>
    </div>
  );
};

export default PaginationPage;
