import React, {Component} from "react"
import Person from "./Person"

class People extends Component {
    constructor() {
        super();

        people: [
            { name: "Sally W.", age: 23 },
            { name: "Rick S.", age: 30 },
            { name: "Samantha T.", age: 52 }
          ]
    };

    render() {
        const { people } = this.state.people;

        return (
            <ul> 
                {people.map(p => (
                <Person key ={p.id} person={p} />
            ))}
            </ul>
        );
    };
}
export default People;  