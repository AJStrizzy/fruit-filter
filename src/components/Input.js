import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super();
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <label htmlFor='fruit-filter'>Filter These Truits: </label>
                <input type='text' name='fuit-filter' />
            </div>
         );
    }
}
 
export default Input;