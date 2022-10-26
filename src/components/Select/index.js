import { useState } from "react";

const optionsData = ["grapefruit", "lime", "coconut", "mango"];
const FlavorForm = () => {
  const [data, setData] = useState("coconut");
  const [fruit, setFruit] = useState("");
  const [options, setOptions] = useState(optionsData);

  const handleChange = (event) => {
    console.log(event.target.value);
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOptions([...options, fruit]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={data} onChange={handleChange}>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </label>
      <input
        type="text"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FlavorForm;
