import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
    constructor() {
        super()
        this.state = {
            'robots' : robots,
            'searchField' : ''
        }
        
    }

    onSearchField = (ev) => {
        let currentRobot = ev.target.value
        this.setState({searchField: currentRobot})
    }

    render (){
        const filteredRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        console.log('down')
        console.log(this.state.robots)
        console.log(filteredRobot)
        return (
            <div className="tc">
                <h1 className="tc">Robots App</h1>
                <SearchBox searchField={this.onSearchField}/>
                <CardList robots={filteredRobot}/>
            </div>
        )
    }
    
}

export default App;