import React, {Component} from "react"
import Person from "./Person"

class People extends Component {
    constructor() {
        super();

        this.state = {
            people: [
                { id: 1, name: "Sally W.", age: 23 },
                { id: 2, name: "Rick S.", age: 30 },
                { id: 3, name: "Samantha T.", age: 52 }
            ]
        }
    };

    onPeopleChange = (id, value) => {
        this.setState( state => {
            const newPeople = state.people.map(person => {
                if (person.id === id){
                    return { ...person, name: value };
                } else {
                    return person;
                }
            });

            return { 
                people: newPeople
            };
        });
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