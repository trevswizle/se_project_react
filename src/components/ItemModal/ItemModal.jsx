import "./ItemModal.css";

function ItemModal({ isOpen, card, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_preview ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__image-container">
        <button
          type="button"
          className="modal__close-btn modal__close-btn_type_image"
          onClick={onClose}
          aria-label="Close"
        />
        <img className="modal__image" src={card.link} alt={card.name} />
        <p className="modal__caption">{card.name}</p>
      </div>
    </div>
  );
}

export default ItemModal;
