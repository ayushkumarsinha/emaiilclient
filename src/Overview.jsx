import React, { Component } from 'react';
import Dashboard from './components/dashboard.jsx';
import './styles/common.css';

class Overview extends Component{
    render () {
        return(
            <React.Fragment>
                <Dashboard/>
            </React.Fragment>
        );
    }
}

export default Overview;