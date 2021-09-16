import React from 'react';
import { TodoContex } from '../../TodoContex';
import '../../styles/index.css';

function TodoSearch() {
   const {
      searchValue,
      setSearchValue,
   } = React.useContext(TodoContex);

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
