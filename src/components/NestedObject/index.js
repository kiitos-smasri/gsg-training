import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
      address: {
        street: "test",
      },
    },
  });

  const handleNameChange = (event) => {
    setPerson({
      ...person,
      name: event.target.value,
    });
  };

  const handleTitleChange = (event) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: event.target.value,
      },
    });
  };

  const handleCityChange = (event) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: event.target.value,
      },
    });
  };

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
