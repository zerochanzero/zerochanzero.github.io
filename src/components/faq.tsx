import React, { ReactElement } from "react";
import { Col, Row } from "reactstrap";
import "./faq.css";

const FAQ = (): ReactElement => {
  return (
    <Row
      id="faq"
      className="mx-0 d-flex align-items-center justify-content-center"
    >
      <Col sm={6}>
        <Row className="d-flex align-items-center justify-content-center">
          <h1 style={{ fontSize: "48px" }}>MistleToadz</h1>
          <div
            className="mt-2 px-2"
            style={{
              fontSize: "20px",
              color: "#D8E2EF",
              textAlign: "center",
            }}
          >
            Three months ago, 6969 CrypToadz were heroically freed during a raid
            on Grempland lead by a coalition of citizens of the metaverse.
            Unfortunately, Evil King Gremplin was able to ultimately turn away
            the rebel forces, and maintain his grip over the remaining Toadz.
            The freed 6969 CrypToadz have been in hiding, meticulously planning
            their rescue of Colonel Floorbin and remaining Toadz. Taking note
            from George Washington, the freed Toadz have been preparing for a
            Christmas attack on Grempland. Help the Toadz free their friends and
            family from the rule of Evil King Gremplin by clicking claim.
          </div>
        </Row>
      </Col>
      <Col sm={4} id="imgGrid">
        <div id="imgBox">
          <img src="4.png" alt="gremplin" />
        </div>
        <div id="imgBox">
          <img src="3199.png" alt="gremplin" />
        </div>
        <div id="imgBox">
          <img src="3305.png" alt="gremplin" />
        </div>
        <div id="imgBox">
          <img src="6839.png" alt="gremplin" />
        </div>
      </Col>
    </Row>
  );
};

export default FAQ;
