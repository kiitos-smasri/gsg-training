import { useState } from "react";

const FlavorForm = () => {
  const [data, setData] = useState({ value: "coconut" });

  const handleChange = (event) => {
    setData({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("Your favorite flavor is: " + data.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={data.value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FlavorForm;
