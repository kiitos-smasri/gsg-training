/**
 * This component shows the biography for the selected person.
 * It loads the biography by calling an asynchronous function
 * fetchBio(person) on mount and whenever person changes.
 *  That asynchronous function returns a Promise which eventually
 *  resolves to a string. When fetching is done, it calls setBio to
 * display that string under the select box.
 */

import { useState, useEffect } from "react";
import { fetchBio } from "./api.js";

export default function Page() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);

  useEffect(() => {
    setBio(null);
    fetchBio(person).then((result) => {
      setBio(result);
    });
  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}
