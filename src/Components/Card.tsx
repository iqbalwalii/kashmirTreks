import Image from "next/image";
import React from "react";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
const CardView = (props) => {
  const router = useRouter();
  const onClickHandler = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/book",
      query: { name: `${props.type}` },
    });
  };
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
            <Button variant="warning" onClick={onClickHandler}>
              Book Now
            </Button>
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
