import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    constructor(props){
        super(props);
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
        this.state = { lat: null, errorMessage: ""};
    }
    render(){
        if (this.state.errorMessage && !this.state.lat){
                return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>Loading!</div>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));