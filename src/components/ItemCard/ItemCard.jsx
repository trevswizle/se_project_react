import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__image-container">
        <img
          src={item.link}
          alt={item.name}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__header">
          <h2 className="card__name">{item.name}</h2>
          <button type="button" className="card__like-btn" aria-label="Like">
            <svg
              className="card__like-icon"
              viewBox="0 0 24 22"
              aria-hidden="true"
            >
              <path d="M12 21 2.3 12.4C-1 9.3.9 3.5 6 3c2.8-.3 5 1.1 6 3 1-1.9 3.2-3.3 6-3 5.1.5 7 6.3 3.7 9.4L12 21z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
