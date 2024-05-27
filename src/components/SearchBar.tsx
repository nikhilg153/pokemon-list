import React from "react";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      onChange={handleInputChange}
      className="text-black my-5 border rounded-sm p-2"
    />
  );
};

export default SearchBar;
