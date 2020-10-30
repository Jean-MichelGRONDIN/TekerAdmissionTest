import { waitFor } from '@testing-library/react';
import React from 'react';
import Confetti from 'react-confetti'
import './App.css'

class GetAHouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Designed_House : "",
            runAnimation: false
        };
    }
    getHouseRequest() {
        this.setState({ runAnimation: true });
        fetch('https://www.potterapi.com/v1/sortingHat')
        .then(res => res.json())
        .then((data) => {
        this.setState({ Designed_House: data })
        });
    }
    render() {
        var animation = [];
        var AssignedHouse = [];
        if (this.state.runAnimation == true) {
            animation = [<Confetti width={700} height={700} />];
        } else {
            animation = [];
        }
        if (this.state.Designed_House == "Slytherin")
            AssignedHouse = [<img src="Slytherin.png" />]
        if (this.state.Designed_House == "Gryffindor")
            AssignedHouse = [<img src="Gryffindor.png" />]
        if (this.state.Designed_House == "Hufflepuff")
            AssignedHouse = [<img src="Hufflepuff.png" />]
        if (this.state.Designed_House == "Ravenclaw")
            AssignedHouse = [<img src="Ravenclaw.png" />]
        if (this.state.Designed_House != "")
            AssignedHouse.push(<p className="bold-text" >You were assigned to {this.state.Designed_House}</p>);
        return (
            <div>
                <h2>Here you can be assigned to a House</h2>
                {animation}
                <button onClick={() => this.getHouseRequest()} >Get a house (kidos only)</button>
                <button onClick={() => this.setState({ runAnimation: false })} >Stop animation</button>
                <br/>
                {AssignedHouse}
            </div>
        );
    }
}

export default GetAHouse;