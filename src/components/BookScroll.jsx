import Book from '../components/Book.jsx';

function BookScroll(props) {

    return (
        <div className="scrollable-books-container">
        <div className="horizontal-scroll-container">
        { props.books.sort(function(a,b) {
          return parseFloat(b.rank) - parseFloat(a.rank)
        }).slice(0, 10).map((book) => (
          <div key={book.rank} className="book-item">
            <Book book={book} />
          </div>
        ))}
        </div>
      </div>    )
}

export default BookScroll