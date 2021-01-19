import React from 'react';
import GetAHouse from './GetAHouse'
import SearchSomeone from './SearchSomeone'
import ListOfSpells from './ListOfSpells'
import './SideBar.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "GetAHouse"
        }
    }
    render() {
        var navSideBar = [
            <div className="sidenav">
                <img className="harryPotterTitle" src="HarryPotterTitle.png" />
                <button onClick={() => this.setState( {page: "GetAHouse"} )} >Get a house</button>
                <button onClick={() => this.setState( {page: "SearshSomeone"} )} >Searsh someone</button>
                <button onClick={() => this.setState( {page: "ListOfSpells"} )} >List of spell</button>
            </div>
        ];
        var onglet;
        if (this.state.page == "GetAHouse") {
            onglet = <GetAHouse/>;
        } else if (this.state.page == "SearshSomeone") {
            onglet = <SearchSomeone/>;
        } else {
            onglet = <ListOfSpells/>;
        }
        return (
            <div>
                {navSideBar}
                {onglet}
            </div>
        )
    }
}

export default App;
