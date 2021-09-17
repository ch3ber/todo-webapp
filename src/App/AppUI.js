import React from 'react';
import {TodoContex} from '../TodoContex';
import {TodoCounter} from '../components/TodoCounter';
import {TodoSearch} from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import {TodoItem} from '../components/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from '../components/TodoForm';
import {Skeleton} from './skeleton';

function AppUI() {
   const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      toggleComplete,
   } = React.useContext(TodoContex);

   return (
      <React.Fragment>
         <TodoCounter />
         <TodoSearch />

         <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <Skeleton/>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

            {searchedTodos.map(todo => (
               <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                  toggleComplete={() => {toggleComplete(todo.text)}}
               />
            ))}
         </TodoList>

         {!!openModal && (
            <Modal>
               <TodoForm />
            </Modal>
         )}


         <CreateTodoButton setOpenModal={setOpenModal} />
      </React.Fragment>
   );
}

export { AppUI };
