import React, {PureComponent} from "react";



class CounterButton extends PureComponent {
    constructor(){
        super()

        this.state = {
            count : 0
        }

    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if (this.state.count !== nextState.count){
    //         return true
    //     } else {
    //         return false
    //     }
      
    // }

    changeCounter = () => {
        this.setState(state => {
           return {count: state.count + 1}
        })
    }

    render(){
        return (
            <button id="counter" color={this.props.color} onClick={this.changeCounter} style={{color: this.props.color}}>Count : {this.state.count}</button>
        )
    }
}

export default CounterButton