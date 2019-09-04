import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { title, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>

        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{title}</div>
        </div>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); 
          onRemove(id)}
        }>&times;</div>
        {
          checked && (<div className="check-mark"></div>)
        }
      </div>
    );
  }
}

export default TodoItem;
