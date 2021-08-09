import React from "react";

import Header from "./Header";
import { Container } from "./LayoutStyles";
export const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <main>{children}</main>
      </Header>
    </Container>
  );
};
