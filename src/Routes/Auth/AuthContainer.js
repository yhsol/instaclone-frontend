import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";

export default () => {
  const [action, setAction] = useState("logIn");
  const userName = useInput("");
  const password = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");

  console.log(userName, password);

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      userName={userName}
      password={password}
      firstName={firstName}
      lastName={lastName}
      email={email}
    />
  );
};
