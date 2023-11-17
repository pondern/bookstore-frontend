import SavedBook from "../components/SavedBook";

function Library({ setUser }) {
  console.log(setUser);

  return (
    <div>
      <h1>My Library</h1>
      {/* <div className="lib-list">
        {savedBooks.map((savedBook) => (
          <SavedBook savedBook={savedBook} />
        ))}
      </div> */}
    </div>
  );
}

export default Library;
