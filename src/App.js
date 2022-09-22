import { useEffect, useState } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  useEffect(() => {
    const newfilterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(query);
    });
    setFilterMonsters(newfilterMonsters);
  }, [monsters, query]);

  const onSearchChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

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
};

export default App;
