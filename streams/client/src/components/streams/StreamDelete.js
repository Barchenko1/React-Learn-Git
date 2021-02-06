import React from 'react';
import Modal from "../../Modal";
import history from "../../history";
import { useEffect } from 'react';
import { fetchStream, deleteStream} from "../../actions";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        const {id} = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )

    };

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`
    }

    render() {
        return(
            <div>
                StreamDelete
                <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

// const StreamDelete = (props) => {
//
//     useEffect(() => {
//         props.fetchStream(props.match.params.id);
//     })
//
//     const renderActions = () => {
//         const {id} = props.match.params;
//         console.log(id);
//         return (
//             <React.Fragment>
//                 <button onClick={() => props.deleteStream(id)} className="ui button negative">Delete</button>
//                 <Link to="/" className="ui button">Cancel</Link>
//             </React.Fragment>
//         )
//
//     };
//
//     const renderContent = () => {
//         if (!props.stream) {
//             return 'Are you sure you want to delete this stream?'
//         }
//         return `Are you sure you want to delete this stream with title: ${props.stream.title}?`
//     }
//
//     return(
//         <div>
//             StreamDelete
//             <Modal
//                 title="Delete Stream"
//                 content={renderContent()}
//                 actions={renderActions()}
//                 onDismiss={() => history.push('/')}
//             />
//         </div>
//     )
// }

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream})(StreamDelete);