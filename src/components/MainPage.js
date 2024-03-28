import './MainPage.css'
import React, { Component } from "react";
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import spinner from '../containers/spinner.svg'
import Header from './Header';

class MainPage extends Component {
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
    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
    }
        render() {
            const { onSearchField, isPending, robots} = this.props;
            return isPending

                ? <div className="spinner">
                    <h1>Loading</h1>
                    <img alt="spinner" src={spinner}></img>
                </div>
                :
                <div className="tc">
                    <Header />
                    <SearchBox searchField={onSearchField} />
                    <Scroll>
                        <CardList robots={this.filteredRobots()} />
                    </Scroll>
                </div>

        }

    }

export default MainPage;