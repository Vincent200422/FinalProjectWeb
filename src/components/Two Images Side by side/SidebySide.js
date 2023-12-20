import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import { Link } from 'react-router-dom'; 

function SidebySide({
  title,
  subTitle,
  paragraphOne,
  paragraphTwo,
  images,
  titleBtn,
  customDiv
}) {
  return (
    <div className="healthyfood">
      <Container className="mx-auto">
        <Row className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <Col xl={5} lg={10} sm={10} xs={10}>
            <div className="images">
              <img src={images} className="img-fluid" alt={title} />
            </div>
          </Col>

          <Col xl={5} lg={10} sm={10} xs={10}>
            <div className="content">
              <h1>{title}</h1>

              <p className="paragraph-one">{paragraphOne}</p>
              <p className="paragraph-two">{paragraphTwo}</p>


                  {customDiv}
            
              {titleBtn && (
                <Link to="/description">
                <button
                  className="white-color"
                  style={{
                    borderRadius: "118px",
                    border: "3px solid #2C2F24",
                    background: "white",
                    color: "#182226",
                  }}
                >
                  {titleBtn}
                </button>
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SidebySide;
