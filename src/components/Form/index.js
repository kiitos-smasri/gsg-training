import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Sawsan",
    lastName: "Masri",
    email: "test@gmail.com",
  });

  const handleFirstNameChange = (event) => {
    setPerson({
      ...person,
      firstName: event.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };

  console.log({ person });
  const { firstName, lastName, email } = person;

  return (
    <>
      <label>
        First name:
        <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={email} onChange={handleEmailChange} />
      </label>
      <p>
        {firstName} {lastName} {email}
      </p>
    </>
  );
}
