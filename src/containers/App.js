import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import './App.css';
import spinner from './spinner.svg'
import { connect } from "react-redux";
import { setSearchFeild } from "../actions";


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchField: (event) => dispatch(setSearchFeild(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }

    }



    componentDidMount() {
        console.log(this.props.store.getState())
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                this.setState({ 'robots': users })
            })
            .catch(error => console.log(error))
    }

    onSearchField = (ev) => {
        let currentRobot = ev.target.value
        this.setState({ searchField: currentRobot })
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return !robots.length

            ? <div className="spinner">
                <h1>Loading</h1>
                <img alt="spinner" src={spinner}></img>
            </div>
            :
            <div className="tc">
                <h1 className="f1">Robots App</h1>
                <SearchBox searchField={this.onSearchField} />
                <Scroll>
                    <CardList robots={filteredRobot} />
                </Scroll>
            </div>

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App); 