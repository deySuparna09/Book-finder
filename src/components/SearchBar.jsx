import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-2/3 p-2 border rounded-l-lg outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
