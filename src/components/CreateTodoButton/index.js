import React from 'react';
import '../../styles/index.css';

function CreateTodoButton() {
   const onClickButton = (msg) => {
      alert(msg);
   }
   return (
      <button
         className="button"
         onClick={() => onClickButton('Aqui va el modal')}
      >+</button>
   );
}

export {CreateTodoButton};
