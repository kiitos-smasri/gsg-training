import { useState } from "react";

const Reservation = () => {
  const [data, setData] = useState({
    isGoing: true,
    numberOfGuests: 2,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setData({
      [name]: value,
    });
  };
  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={data.isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={data.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
};
export default Reservation;
