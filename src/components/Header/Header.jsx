import avatar from "../../assets/avatar.svg";
import "./Header.css";

function Header({ city, onAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <p className="header__logo">wtwr°</p>
          <p className="header__date">
            {currentDate}
            {city ? `, ${city}` : ""}
          </p>
        </div>

        <div className="header__right">
          <button
            type="button"
            className="header__add-btn"
            onClick={onAddClick}
          >
            + Add clothes
          </button>
          <p className="header__username">Trevor Smith</p>
          <img
            src={avatar}
            alt="Trevor Smith"
            className="header__avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;