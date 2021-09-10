import React, { ReactElement } from "react";
import { Col, Row } from "reactstrap";

const About = (): ReactElement => {
  return (
    <Row
      id="about"
      className="mx-0 d-flex align-items-center justify-content-center py-5"
    >
      <Col sm={4} style={{ textAlign: "center" }}>
        <img
          style={{ borderRadius: "15px" }}
          width="75%"
          src="temp_gremp.png"
          alt="gremplin"
        ></img>
      </Col>
      <Col sm={6} style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px" }}>Gremplin</h1>
        <div className="mt-2" style={{ fontSize: "20px", color: "#D8E2EF" }}>
          On a January evening in early 2021, Gremplin scurried through dark
          vents and damp pipes after making two wrong turns back home to the
          depths of his hole. When he finally surfaced, trapped in the chaotic
          energy of the metaverse, he scrambled to keep pace. He crafted
          spinning boxes to fit in with the crowd, and drew rotating residents
          of his homeland to help people understand where he’s from. Eventually,
          he took to drawing residents of this new land to pass the time.
          Finally feeling at home, he began to seek out ways to help build in
          this place. He’s just doing what he’s always done - drawing residents
          of lands, be they Nouns or Toadz - just trying to find his way back to
          his hole.
        </div>
      </Col>
    </Row>
  );
};

export default About;
