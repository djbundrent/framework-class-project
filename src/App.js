import React, { Component } from "react";

class App extends Component {
  constructor(){
    super()

    this.state = {
      people: [
        { name: 'Jim', alive: true },
        { name: 'Bob', alive: false },
        { name: 'Tim', alive: true }
      ],

      hidden: true
    }
  }

  toggleHidden = () => this.setState(state => ({hidden: !state.hidden}))

  render() {
    return (
      <div className="App">
      <button onClick={ this.toggleHidden }>Toggle</button>

        { this.state.hidden === false && (
          <ul>
            { this.state.people
              .map (p => (
                <li> {p.name} </li>
              ))}
          </ul>
          )}

      </div>
    );
  }
}
/* */
export default App;
