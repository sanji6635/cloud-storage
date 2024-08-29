import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [state, setState] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (email, password) => {
    const resp = validateInput(password);

    setState(resp);

    if (resp) {
      try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        //handling error
        if (data.error) {
          throw new Error(data.error);
        }
        //Displaying the message on the screen
        toast.success(data.message);
        console.log(data);

        //localSTorage
        localStorage.setItem("user", JSON.stringify(data));
        //context
        setAuthUser(data);

        //------------
      } catch (err) {
        console.log(`There was an error while logging i => ${err.message}`);
        toast.error(err.message);
      } finally {
        setState(false);
      }
    } else {
      return;
    }
  };

  return { login };
};

export default useLogin;

function validateInput(password) {
  if (password.length < 8) {
    toast.error("password must be at least 8 characters long");
    return false;
  }
  return true;
}
