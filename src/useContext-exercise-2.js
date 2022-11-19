/**
 * In this example, toggling the checkbox changes the imageSize prop passed to each <PlaceImage>. 
 * The checkbox state is held in the top-level App component,
 *  but each <PlaceImage> needs to be aware of it.

Currently, App passes imageSize to List, 
which passes it to each Place, which passes it to the PlaceImage.
Remove the imageSize prop, and instead pass it from the App component directly to PlaceImage.
You can declare context in Context.js.
 */

//App.js
import { useState } from "react";
import { places } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List imageSize={imageSize} />
    </>
  );
}

function List({ imageSize }) {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} imageSize={imageSize} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place, imageSize }) {
  return (
    <>
      <PlaceImage place={place} imageSize={imageSize} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place, imageSize }) {
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
//data.js
export const places = [
  {
    id: 0,
    name: "Bo-Kaap in Cape Town, South Africa",
    description:
      "The tradition of choosing bright colors for houses began in the late 20th century.",
    imageId: "K9HVAGH",
  },
  {
    id: 1,
    name: "Rainbow Village in Taichung, Taiwan",
    description:
      "To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.",
    imageId: "9EAYZrt",
  },
  {
    id: 2,
    name: "Macromural de Pachuca, Mexico",
    description:
      "One of the largest murals in the world covering homes in a hillside neighborhood.",
    imageId: "DgXHVwu",
  },
  {
    id: 3,
    name: "Selarón Staircase in Rio de Janeiro, Brazil",
    description:
      'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
    imageId: "aeO3rpI",
  },
  {
    id: 4,
    name: "Burano, Italy",
    description:
      "The houses are painted following a specific color system dating back to 16th century.",
    imageId: "kxsph5C",
  },
  {
    id: 5,
    name: "Chefchaouen, Marocco",
    description:
      "There are a few theories on why the houses are painted blue, including that the color repells mosquitos or that it symbolizes sky and heaven.",
    imageId: "rTqKo46",
  },
  {
    id: 6,
    name: "Gamcheon Culture Village in Busan, South Korea",
    description:
      "In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.",
    imageId: "ZfQOOzf",
  },
];

//utils.js
export function getImageUrl(place) {
  return "https://i.imgur.com/" + place.imageId + "l.jpg";
}

//styles.css
/**
 * * {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 20px;
  padding: 0;
}

h1 {
  margin-top: 0;
  font-size: 22px;
}

h2 {
  margin-top: 0;
  font-size: 20px;
}

h3 {
  margin-top: 0;
  font-size: 18px;
}

h4 {
  margin-top: 0;
  font-size: 16px;
}

h5 {
  margin-top: 0;
  font-size: 14px;
}

h6 {
  margin-top: 0;
  font-size: 12px;
}

code {
  font-size: 1.2em;
}

ul {
  padding-left: 20px;
}

ul { list-style-type: none; padding: 0px 10px; }
li { 
  margin-bottom: 10px; 
  display: grid; 
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: center;
}

 */
