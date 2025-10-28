const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
  : "https://placehold.co/150x200?text=No+Cover";


  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-60 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p className="text-sm text-gray-500">
        First Published: {book.first_publish_year || "N/A"}
      </p>
    </div>
  );
};

export default BookCard;
