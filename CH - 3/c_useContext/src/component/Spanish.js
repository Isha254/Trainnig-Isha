import React, { Component } from 'react'

class Spanish extends Component {
    state = {  
         // buttonText: 'Spanish',
    } 

    
    handleClick = () => {
        
        this.setState({ buttonText: 'This is a Spanish Language' }); // Update state with new button text   
}
    render() { 
        return (
            <div>
               <button onClick={this.handleClick}>Spanish</button>
                <p>{this.state.buttonText}</p>
            </div>
        );
    }
}
 
export default Spanish;



