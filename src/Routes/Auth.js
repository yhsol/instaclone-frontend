import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;
const Box = styled.div`
  ${props => props.theme.whiteBox};
  border-radius: 0px;
  width: 350px;
`;
const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

export default () => {
  const [action, setAction] = useState("logIn");

  return (
    <Wrapper>
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
