import React from 'react';
import CoursesList from './CoursesList';
import AddCourse from "./AddCourse";

class CoursesPage extends React.Component{
    render(){
        return (
            <div>
                <h1>Courses</h1>
                <CoursesList/>
                <AddCourse />
            </div>
        );
    }
}

export default CoursesPage;