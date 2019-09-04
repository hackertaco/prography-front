import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, baby, children}) => {
  return (
    <main className="todo-list-template">

      <section className="form-wrapper">
        {form}
      </section>

      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;
