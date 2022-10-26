import { useEffect, useState } from "react";

export default function Input() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");
  const [contact, setContact] = useState("Test Contact");

  // if (isSent) {
  //   return <h1>Your message is on its way! {message}</h1>;
  // }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        setContact("After setting state true");
      }}
    >
      <input
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(contact) {
  console.log(contact);
}
