import React, { Component, createRef } from 'react';

// Elementos não controlados
export default class MyForm2 extends Component {
    constructor(props) {
        super(props);

        this.inputName = createRef() ;
        this.handleSubmit = this.handleSubmit.bind(this) ;

        this.state = {
            list: []
        }
    }

    handleSubmit(evt) {
        evt.preventDefault() ;
        fetch(`http://api.github.com/search/repositories?q=${this.inputName.current.value}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data.items
                }) ;
            }) ;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label
                        htmlFor="lblName2">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="lblName2"
                        placeholder="Enter the data"
                        ref={this.inputName}
                        defaultValue={"Ricardo"}
                    />
                    <hr />
                    <label
                        htmlFor="lblName2">
                        Name 
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="lblName2"
                        placeholder="Enter the data"
                        ref={this.inputName}
                    />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                    <ul>
                        {this.state.list.map(item => <li>{item.full_name}</li>)}
                    </ul>
                </div>
            </form>
        );
    };
}
