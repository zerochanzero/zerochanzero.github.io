import React, { ReactElement } from "react";
import { Col, Row } from "reactstrap";
import "./faq.css";

const FAQ = (): ReactElement => {
  return (
    <Row
      id="faq"
      className="mx-0 d-flex align-items-center justify-content-center py-5"
    >
      <Col sm={6}>
        <Row className="d-flex align-items-center justify-content-center">
          <h1 style={{ fontSize: "48px" }}>CrypToadz</h1>
          <div
            className="mt-2 px-2"
            style={{
              fontSize: "20px",
              color: "#D8E2EF",
              textAlign: "center",
            }}
          >
            CrypToadz are small amphibious creatures that roam the swampy basin
            of what was formerly known as Uniswamp. Unfortunately, approximately
            six weeks ago the Evil King Gremplin descended upon Uniswamp and
            dispatched the CrypToadz leader Colonel Floorbin, exiling him to
            Gooch Island. Following the fall of Colonel Floorbin, the Evil King
            Gremplin declared his divine right to rule over all CrypToadz in the
            Metaverse. The Evil King Gremplin's first order was to rename
            Uniswamp to GREMPLAND. The Evil King Gremplin rules over the
            CrypToadz along with his army of Fronkz. The Toadz have been known
            to refer to the Evil King Gremplin's reign as "THE CROAKENING". Help
            rid the Toadz of the rule of Evil King Gremplin by choosing how many
            to free during minting.
          </div>
        </Row>
      </Col>
      <Col sm={4} id="imgGrid">
        <div id="imgBox">
          <img src="401.png" alt="gremplin" />
        </div>
        <div id="imgBox">
          <img src="76.png" alt="gremplin" />
        </div>
        <div id="imgBox">
          <img src="15232.png" alt="gremplin" />
        </div>
        <div id="imgBox">
          <img src="12221.png" alt="gremplin" />
        </div>
      </Col>
    </Row>
  );
};

export default FAQ;
