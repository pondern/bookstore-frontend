function SavedBook({ savedBook }) {
  return (
    <div>
      <img src={savedBook.book.book_image} alt={savedBook.book.title} />
      <p>{savedBook.stars}</p>
      <p>{savedBook.comment}</p>
    </div>
  );
}

export default SavedBook;
