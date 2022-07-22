import Image from "next/image";
import React from "react";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
const CardView = (props) => {
  return (
    <div>
      {/* <Link href={props?.link}> */}
      <Card style={{ width: "18rem" }}>
        <img
          src={props?.image}
          // width="200px"
          // height="150px"
          alt="card image"
          // layout="responsive"
        />

        <Card.Body>
          <Card.Title className="text-center">{props?.name}</Card.Title>
        </Card.Body>
        {props?.btn ? (
          <div className="d-grid">
            <Link href="/book">
              <Button variant="warning">Book Now</Button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </Card>
      {/* </Link> */}
    </div>
  );
};

export default CardView;
