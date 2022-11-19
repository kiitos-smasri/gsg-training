/**
 * Challenge 1 of 4: Dispatch actions from event handlers
Currently, the event handlers in ContactList.js and Chat.js have // TODO comments.
 This is why typing into the input doesn’t work, and clicking on the buttons doesn’t change the selected recipient.

Replace these two // TODOs with the code to dispatch the corresponding actions. 
To see the expected shape and the type of the actions, check the reducer in messengerReducer.js.
 The reducer is already written so you won’t need to change it. You only need to dispatch the actions in ContactList.js and Chat.js.
 */

//App.js
import { useReducer } from "react";
import Chat from "./Chat.js";
import ContactList from "./ContactList.js";
import { initialState, messengerReducer } from "./messengerReducer";

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

/**
  * Chat.js
  * import {useState} from 'react';

export default function Chat({contact, message, dispatch}) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
  */

/** ContactList.js
 * export default function ContactList({contacts, selectedId, dispatch}) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                // TODO: dispatch changed_selection
              }}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
 */
/** MessengerReducer.js
 * export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
 * 
 */

//Exercise-2
/**
 * Challenge 2 of 4: Clear the input on sending a message
Currently, pressing “Send” doesn’t do anything. Add an event handler to the “Send” button that will:

Show an alert with the recipient’s email and the message.
Clear the message input.
 */

//Exercise-3
/**
 * In this example, switching between different recipients always clears the text input:

case 'changed_selection': {
  return {
    ...state,
    selectedId: action.contactId,
    message: '' // Clears the input
  };
This is because you don’t want to share a single message draft
 between several recipients. But it would be better if your app “remembered”
  a draft for each contact separately, restoring them when you switch contacts.

Your task is to change the way the state is structured so that you remember
 a separate message draft per contact. You would need to make a few changes to the reducer,
  the initial state, and the components.
 */
