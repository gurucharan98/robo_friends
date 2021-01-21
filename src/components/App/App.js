import React,{Component} from 'react';
import Cardlist from '../Cardlist/Cardlist';
import {robots} from '../../robots.js'
import SearchBox from '../SearchBox/SearchBox.js'

class App extends Component{
    constructor(){
        super();
        this.state={
            robots:robots,
            searchfield: ''
        }
    }
    onSearchChange=(event)=>{
        this.setState({
            searchfield: event.target.value
        });

    }
    render(){
        const filterRobot=this.state.robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(
                this.state.searchfield.toLowerCase())
                }
            );
    return(
        <div className="tc">
            <h1>Robots</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Cardlist robots={filterRobot}/>
        </div>
    );
}
}
export default App;