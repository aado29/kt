import React from 'react';

const PaginationList = ({ length, currentPage, onClick }) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(i + 1);
  }

  return (
    <ul style={{display: 'flex', justifyContent: 'center'}}>
      { arr.map(pageIndex =>
      <li key={pageIndex} style={{display: 'block', backgroundColor: currentPage === pageIndex ? 'cyan' : 'blue'}}>
        <button type="button" onClick={() => onClick(pageIndex)} style={{color: 'white', padding: 8}}>
          { pageIndex }
        </button>
      </li>
      )}
    </ul>
  );
}; 

const Pagination = ({ total, page, perPage, lastPage, onClick }) => {
  
  const pagesLength = Math.ceil(total / perPage );
  return (
    <div style={{padding: '20px 0'}}>
      <PaginationList length={pagesLength} currentPage={page} onClick={onClick}/>
    </div>
  );
};

export default Pagination;