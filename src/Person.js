import React, {Component} from "react";

class Person extends Component{
    constructor(){
        super();
    };

    onValueChange = (event) => {
        const { value } = event.target;
        const { onChange } = this.props;
        const { id} = this.props.person;

        onChange(id, value);
    };

    render() {
        const { name } = this.props.person;
        return (
            <li> 
                <input type="text" value={name} onChange={this.onValueChange} />
            </li>
           );
    };
}

export default Person;
