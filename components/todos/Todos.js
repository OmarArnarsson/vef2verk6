import React from 'react';

import Button from '../button/Button';
import TodoItem from '../todo-item/TodoItem';
import Form from '../form/Form';

import './Todos.css';

// Listi af verkefnum á forsíðu
export default function Todos(props) {
  // console.log(props);
  const { initTodos } = props;

  async function getAll(){
    
  }

  return (

    <React.Fragment>
      <Button children="Sýna allt" onClick={getAll}/>

      <div className="todos">
      {initTodos.map((item, i) => (
              <TodoItem key={i} todo={item} id={initTodos[i].id} />
      ))}
      </div>
      
      <Form />
    </React.Fragment>
  );
}