import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/clothingItems";
import { getWeatherData, parseWeatherData } from "../../utils/weatherApi";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: null },
    city: "",
  });
  const [clothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(parseWeatherData(data));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <div className="app__content">
        <Header city={weatherData.city} onAddClick={handleAddClick} />
        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        name="add-garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              className="modal__radio-input"
              name="weather"
              value="hot"
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__label modal__label_type_radio">
            <input
              id="warm"
              type="radio"
              className="modal__radio-input"
              name="weather"
              value="warm"
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__label modal__label_type_radio">
            <input
              id="cold"
              type="radio"
              className="modal__radio-input"
              name="weather"
              value="cold"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        isOpen={activeModal === "preview"}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
