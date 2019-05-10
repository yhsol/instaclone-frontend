import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQuery";

export default () => {
  const [action, setAction] = useState("logIn");
  const userName = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const requestSecret = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const onLogin = e => {
    e.preventDefault();
    if (email !== "") {
      requestSecret();
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      userName={userName}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}
    />
  );
};
