import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherData, clothingItems, onCardClick }) {
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <ul className="cards__list">
        {clothingItems
          .filter((item) => item.weather === weatherData.type)
          .map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))}
      </ul>
    </main>
  );
}

export default Main;
