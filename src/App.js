import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [formData, setFormData] = useState({}); //{name , email, password}
  const [cookie, setCookie] = useCookies();

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(formData);
    const {
      data: {
        data: { Token, Name },
      },
    } = await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      formData
    );
    setCookie("token", Token);
    setCookie("name", Name);
  };
  return (
    <>
      <input
        placeholder="Email"
        value={formData.email}
        onChange={handleEmailChange}
      />
      <input
        placeholder="Password"
        value={formData.password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Submit</button>

      <UserProfile />
    </>
  );
};

export default App;

//useEffect recap
//React Context & useContext Hook
//
