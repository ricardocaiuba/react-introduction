import React, { Component } from 'react';

/*
listCategory: [
    {value: "", label: "Selecionar"},
    {value: "JavaScript", label: "JavaScript"},
    {value: "PHP", label: "PHP"},
    {value: "Ruby", label: "Ruby"},
    {value: "Python", label: "Python"},
    {value: "C#", label: "C#"}
] 
*/

export default class NewCourseForm extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            name: "",
            category: "",
            image: ""
        } ;
        this.handleChange = this.handleChange.bind(this) ;
        this.handleSubmit = this.handleSubmit.bind(this) ;
    }

    static defaultProps = {
        categories: [], 
        onSubmit: () => {}
    }

    handleSubmit(evt) {
        evt.preventDefault() ;
        const newCourse = this.state ;

        if (newCourse.name && newCourse.image && newCourse.category) {
            this.props.onSubmit(newCourse) ;
            this.setState({
                name: "",
                image: ""
            }) ;
        }
    }

    handleChange(evt) {
        const { target } = evt,
            { name, value } = target ;
        
        this.setState({
            [name]: value
        }) ;
    }

    render() {
        const { props, state } = this ;

        return (
            <form className="course-form" onSubmit={this.handleSubmit}>
                <label>
                    <span>Nome: </span>
                    <input
                        name="name"
                        value={state.name}
                        onChange={this.handleChange} />
                </label>
                <label>
                    <span>Imagem: </span>
                    <input
                        name="image"
                        value={state.image}
                        onChange={this.handleChange} />
                </label>
                <label>
                    <span>Categoria: </span>
                    <select
                        name="category"
                        value={state.category}
                        onChange={this.handleChange}>
                            {
                                props.categories.map(item => 
                                        <option key={item.id} value={item.name}>{item.name}</option>
                                    )
                            }
                    </select>
                </label>
                <button
                    type="submit"
                    >
                        Criar Curso
                </button>
            </form>
        );
    };
}
