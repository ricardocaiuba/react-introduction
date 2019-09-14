import React, { Component } from 'react';
import "./App.css" ;

import { CourseService } from "./services/CourseService" ;
import { CategoryService } from "./services/CategoryService" ;

import Course from "./components/Course" ;
import NewCourseForm from './components/NewCourseForm';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*courses: [
                {
                    id: 1,
                    name: "React",
                    category: "JavaScript",
                    image: "https://cdn.auth0.com/blog/react-js/react.png"
                },
                {
                    id: 2,
                    name: "Angular",
                    category: "JavaScript",
                    image: "https://miro.medium.com/max/2800/1*J_-vtvcqV1-v14WqkPWhiQ.png"
                }
            ]*/
            courses: [],
            listCategories: []
        } ;
        this.remove = this.remove.bind(this) ;
        this.add = this.add.bind(this) ;
        this.startData = this.startData.bind(this) ;

        this.startData() ;
    }

    async startData() {
        debugger ; 
        const [courses, listCategories] = await Promise.all([
            CourseService.list(),
            CategoryService.list()
        ]) ;

        this.setState({
            courses,
            listCategories
        })
    }

    async add(course) {
        const {courses} = this.state ;
        //const newCourse = Object.assign({}, course, {id: (Date.now())}) ;
        const newCourse = await CourseService.create(course) ;
        courses.push(newCourse) ;
       
        this.setState({
            courses
        })
    }

    async remove(courseId)  {
        const { courses } = this.state,
            courseIndex = courses.findIndex(course => course.id === courseId) ;
        await CourseService.remove(courseId) ;    
        courses.splice(courseIndex, 1) ;

        this.setState({
            courses
        }) ;

    }

    render() {
        const { state } = this ;
        return (
            <div className="container">
                <NewCourseForm
                    onSubmit={this.add}
                    categories={state.listCategories}
                />
                <ul className="courses-list">
                    {
                        state.courses.map(course => <Course course={course} onRemove={this.remove}/>) 
                    }
                </ul>
            </div>
        );
    }
}

