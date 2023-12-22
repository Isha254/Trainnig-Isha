import React, { Component } from "react";
// import { BroswerRouter as Router, Route } from 'react-router';
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import {v1 as uuid} from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos : [
      {
        id : uuid(),
        title : 'Read the book',
        completed : false
      },
      {
        id : uuid(),
        title : 'Complete the Assignment',
        completed : false
      },
      {
        id : uuid(),
        title : 'Take out the trash',
        completed : false
      }
    ]
  }


 // Toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  AddTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }


    render () {
      // console.log(this.state.todos);
        return (
          
            <div className="App">
              <div className="container">
              <Header />
              <AddTodo AddTodo={this.AddTodo} />
                <Todos  
                  todos={this.state.todos}  
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </div>
            </div>
            
        );
    }
}

export default App;
