import React, { Component } from 'react';

class TextCounter extends Component {
    static defaultProps = {
        limit: 15,
        labelTextCounter: "My counter",
        idRelation: Math.random().toString() 
    }
    constructor(props) {
        super(props) ;
        this.state = {
            totalChars: 0,
            text: ""
        }
        this.handleChange = this.handleChange.bind(this) ;
    }

    handleChange ( event ) {
        const element = event.target ;
        const text = element.value
        
        if (text.length <= this.props.limit) {
            this.setState({
                totalChars: text.length,
                text
            }) ;
        }
    }

    render() {
        const { state, props } = this ;
        return (
            <div className="form-group">
                <label
                    htmlFor={props.idRelation}>
                        {props.labelTextCounter}
                </label>
                <textarea
                    className="form-control"
                    id={props.idRelation}
                    rows="2"
                    onChange={ this.handleChange }
                    value={state.text}/>
                <div>
                    <strong>Total: </strong> {state.totalChars} / {props.limit}
                </div>
            </div>
        ) ;
    }
}

export default TextCounter
