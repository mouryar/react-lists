import React, { Component } from 'react';

class Validation extends Component{

    render(){
        const validationText = this.props.namelength < 5 ? "Name is short" :"Name is long enough";
        return(
            <div>{validationText}</div>
        );
    }
}
export default Validation