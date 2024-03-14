import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import './App.css';
import spinner from './spinner.svg'
import { connect } from "react-redux";
import { setSearchFeild, requestRobots   } from "../actions";
import Header from "../components/Header";


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
        const { searchField, onSearchField, robots, isPending } = this.props;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return isPending

            ? <div className="spinner">
                <h1>Loading</h1>
                <img alt="spinner" src={spinner}></img>
            </div>
            :
            <div className="tc">
                <Header/>
                <SearchBox searchField={onSearchField} />
                <Scroll>
                    <CardList robots={filteredRobot} />
                </Scroll>
            </div>

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App); 