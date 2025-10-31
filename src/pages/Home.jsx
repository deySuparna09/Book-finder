import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async (query) => {
    setLoading(true);
    setError("");
    setBooks([]);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();
      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs.slice(0, 20)); // limit results
      } else {
        setError("No books found. Try a different title.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7faff] p-6">

  <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
    📚 Book Finder
  </h1>

  <p className="text-gray-600 text-center text-sm md:text-lg mb-6 max-w-md mx-auto">
    Discover your favorite book by searching below
  </p>

  <SearchBar onSearch={fetchBooks} />

  {loading && <p className="text-center text-gray-600 mt-4">Loading books...</p>}
  {error && <p className="text-center text-red-600 mt-4">{error}</p>}

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
    {books.map((book) => (
      <BookCard key={book.key} book={book} />
    ))}
  </div>
</div>

  );
};

export default Home;