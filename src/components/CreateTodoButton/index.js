import React from 'react';
import '../../styles/index.css';
import {RiAddFill} from 'react-icons/ri';

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
      >
         <RiAddFill fill="#fff" fontSize="4rem"/>
      </button>
   );
}

export {CreateTodoButton};
