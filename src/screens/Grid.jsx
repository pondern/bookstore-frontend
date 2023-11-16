import Thumbnail from "../components/Thumbnail";

function Grid({ filteredThumbnails }) {
  return (
    <div>
      <h1>All the books!</h1>
      <div className="grid">
        {filteredThumbnails.map((book) => (
          <Thumbnail book={book} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
