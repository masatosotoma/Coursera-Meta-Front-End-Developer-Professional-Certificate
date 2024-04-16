import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");

    const handleSubmit = () => {
      
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
            </fieldset>
          </form>
        </section>
      </header>
    </div>
  );
};

export default BookingForm;
