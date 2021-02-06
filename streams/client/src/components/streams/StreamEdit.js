import React from 'react';
import { connect } from 'react-redux';
import {useEffect} from 'react';
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash';

// class StreamEdit extends React.Component {
//     componentDidMount() {
//         this.props.fetchStream(this.props.match.params.id);
//     }
//
//     render() {
//         if (!this.props.stream) {
//             return <div>Loading...</div>;
//         }
//
//         return <div>{this.props.stream.title}</div>;
//     }
// }

const StreamEdit = (props) => {

    const onSubmit = (formProps) => {
        console.log(formProps);
        props.editStream(props.match.params.id, formProps);

    }

    useEffect(() => {
        fetchStream(props.match.params.id);
    });

    if (!props.stream) {
        return <div>Loading...</div>
    }
    return(
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm
                initialValues={_.pick(props.stream, 'title', 'description')}
                onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(StreamEdit);