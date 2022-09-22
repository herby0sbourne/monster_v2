import { ChangeEventHandler } from 'react';
import './searchbox.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ placeholder, className, onChangeHandler }: SearchBoxProps) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className={`search-box ${className}`}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
