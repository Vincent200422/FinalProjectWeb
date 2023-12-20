
import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  const handleReservationSubmit = (e) => {
    e.preventDefault();

    if (!name || !time || !numberOfPeople) {
      alert('Please fill in all fields.');
      return;
    }

    const newReservation = {
      name,
      time,
      numberOfPeople,
    };

    setReservations([...reservations, newReservation]);
    setName('');
    setTime('');
    setNumberOfPeople('');
  };

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleReservationSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          Number of People:
          <input type="text" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div className="reservation-list">
        <h2>Reservation List</h2>
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>
              <strong>Name:</strong> {reservation.name}, <strong>Time:</strong> {reservation.time},{' '}
              <strong>Number of People:</strong> {reservation.numberOfPeople}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reservation;
