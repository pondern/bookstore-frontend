import Thumbnail from "../components/Thumbnail";

function Grid({ filteredThumbnails, category }) {
  return (
    <div>
      <h1>{category}</h1>
      <div className="grid">
        {filteredThumbnails.map((book) => (
          <Thumbnail book={book} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
