# React.js Practice


## Requirements:
 - Fetch hotels:
  - POST https://experimentation-staging.snaptravel.com/interview/hotels
  JSON request structure:
  {
    city: city_string_input,
    checkin: checkin_string_input,
    checkout: checkout_string_input,
    provider: 'snaptravel'
  }

 - Display hotels
   - name
   - number of stars
   - city (address)
   - price

- add `book` button
  - when clicked books hotel
  - display alert
    - "You've booked the hotel"