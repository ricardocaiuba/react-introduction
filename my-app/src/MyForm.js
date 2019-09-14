import React, { Component } from 'react';

export default class MyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            message: "",
            fruit: "orange"
        };

        this.fruits = [
            {"name": "", "value": ""},
            {"name": "Apple", "value": "apple"},
            {"name": "Banana", "value": "banana"},
            {"name": "Orange", "value": "orange"},
            {"name": "Strawberry", "value": "strawberry"},
        ] ;

        

        this.handleChange = this.handleChange.bind(this);
    }

    /*handleChange = field => e => {
        this.setState({
            [field]: e.target.value
        });
    } ;
    */

    handleChange(e) {
        const target = e.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name ; 
        
       this.setState({
            [name]: value
        });
    } ;    

    render() {
        const { state } = this;
        return (
            <form>
                <div className="form-group">
                    <label
                        htmlFor="lblName">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={state.name}
                        onChange={this.handleChange}
                        id="lblName"
                        placeholder="Enter the data"
                    />
                    <label
                        htmlFor="txtArea">
                            Message
                    </label>
                    <textarea
                        className="form-control"
                        id="txtArea"
                        name="message"
                        onChange={this.handleChange}
                        value={ state.message }
                        rows="2"
                    />
                    <label
                        htmlFor="selectFruit"
                    >
                        Fruit:
                    </label>
                    <select
                        id="selectFruit"
                        className="form-control"
                        value={state.fruit}
                        name="fruit"
                        onChange={this.handleChange}
                    >
                        {
                            this.fruits.map(fruit => <option
                                key={fruit.value}
                                value={fruit.value}>
                                    {fruit.name}
                                </option>) 
                        }
                    </select>


                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                </button>
                </div>
            </form>
        );
    };
}
