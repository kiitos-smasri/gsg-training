import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function UserProfile() {
  const [cookie, setCookie] = useCookies();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get("http://restapi.adequateshop.com/api/users/148307", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((user) => setUserData(user.data));
  }, []);
  return (
    <>
      <div>
        Hello {cookie.name} from {userData.location}
      </div>
      <img src={userData.profilepicture} />
    </>
  );
}

export default UserProfile;
