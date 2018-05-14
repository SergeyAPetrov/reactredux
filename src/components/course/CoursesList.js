import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class CoursesList extends React.Component{
    render(){
        return (
            <div>
                <ul>
                 {this.props.courses.map((course, index) => 
                    (<li key={index}>{course.title}</li>))}
                </ul>
            </div>
        );
    }
}

CoursesList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            title:PropTypes.string.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => {
    return {
        courses : state.courses
    };
};

export default connect(mapStateToProps)(CoursesList);