import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("'prevProps", prevProps);
    console.log("prevState", prevState);
    if(prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server 
    }
  }

  
  componentWillUnmount() {
    console.log("Counter - unmount")
  }

  doHandleIncrement = () => { 
    this.handleIncement({id:1});
  };


  render() {
    let classes = "badge badge-secondary m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    console.log('Counter - Rendered');

    return (
      <div>  
        <span className={classes}>{this.formatCount()}</span>
        <button 
        onClick={() => this.props.onIncrement(this.props.counter)} 
        className="btn btn-secondary btn-sm">
        Increment
        </button>
      
        <button 
        onClick={() => this.props.onDelete(this.props.counter.id)} 
        className="btn btn-danger btn-sm m-2">
            Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;