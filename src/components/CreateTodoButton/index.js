import React from 'react';
import '../../styles/index.css';

function CreateTodoButton(props) {

   const onClickButton = () => {
      props.setOpenModal(prevState => !prevState);
      document.getElementById('modal').classList.toggle('modal--show');
      document.querySelector('.button').classList.toggle('button--modal');
      document.querySelector('#root').classList.toggle('blur');
   }

   return (
      <button
         className="button"
         onClick={() => onClickButton()}
      >+</button>
   );
}

export {CreateTodoButton};
