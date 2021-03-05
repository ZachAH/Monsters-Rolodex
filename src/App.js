import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }
  //fetching api then converting it to json and then setting it as the monster array for users
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));


  }


  render() {
    return (
      <div className='App'>
        <CardList name='Yihua'>
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
