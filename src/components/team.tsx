import React, { ReactElement } from "react";
import { Row } from "reactstrap";
import "./team.css";

const Team = (): ReactElement => {
  return (
    <>
      <Row
        id="team"
        className="mx-0 d-flex align-items-center justify-content-center pt-8"
      >
        <h1 style={{ fontSize: "48px" }}>Made With Love,</h1>
      </Row>
      <Row className="mx-0 d-flex align-items-center justify-content-center pb-5">
        <div className="circle">
          <div className="tick">
            <img style={{ borderRadius: "25px" }} src="bn.png" alt="bn98" />
            <div id="nameTag">bn89</div>
          </div>
          <div className="tick">
            <img
              style={{ borderRadius: "25px", borderStyle: "outset" }}
              src="west.png"
              alt="west"
            />
            <div id="nameTag">cat</div>
          </div>
          <div className="tick">
            <img
              style={{ borderRadius: "25px" }}
              src="chanzero.png"
              alt="chanzero"
            />
            <div id="nameTag">chanzero</div>
          </div>
          <div className="tick">
            <img style={{ borderRadius: "25px" }} src="dinfo.png" alt="dinfo" />
            <div id="nameTag">dinfo</div>
          </div>
          <div className="tick">
            <img style={{ borderRadius: "25px" }} src="emmy.png" alt="emmy" />
            <div id="nameTag">emmy</div>
          </div>
          <div className="tick">
            <img
              style={{ borderRadius: "25px" }}
              src="heeeee.png"
              alt="heeeee"
            />
            <div id="nameTag">heeeee</div>
          </div>
          <div className="tick">
            <img
              style={{ borderRadius: "25px" }}
              src="motivate.png"
              alt="motivateme"
            />
            <div id="nameTag">motivateme</div>
          </div>
          <div className="tick">
            <img style={{ borderRadius: "25px" }} src="sum1.png" alt="sum1" />
            <div id="nameTag">sum1</div>
          </div>
          <div className="tick">
            <img
              style={{ borderRadius: "25px" }}
              src="temp_gremp.png"
              alt="gremplin"
            />
            <div id="nameTag">gremplin</div>
          </div>
        </div>
      </Row>
      <hr />
      <Row className="d-flex align-items-center justify-content-center pb-3">
        <a
          className="pr-3"
          rel="noreferrer"
          target="_blank"
          href="http://creativecommons.org/publicdomain/zero/1.0/"
        >
          <img
            src="http://i.creativecommons.org/p/zero/1.0/88x31.png"
            style={{ borderStyle: "none" }}
            alt="CC0"
          />
        </a>
        <div>
          To the extent possible under law,
          <a rel="dct:publisher" href="https://cryptoadz.io/">
            <span property="dct:title" className="px-1">
              Gremplin
            </span>
          </a>
          has waived all copyright and related or neighboring rights to
          <span property="dct:title" className="pl-1">
            CrypToadz by Gremplin
          </span>
          . This work is published from:
          <span
            property="vcard:Country"
            datatype="dct:ISO3166"
            about="https://cryptoadz.io/"
            className="px-1"
          >
            United States
          </span>
          .
        </div>
      </Row>
    </>
  );
};

export default Team;
