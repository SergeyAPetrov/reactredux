import React from 'react';
import { connect } from "react-redux";
import { addCourse } from '../actions/actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";

class AddCourse extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);        
        this.state = {courseTitle:''};
    }

    handleChange(event){
        this.setState({courseTitle: event.target.value});
    }

    handleClick(event){
        this.props.actions.addCourse({title: this.state.courseTitle});
    }

    render(){
        return (
            <div>
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}>
                    Add
                </button>
            </div>
        );
    }
}

AddCourse.propTypes = {
    actions : PropTypes.array.isRequired
};

const  mapDispatchToProps = dispatch => {
    return {
        actions : bindActionCreators({addCourse}, dispatch)
    };
};

export default connect(null, mapDispatchToProps)(AddCourse);