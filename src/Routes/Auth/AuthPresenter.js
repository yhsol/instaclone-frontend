import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox};
  border-radius: 0px;
  max-width: 350px;
  width: 100%;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
  color: #999;
  font-size: 14px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 38px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
  button {
    margin-bottom: 10px;
  }
`;

const FormTitle = styled.div`
  font-size: 23px;
  color: ${props => props.theme.blackColor};
  text-align: center;
  margin-bottom: 2rem;
`;

export default ({
  action,
  setAction,
  userName,
  firstName,
  lastName,
  email,
  secret,
  onSubmit
}) => {
  // console.log(userName);

  return (
    <Wrapper>
      <Form>
        <FormTitle>INSTACLONE</FormTitle>
        {action === "logIn" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"Email"} {...email} type="email" />
            <Button text={"Log in"} />
          </form>
        )}
        {action === "signUp" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"First name"} {...firstName} />
            <Input placeholder={"Last name"} {...lastName} />
            <Input placeholder={"Email"} {...email} type="email" />
            <Input placeholder={"Username"} {...userName} />
            <Button text={"Sign up"} />
          </form>
        )}
        {action === "confirm" && (
          <form onSubmit={onSubmit}>
            <Input placeholder="Paste Your login secret" required {...secret} />
            <Button text={"Confirm"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an acoount?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
