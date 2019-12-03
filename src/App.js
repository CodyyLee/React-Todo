import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import "./index.css";

const todo = [{item: "Create todo list"}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  addItem = newItemText => {
    const newItem = {
      item: newItemText
    }

    this.setState({
      todo: [...this.state.todo, newItem]
    })

    console.log(this.state.todo)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList item={this.state.todo} addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
