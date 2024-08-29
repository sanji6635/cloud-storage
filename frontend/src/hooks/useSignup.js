import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  //checking password validation
  const signup = async (email, password, confirmPassword) => {
    const resp = checkInput(email, password, confirmPassword);
    setLoading(resp);

    if (resp) {
      try {
        const res = await fetch("http://localhost:5000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        //checking for res error
        if (data.error) {
          throw new Error(data.error);
        }
        //displaying the message on the screen
        toast.success(data.message);
        console.log(data);

        //localStorage
        localStorage.setItem("user", JSON.stringify(data));
        //context
        setAuthUser(data);

        //======
      } catch (err) {
        console.log(`there was an error while signing up => ${err.message}`);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    } else {
      return;
    }
  };

  return { signup };
};
export default useSignup;

function checkInput(email, password, confirmPassword) {
  if (email === "" || password === "" || confirmPassword === "") {
    toast.error("Input all the fields");
    return false;
  } else if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  } else if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
