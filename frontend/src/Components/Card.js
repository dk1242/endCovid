import React from "react";
import { Col, Row } from "react-bootstrap";

const Card = (props) => {
  return (
    <Col style={{ alignItems: "center", minWidth: "18rem" }}>
      <div className="card text-dark bg-warning mb-3">
        <div className="card-header">{props.props.helpType}</div>
        <div className="card-body">
          <h5 className="card-title">{props.props.name}</h5>
          <p className="card-text">Address:- {props.props.address}</p>
          <p className="card-text">State:- {props.props.state}</p>
          <p className="card-text">District:- {props.props.district}</p>
          <p className="card-text">Phone No.:- {props.props.phoneNo}</p>
          <p className="card-text">Email:- {props.props.email}</p>
        </div>
      </div>
    </Col>
  );
};

export default Card;
