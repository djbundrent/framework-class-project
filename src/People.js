import React, {Component} from "react"
import Person from "./Person"

class People extends Component {
    constructor() {
        super();

        this.state = {
            people: [
                { name: "Sally W.", age: 23 },
                { name: "Rick S.", age: 30 },
                { name: "Samantha T.", age: 52 }
          ]
        }
    };

    onPeopleChange = (id, value) => {
        console.log(id, value);

    };

    render() {
        const { people } = this.state;

        return (
            <ul> 
                {people.map(p => (
                <Person key ={p.id} person={p} onChange={this.onPeopleChange}/>
            ))}
            </ul>
        );
    };
}
export default People;  