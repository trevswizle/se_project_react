import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp.F !== null ? `${weatherData.temp.F}° F` : "..."}
      </p>
    </section>
  );
}

export default WeatherCard;
