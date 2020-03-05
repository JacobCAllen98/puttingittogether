import React, { Component } from "react";

class MyNewComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            ageCount: this.props.age
        }
    }
    handleClick = () => {
        this.setState({
            ageCount: this.state.ageCount+1
        })
    }
    render() {
        return(
            <div>
                <h1>{ this.props.lastName }, { this.props.firstName }</h1>
                <h4>Age: { this.state.ageCount }</h4>
                <h4>Hair Color: { this.props.hairColor }</h4>
                <button onClick={ this.handleClick }>Birthday!</button>
            </div>
        )
    }
}

export default MyNewComponent;