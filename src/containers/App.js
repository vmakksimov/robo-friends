import React, { Component } from "react";
import './App.css';
import { connect } from "react-redux";
import { setSearchFeild, requestRobots } from "../actions";
import MainPage from "../components/MainPage";


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestRobots: () => dispatch(requestRobots()),
        onSearchField: (event) => dispatch(setSearchFeild(event.target.value))
    }
}

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: []

    //     }

    // }



    componentDidMount() {
        this.props.onRequestRobots();
        // console.log(this.props.store.getState())
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(users => {
        //         this.setState({ 'robots': users })
        //     })
        //     .catch(error => console.log(error))
    }

    // onSearchField = (ev) => {
    //     let currentRobot = ev.target.value
    //     this.setState({ searchField: currentRobot })
    // }

    render() {

        return <MainPage {...this.props} />

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App); 