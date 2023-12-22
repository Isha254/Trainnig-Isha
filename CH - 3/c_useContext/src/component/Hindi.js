import React, { Component } from 'react'

class Hindi extends Component {
    state = {
        // buttonText: 'Hindi',
      } ;

    handleClick = () => {
        
            this.setState({ buttonText: 'This is a Hindi Language' }); // Update state with new button text
        
        
    }

    render() { 
        return (
            <div>
                <button onClick={this.handleClick}>Hindi</button>
                <p>{this.state.buttonText}</p>
            </div>
           
        );
    }
}
 
export default Hindi;

