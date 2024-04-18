import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuest] = useState("");
  const [occasion, setOccacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <div>
      <header>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="book-date">Choose Date</label>
                <input
                  id="book-date"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  type="date"
                  required
                />
              </div>

              <div>
                <label htmlFor="book-time">Choose Time:</label>
                <select id="book-time" value={times} onChange{(e) => setTimes(e)}>
                  <option value="">Select a Time:</option>
                  {props.availableTimes.availableTimes.map((availableTimes) => {
                    return (
                      <option key={availableTimes}>{availableTimes}</option>
                    );
                  })}
                </select>
              </div>
            </fieldset>
          </form>
        </section>
      </header>
    </div>
  );
};

export default BookingForm;
