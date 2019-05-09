import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";

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
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 38px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  width: 100%;
`;

export default () => {
  const [action, setAction] = useState("logIn");

  return (
    <Wrapper>
      <Form>
        <Input />
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            "Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>"
          </>
        ) : (
          <>
            "Have an acoount?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>"
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
