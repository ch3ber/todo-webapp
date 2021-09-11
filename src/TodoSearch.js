import React from 'react';
import './index.css';

function TodoSearch({searchValue, setSearchValue}) {
   const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
   };

   return (
      <input
         className="search"
         placeholder="Buscar..."
         value={searchValue}
         onChange={onSearchValueChange}
      />
   );
}

export {TodoSearch};
