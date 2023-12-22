import React, { Component } from 'react'

import './Language.css'

import English from './English';
import Spanish from './Spanish';
import Hindi from './Hindi';




class Language extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h2>Languages</h2>
                <English/>
                <Spanish/>
                <Hindi/>
            </div>
        );
    }
}
 
export default Language;