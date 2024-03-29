import { Avatar } from "@/public/img";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Image from "next/image";
import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      setUser(userFromPayload);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src="https://source.unsplash.com/random/40x40/?person"
        width="90"
        height="90"
        className="img-fluid mb-20 rounded-circle"
        alt=""
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}

export default Profile;
