import React from 'react';

function TodoSearch(props) {
   return (
      <React.Fragment>
         <input placeholder="Minecraft" />
         {props.children}
      </React.Fragment>
   );
}

export {TodoSearch};
