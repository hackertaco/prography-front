import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove, onChange, onKeyPress, onClick } = this.props;

    const todoList = todos.map(
      ({id, title, checked}) => (
        <TodoItem
          id={id}
          title={title}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
        <div className="todolist">{todoList}</div>

    );
  }
}

export default TodoItemList;
