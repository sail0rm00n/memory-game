import React, { Component } from "react";
import Col from "../Col";
import "./Card.css";

const Card = props => (
    <Col>
        <div className="notACard">
            <img className="img-fluid" onClick={props.onClick}
            src={props.image}
            alt=''/>
        </div>
    </Col>
);

export default Card;