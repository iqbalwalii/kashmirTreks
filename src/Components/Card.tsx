"use client";
import Image from "next/image";
import React from "react";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
const CardView = (props) => {
  const router = useRouter();
  const onClickHandler = (e) => {
    e.preventDefault();
    router.push(`/book?name=${props.type}`);
  };
  return (
    <div>
      <Card style={{ width: "18rem", cursor: "pointer" }}>
        <img
          src={props?.image}
          alt="card image"
        />

        <Card.Body>
          <Card.Title className="text-center">{props?.name}</Card.Title>
        </Card.Body>
        {props?.btn ? (
          <div className="d-grid">
            <Button
              className="btn-gold-custom"
              onClick={onClickHandler}
              style={{ textDecoration: "none" }}
            >
              Book Now
            </Button>
          </div>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default CardView;
