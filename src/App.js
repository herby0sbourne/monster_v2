import { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }

  onSearchChange = (e) => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  render() {
    const { monsters, query } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(query);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster rolex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="monster search"
          className="monsters-search-box"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
