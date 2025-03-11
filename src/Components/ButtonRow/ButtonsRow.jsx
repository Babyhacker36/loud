import React from "react";
import { Row, Col, Container, OverlayTrigger, Tooltip } from "react-bootstrap";


const ButtonsRow = ({ topics, displayStarInfo }) => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {topics.map((topic, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} xl={1} className="d-flex justify-content-center mb-2">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{topic}</Tooltip>} // Show full text on hover
            >
              <button className="btn-topic" onClick={() => displayStarInfo(topic)}>
                {topic.length > 12 ? topic.substring(0, 12) + "..." : topic}
              </button>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ButtonsRow;
