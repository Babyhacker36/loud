import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "../../Images/loud_icon.png";

import AddStar from "../AddStar/AddStar";

const NavBar = ({ starInput, setStarInput, addStar }) => {
  return (
    <Container>
    <Row className="navbar">
      <Col md={6} className="logo-col">
        <img src={Logo} alt="Loud-logo" className="logo" />
      </Col>
      <Col md={6} className="SearchCol">
        <AddStar
          starInput={starInput}
          setStarInput={setStarInput}
          addStar={addStar}
        />
      </Col>
    </Row>
    </Container>
  );
};

export default NavBar;
