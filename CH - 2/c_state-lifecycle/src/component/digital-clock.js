import React, { Component } from 'react';
import './digital-clock.css';



class Clock extends Component {
  
    constructor(props) {
            super(props);
            this.state = {
            time: new Date().toLocaleTimeString(),
            };
          }


    componentDidMount() {
                // Update the time every second
                this.intervalID = setInterval(() => {
                  this.setState({
                    time: new Date().toLocaleTimeString(),
                  });
                }, 1000);
              }

        componentWillUnmount() {
                    // Clear the interval when the component is unmounted
                    clearInterval(this.intervalID);
                  }
                


    render() { 
        return (
            <div className='clock'>
                <p>This is a digital Clock</p>
                <h2>{this.state.time}</h2>
            </div>
        );
    }
}



export default Clock;

