import React, { useState } from "react";
// gaearon, sophiebits, sebmarkbage, bvaughn
const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);

const Card = (profile) => {
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
};

const Form = () => {
  const [data, setData] = useState({ userName: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data.userName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={data.userName}
        onChange={(event) => setData({ userName: event.target.value })}
        placeholder="GitHub username"
        required
      />
      <button>Add card</button>
    </form>
  );
};

const App = () => {
  let title = "The GitHub Cards App";

  // const [data, setData] = useState({
  //   profiles: testData,
  // });

  return (
    <div>
      <div className="header">{title}</div>
      <Form />
      <CardList profiles={testData} />
    </div>
  );
};

export default App;
