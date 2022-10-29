import { useEffect } from "react";

export default function ChatRoom() {
  return (
    <>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
      <h1>Welcome to the chat!</h1>
    </>
  );
}

export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log("✅ Connecting...");
    },
    disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}
//fix
// export default function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection();
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the chat!</h1>;
// }

//1
//unsubscribe example
/**
 * 
 useEffect(() => {
  function handleScroll(e) {
    console.log(e.clientX, e.clientY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
 */

//2
/**
 * Clean up functions
 useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
 */
///
