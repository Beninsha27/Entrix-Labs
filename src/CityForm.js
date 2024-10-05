import React, { useState } from 'react';
import './CityForm.css'; // Import the CSS file

const CityForm = () => {
  const [newCity, setNewCity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setNewCity(e.target.value);
  };

  const handleAddCity = (e) => {
    e.preventDefault();
    const cityToAdd = newCity.trim();

    if (!cityToAdd) {
      setErrorMessage('City name cannot be empty.');
      return;
    }

    if (cityList.includes(cityToAdd.toLowerCase())) {
      setErrorMessage('City is already in the list.');
      return;
    }

    setCityList([...cityList, cityToAdd.toLowerCase()]);
    setNewCity('');
    setErrorMessage('');
  };

  return (
    <div className="city-form-container">
      <form onSubmit={handleAddCity} className="city-form">
        <input
          type="text"
          value={newCity}
          onChange={handleInputChange}
          placeholder="Enter a city"
          className="city-input"
        />
        <button type="submit" className="add-city-button">Add City</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <ul className="city-list">
        {cityList.map((city, index) => (
          <li type='disc' className="city-item" key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityForm;
