import React from 'react';
import GetAHouse from './GetAHouse'
import SearchSomeone from './SearchSomeone'
import ListOfSpells from './ListOfSpells'
import './SideBar.css';
// import logo from './logo.svg';
// import './App.css';

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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
