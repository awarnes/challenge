import React, { useEffect, useState } from 'react';
import './App.css';


const BASE_HOTEL_ROUTE = 'https://experimentation-staging.snaptravel.com/interview/hotels';

const getHotels = async () => {
  return await fetch(BASE_HOTEL_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      city: 'city_string_input',
      checkin: 'checkin_string_input',
      checkout: 'checkout_string_input',
      provider: 'snaptravel'
    })
  })
  .then(resp => resp.json())
  .then(json => json.hotels)
  .catch(error => (console.error('error: ', error)));
};

function App() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels()
      .then(hotels => setHotels(hotels));
  }, []);
  console.log(setHotels)
  return (
    <div className="App">
      <ul>
        {hotels.map(hotel => (
          <li key={hotel.id}>
            <p>Name: {hotel.hotel_name}</p>
            <p>Address: {hotel.address}</p>
            <p>Price: {hotel.price}</p>
            <p>Stars: {hotel.num_stars}</p>
            <button type='button' onClick={() => alert(`You've successfully booked your stay ${hotel.hotel_name}`)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
