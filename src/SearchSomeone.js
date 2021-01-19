import React from 'react';

class SearchSomeone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search_result : [],
            name: "",
            house: "",
            patronus: "",
            species: "",
            blood: "",
            role: "",
            school: "",
            deathEater: false,
            dumbledoresArmy: false,
            orderOfThePhoenix: false,
            ministryOfMagic: false,
            alias: "",
            wand: "",
            boggart: "",
            animagus: ""
        };
    }
    searchRequest() {
        var url = "https://www.potterapi.com/v1/characters?key=MY_HARRY_POTTER_API_KEY";
        if (this.state.name != "")
            url = url + "&" + "name=" + this.state.name;
        if (this.state.house != "")
            url = url + "&" + "house=" + this.state.house;
        if (this.state.patronus != "")
            url = url + "&" + "patronus=" + this.state.patronus;
        if (this.state.species != "")
            url = url + "&" + "species=" + this.state.species;
        if (this.state.blood != "")
            url = url + "&" + "bloodStatus=" + this.state.blood;
        if (this.state.role != "")
            url = url + "&" + "role=" + this.state.role;
        if (this.state.school != "")
            url = url + "&" + "school=" + this.state.school;
        if (this.state.deathEater != false)
            url = url + "&" + "deathEater=True";
        if (this.state.dumbledoresArmy != false)
            url = url + "&" + "dumbledoresArmy=True";
        if (this.state.orderOfThePhoenix != false)
            url = url + "&" + "orderOfThePhoenix=True";
        if (this.state.ministryOfMagic != false)
            url = url + "&" + "ministryOfMagic=True";
        if (this.state.alias != "")
            url = url + "&" + "alias=" + this.state.alias;
        if (this.state.wand != "")
            url = url + "&" + "wand=" + this.state.wand;
        if (this.state.boggart != "")
            url = url + "&" + "boggart=" + this.state.boggart;
        if (this.state.animagus != "")
            url = url + "&" + "animagus=" + this.state.animagus;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.updatePersonsList(data)
        });
    }
    updatePersonsList(list) {
        var tab = [];
        let i = 0;

        list.forEach(elem => {
            tab.push(
                <li className="list-group-item" key={i}>
                    {elem.name + " " + elem.role}
                </li>
            );
            i++;
        });
        this.setState({ Search_result: tab });
    }
    render() {
        return (
            <div>
                <h2>Here you can search for someone by entering informations about that person</h2>
                <form>
                    <div className="form-group" >
                        <label htmlFor="Name" >Name:</label>
                        <div className="col-sm-10" >
                            <input className="form-control" id="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="Houses" >House:</label>
                        <div className="col-sm-10" >
                            <select className="form-control" id="Houses" value={this.state.house} onChange={(e) => this.setState({ house: e.target.value })} >
                                <option value="">none</option>
                                <option value="Gryffindor">Gryffindor</option>
                                <option value="Ravenclaw">Ravenclaw</option>
                                <option value="Slytherin">Slytherin</option>
                                <option value="Hufflepuff">Hufflepuff</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="Patronus" >Patronus:</label>
                        <div className="col-sm-10" >
                            <input type="text" className="form-control" id="Patronus" value={this.state.patronus} onChange={(e) => this.setState({ patronus: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="Species" >Species:</label>
                        <div className="col-sm-10" >
                            <input type="text" className="form-control" id="Species" value={this.state.species} onChange={(e) => this.setState({ species: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="Blood" >Blood Status:</label>
                        <div className="col-sm-10" >
                            <select className="form-control" id="Blood" value={this.state.blood} onChange={(e) => this.setState({ blood: e.target.value })} >
                            <option value="">none</option>
                            <option value="pure-blood">Pure Blood</option>
                                <option value="half-blood">Half Blood</option>
                                <option value="muggle-born">Muggle Born</option>
                                <option value="unknow">Unknow</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="Role" >Role:</label>
                        <div className="col-sm-10" >
                            <input type="text" className="form-control" id="Role" value={this.state.role} onChange={(e) => this.setState({ role: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="School" >School:</label>
                        <div className="col-sm-10" >
                            <input type="text" className="form-control" id="School" value={this.state.school} onChange={(e) => this.setState({ school: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="Alias" >Alias:</label>
                        <div className="col-sm-10" >
                            <input type="text" className="form-control" id="Alias" value={this.state.alias} onChange={(e) => this.setState({ alias: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="Wand" >Wand:</label>
                        <div className="col-sm-10" >
                            <input type="text" className="form-control" id="Wand" value={this.state.wand} onChange={(e) => this.setState({ wand: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="Boggart" >Boggart:</label>
                        <div className="col-sm-10" >
                            <input type="text" className="form-control" id="Boggart" value={this.state.boggart} onChange={(e) => this.setState({ boggart: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="Animagus" >Animagus:</label>
                        <div className="col-sm-10" >
                            <input type="text" className="form-control" id="Animagus" value={this.state.animagus} onChange={(e) => this.setState({ animagus: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" id="DeathEater" value={this.state.deathEater} onChange={(e) => this.setState({ deathEater: e.target.checked })} />
                        <label className="form-check-label" htmlFor="DeathEater" >Death Eater</label>
                    </div><br/>
                    <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" id="DumbledoresArmy" value={this.state.dumbledoresArmy} onChange={(e) => this.setState({ dumbledoresArmy: e.target.checked })} />
                        <label className="form-check-label" htmlFor="DumbledoresArmy" >Dumbledores Army</label>
                    </div><br/>
                    <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" id="OrderOfThePhoenix" value={this.state.orderOfThePhoenix} onChange={(e) => this.setState({ orderOfThePhoenix: e.target.checked })} />
                        <label className="form-check-label" htmlFor="OrderOfThePhoenix" >Order Of The Phoenix</label>
                    </div><br/>
                    <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" id="MinistryOfMagic" value={this.state.ministryOfMagic} onChange={(e) => this.setState({ ministryOfMagic: e.target.checked })} />
                        <label className="form-check-label" htmlFor="MinistryOfMagic" >Ministry Of Magic</label>
                    </div><br/>
                    <button type="button" onClick={() => this.searchRequest()} className="btn btn-primary" >Search Someone</button>
                </form>
                <ul className="list-group" >{this.state.Search_result}</ul>
            </div>
            );
    }
}

export default SearchSomeone;