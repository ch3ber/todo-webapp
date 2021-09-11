import React from 'react';
import './index.css';

function TodoSearch(props) {
   const estado = React.useState();
   const onSearchValueChange = (event) => {
      console.log(event.target.value);
   }
   return (
      <React.Fragment>
         <input
            className="search"
            placeholder="Minecraft"
            onChange={onSearchValueChange}
         />
         {props.children}
      </React.Fragment>
   );
}

export {TodoSearch};
