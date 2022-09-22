import { useEffect, useState, ChangeEvent } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import { getData } from './utils/fetch.utils';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [query, setQuery] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newfilterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(query);
    });
    setFilterMonsters(newfilterMonsters);
  }, [monsters, query]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
