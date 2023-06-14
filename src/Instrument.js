import React from "react";
import { instruments } from "../src/data";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
import Button from "react-bootstrap/Button";

const Instrument = () => {
  const params = parseInt(useParams().details);

  let product = instruments.find((p) => p.id === params);

  return (
    <>
    <Container id="grid-instrument">
      <br />
      <Row id="row-one-instrument">
        <Col>
          <img id="img" src={product.image} alt={product.name} height={700}/>
        </Col>
        <Col id="col-2">
        <br /> <br />
          <h2>{product.name}</h2><br />
          <h2>{product.brand}</h2><br />
          <h2>{product.price}JD</h2>
          <br />
          <br />
          <br />
          <p>{product.description} </p>
          <br />
          <Button id="btn">Buy Now</Button>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    </>
  );
};

export default Instrument;
