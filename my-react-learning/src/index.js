import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import ComponentDetails from "./ComponentDetails";
import ApprovalCard from "./ApprovalCard";

// import App from './App';
// import reportWebVitals from './reportWebVitals';

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: '' };
    //
    // }

    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        console.log("componentDidMount");
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({lat : position.coords.latitude})
            },
            (err) => {
                console.log(err);
                this.setState({errorMessage : err.message})
            }
        );
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        if(!this.state.errorMessage && !this.state.lat) {
            return <Spinner message="please answer request"/>
        }
    }

    render() {
        console.log("render");
        // return (
        //     <div className="ui container comments">
        //         <ApprovalCard>
        //             <ComponentDetails author="Sam" timeAgo="Today at 4:30PM" content="Nice blog is good!" avatar="/smile.png" />
        //         </ApprovalCard>
        //         <ApprovalCard>
        //             <ComponentDetails author="Pasha" timeAgo="Today at 4:15PM" content="Nice blog is bed!" avatar="/smile.png" />
        //         </ApprovalCard>
        //         <ApprovalCard>
        //             <ComponentDetails author="Sasha" timeAgo="Today at 4:45PM" content="Nice blog is normal!" avatar="/smile.png" />
        //         </ApprovalCard>
        //     </div>
        // );
        return(
            <div className='border ren'>
                {this.renderContent()}
            </div>
        )
    }
}


// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
