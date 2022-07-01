import Image from "next/image";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { isNull } from "util";

const CardView = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Image
          src="https://res.cloudinary.com/kashmir-ensueno1/image/upload/v1656346084/IMG-20220618-WA0042_h2wukd.jpg"
          width="200px"
          height="150px"
          alt="card image"
          layout="responsive"
        />

        <Card.Body>
          <Card.Title className="text-center">{props?.name}</Card.Title>
        </Card.Body>
        {props?.btn ? (
          <div className="d-grid">
            <Button style={{ background: "#004220" }} className="my-1">
              Enquire
            </Button>
            <Button variant="warning">Book Now</Button>
          </div>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default CardView;
