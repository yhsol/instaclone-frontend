import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET } from "./AuthQuery";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const userName = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("yhsol1592@naver.com");
  const secret = useInput("");
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      userName: userName.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      secret: secret.value,
      email: email.value
    }
  });

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          console.log(requestSecret);
          if (!requestSecret) {
            toast.error("You don't have an account yet, create account!");
            setTimeout(() => {
              setAction("signUp");
            }, 3000);
          } else {
            toast.success("Check Your login secret");
            setAction("confirm");
          }
        } catch {
          toast.error("Can't request secret, try again!");
        }
      } else {
        toast.error("Email is required!");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        userName.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Can't create account, try again!");
          } else {
            toast.success("Account created! Log In!");
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All field are required!");
      }
    } else if (action === "confirm") {
      if (secret !== "") {
        try {
          const {
            data: { confirmSecret: token }
          } = await confirmSecretMutation();
          console.log(token);
        } catch {
          toast.error("Can't confirm secret");
        }
      }
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
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
