import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';



class App extends Component {



  id = 5

  state = {
    input: '',
    todos: [
      {
  "title": "프로그라피 지원하기",
  "id": 1,
  "status": "complete"
},
{
  "title": "프로그라피 과제 준비하기",
  "id": 2,
  "status": "todo"
},
{
  "title": "프로그라피 친구들한테 알려주기",
  "id": 3,
  "status": "complete"
},
{
  "title": "사랑해요 프로그라피",
  "id": 4,
  "status": "todo"
}
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleCreate = () => {
  const { input, todos } = this.state;
  this.setState({
    input: '',
    todos: todos.concat({
      id: this.id++,
      title: input,
      checked: false
    })
  });
}

handleKeyPress = (e) => {

  if(e.key === 'Enter') {
    this.handleCreate();
  }
}
handleToggle = (id) => {
  const { todos } = this.state;
  const index = todos.findIndex(todo => todo.id === id);
  const selected = todos[index];
  const nextTodos = [...todos];

  nextTodos[index] = {
    ...selected,
    checked: !selected.checked
  };

  this.setState({
    todos: nextTodos
  });
}
handleRemove = (id) => {
  const { todos } = this.state;
  this.setState({
    todos: todos.filter(todo => todo.id !== id)
  });
}



  render(){

    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (

    <TodoListTemplate form={(
    <Form
      value={input}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      onCreate={handleCreate}
    />
    )}>
    <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
    </TodoListTemplate>
);
};
}


export default App;
