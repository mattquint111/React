import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // callback function to set users coord in state
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                });
            },
            // handle any error message returned
            (err) => {
                this.setState({
                    errorMessage: err.message,
                });
            }
        );
    }

    compo

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return (
            <Spinner message="waiting for location..."/>
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
