import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchText, setSearchText}) {

  return (
    <input className="TodoSearch" 
      placeholder="Search here"
      value={searchText}
      onChange={event => setSearchText(event.target.value)} />
  );
}

export { TodoSearch }; 