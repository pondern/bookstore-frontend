function SavedBook({ savedBook }) {
  return (
    <div className="savedBook">
      <img
        className="lib-img"
        src={savedBook.book.book_image}
        alt={savedBook.book.title}
      />
      <div>
        <p>{savedBook.stars}</p>
        <p>{savedBook.comment}</p>
      </div>
    </div>
  );
}

export default SavedBook;
