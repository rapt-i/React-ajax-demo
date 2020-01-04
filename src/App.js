import React from 'react';
import './App.css';
import Axios from "axios";

export default class App extends React.Component {
    constructor(porp) {
        super(porp);
        this.state = {
            local: "http://127.0.0.1:5000",
            aws: "http://52.68.6.85/blogs/ondo",
            tmp: NaN
        }
    }

    componentDidMount() {
        Axios
            .get(this.state.aws)
            .then(response => {
                console.log(response);
                this.setState({tmp: response.data})
            });
    };

    reload() {
        setTimeout(() => {
            Axios
                .get(this.state.aws)
                .then(response => {
                    this.setState({tmp: response.data})
                });
        }, 1000);
    }

    render() {
        this.reload();
        return (
            <div className={"App"}>
                {this.state.tmp}
            </div>
        )
    }

}

