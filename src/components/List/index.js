import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function List() {
  const [artists, setArtists] = useState(initialArtists);

  const handleDelete = (artist, index) => {
    setArtists(artists.filter((a) => a.id !== artist.id));
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist, index) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button onClick={() => handleDelete(artist, index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
