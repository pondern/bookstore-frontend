import Thumbnail from "../components/Thumbnail";

function Grid({ filteredThumbnails, category }) {
  return (
    <div className="grid-body">
      <h1 className="section-heading">{category}</h1>
      <div className="grid">
        {filteredThumbnails.map((book) => (
          <Thumbnail book={book} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
