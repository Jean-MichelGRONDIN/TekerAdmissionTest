import React from 'react';

class ListOfSpells extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Spells_List : []
        };
    }
    searchRequest() {
        fetch('https://www.potterapi.com/v1/spells?key=MY_HARRY_POTTER_API_KEY')
        .then(res => res.json())
        .then((data) => {
        this.updateSpellsList(data)
        });
    }
    updateSpellsList(list) {
        var tab = [];
        let i = 0;

        list.forEach(elem => {
            tab.push(
                <tr>
                <th scope="row">{elem.spell}</th>
                <td>{elem.type}</td>
                <td>{elem.effect}</td>
                </tr>
                // <li className="list-group-item" key={i}>
                //     {elem.spell}
                // </li>
            );
            i++;
        });
        this.setState({ Spells_List: tab });
    }
    render() {
        return (
            <div>
                <h2>Here you can list every known spells</h2>
            <button onClick={() => this.searchRequest()} >List All existing spells</button>
            {/* <ul className="list-group" >{this.state.Spells_List}</ul> */}
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Effect</th>
                </tr>
            </thead>
            <tbody>
                {this.state.Spells_List}
            </tbody>
            </table>
            </div>
        );
    }
}

export default ListOfSpells;