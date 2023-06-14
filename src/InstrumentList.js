import React, { useState } from "react";
import { instruments } from "../src/data";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// name of the array of objects
const InstrumentList = () => {
  const [filteredList, setFilteredList] = useState(instruments);
  //Search//
  const search = (event) => {
    let query = event.target.value;

    let updatedList = instruments.filter((item) => {
      return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });
    setFilteredList(updatedList);
  };

  return (
    <>
<br />
<h4 id="search-header">Search for your dream instrument:</h4>
      <input className="search__input" type="text" placeholder="Search" onChange={search}/>
      <br />
      <br />
      <br />
      <br />

      <Container id="grid-instrumentlist">
        <Row id="row-one">
          {filteredList.map((instrument, index) => {
            const mystyle = {
             width: '18rem',
             height: '30rem'
            };

            return (
              <Col>
                <Card style={mystyle} id="card">
                  <Card.Img width={200} height={300} variant="top" src={instrument.image} />
                  <Card.Body id="card-body">
                    <Card.Title>{instrument.name}</Card.Title>
                    <Card.Text>{instrument.brand}</Card.Text>
                    <Link to={`/${instrument.id}`}>
                      <Button id="btn">Preview</Button>
                    </Link>
                  </Card.Body>
                </Card>
                <br />
                <br />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default InstrumentList;
