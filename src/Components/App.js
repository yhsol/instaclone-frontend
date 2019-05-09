import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import theme from "../Styles/theme";
import RouterComponent from "./Router";
import { useQuery } from "react-apollo-hooks";
import { QUERY } from "./AppQuery";
import Footer from "./Footer";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  // console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <RouterComponent isLoggedIn={isLoggedIn} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};
