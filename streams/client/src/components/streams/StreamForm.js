import React from 'react';
import {Field, reduxForm} from "redux-form";

class StreamForm extends React.Component {

    renderError(meta) {
        console.log(meta)
        if (meta.touched && meta.error) {
            return(
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return(
            <div className={className}>
                <label>{formProps.label}</label>
                <input
                    onChange={formProps.input.onChange}
                    value={formProps.input.value} autoComplete="off"
                />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    onSubmit = (formProps) => {
        this.props.onSubmit(formProps);

    }

    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formProps) => {
    const errors = {};

    if (!formProps.title) {
        errors.title = 'You must enter a title';
    }
    if (!formProps.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

const formWrapper = reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

export default formWrapper;