import SavedBook from "../components/SavedBook";

function Library({ library }) {
  const savedBooks = library?.books;

  return (
    <div>
      <h1>My Library</h1>
      <div className="lib-list">
        {savedBooks?.map((savedBook) => (
          <SavedBook savedBook={savedBook} />
        ))}
      </div>
    </div>
  );
}

export default Library;
