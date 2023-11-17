import SavedBook from "../components/SavedBook";

function Library({ library }) {
  return (
    <div>
      <h1>My Library</h1>
      {/* <div className="lib-list">
        {savedBooks.map((savedBook) => (
          <SavedBook savedBook={savedBook} />
        ))}
      </div> */}
      {library?.books?.map((bookReview) => (
        <div>
          <img src={bookReview.book.book_image} alt={bookReview.book.title} />
          <p>Stars: {bookReview.stars}</p>
          <p>Comment: {bookReview.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Library;
