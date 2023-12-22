import React, { Component } from 'react'

class English extends Component {
    state = {
        // buttonText: 'English',
      } ;

    handleClick = () => {
        
            this.setState({ buttonText: 'This is a English Language' }); // Update state with new button text
        
        
    }

    render() { 
        return (
            <div>
                <button onClick={this.handleClick}>English</button>
                <p>{this.state.buttonText}</p>
            </div>
           
        );
    }
}
 
export default English;

