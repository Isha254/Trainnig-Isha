import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {

state = {   
    counters : [
        {id : 1, value: 0},
        {id : 2, value: 0},
        {id : 3, value: 0},
        {id : 4, value: 0}
    ]
}; 

constructor() {
  super();
  console.log('App - Constructor');
  // this.state = this.props.something;
}

componentDidMount() {
  // Ajax call
  console.log('App - Mounted');

}

handleIncrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}; 
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
}

handleReset = () => {
 const counters = this.state.counters.map(c => {
    c.value = 0;
    return c;
   });
   this.setState({ counters});
}

handleDelete = (counterId) => {
    // console.log('Event Handler Called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });

}
 
  render(){
    console.log('App - Rendered');
    
  return (
    <React.Fragment>

   <Navbar 
      totalCounters={this.state.counters.filter(c => c.value > 0).length}
      />
   <main className="container">
    <Counters 
    counters = {this.state.counters}
      onReset = {this.handleReset}
      onIncrement = {this.handleIncrement}
      onDelete = {this.handleDelete}
    />
   </main>

   </React.Fragment>
  );
 }  
  
}

export default App;
