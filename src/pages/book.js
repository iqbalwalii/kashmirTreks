import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useState } from "react";
import { Holidays, Treks } from "../Types/index";
const Book = () => {
  const [type, setType] = useState("tour");

  return (
    <Container style={{ marginTop: "6rem" }}>
      <h1>{`${type.toUpperCase()} BOOKING FORM`}</h1>
      <ButtonGroup>
        <Button
          variant="danger"
          value="trek"
          onClick={(e) => setType(e.target.value)}
        >
          Trek
        </Button>
        <Button
          variant="success"
          value="tour"
          onClick={(e) => setType(e.target.value)}
        >
          Tour
        </Button>
        <Button
          disabled
          variant="warning"
          value="daytrip"
          onClick={(e) => setType(e.target.value)}
        >
          Day Tour
        </Button>
      </ButtonGroup>
      <h6></h6>
      {type === "tour" ? (
        <Form
          action="https://public.herotofu.com/v1/55bd0490-0983-11ed-be50-e78da9ee852d"
          method="post"
        >
          <p className="text-danger">Tour Details (*)</p>
          <div className="d-flex justify-content-around mb-3">
            <Form.Select
              aria-label="Select Tour"
              style={{ marginRight: "2rem" }}
              name="tour"
              id="tour"
            >
              <option selected disabled>
                Select Tour
              </option>
              {Object.keys(Holidays).map((key, idx) => (
                <option key={idx}>{Holidays[key]}</option>
              ))}
            </Form.Select>
            <Form.Select aria-label="Plan" name="plan" id="plan">
              <option selected disabled>
                Select Plan
              </option>
              <option>Standard</option>
              <option>Deluxe</option>
            </Form.Select>
          </div>
          <p className="text-danger">Personal Details (*)</p>

          <FloatingLabel className="mb-2" label="Enter Email">
            <Form.Control
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-2" label="Enter Name">
            <Form.Control
              type="text"
              name="Name"
              id="Name"
              placeholder="Enter Name"
              required
            />
          </FloatingLabel>
          <p className="text-danger">Address Information (*)</p>
          <div className="d-flex textField">
            <FloatingLabel className="mb-2" label="Address">
              <Form.Control
                type="text"
                name="Address"
                id="Address"
                placeholder="Enter Address"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" label="Country">
              <Form.Control
                type="text"
                name="Country"
                id="Country"
                placeholder="Enter Country"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" label="State">
              <Form.Control
                type="text"
                name="State"
                id="State"
                placeholder="Enter State"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" label="pincode">
              <Form.Control
                type="text"
                name="Pincode"
                id="Pincode"
                placeholder="Enter Pincode"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="ml-2" label="nationality">
              <Form.Control
                type="text"
                name="Nationality"
                id="Nationality"
                placeholder="nationality"
                required
              />
            </FloatingLabel>
          </div>
          <p className="text-danger">
            Pickup and Drop-off Information (Airport, Bus Station or Hotel){" "}
          </p>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                label="Place, Date and Time for Pickup"
              >
                <Form.Control
                  type="text"
                  name="Pickup"
                  id="Pickup"
                  placeholder="Date and Tme"
                  required
                />
              </FloatingLabel>
            </Col>

            <Col xs={12} md={6}>
              <FloatingLabel className="mb-2" label="Date and Time for Flight">
                <Form.Control
                  type="text"
                  name="flightTime"
                  id="flightTime"
                  placeholder="Date and Time for Flight"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                label="Date and Time for Departure"
              >
                <Form.Control
                  type="text"
                  name="Dropoff"
                  id="Dropoff"
                  placeholder="Date and Time for Departure"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel className="mb-2" label="Place of Departure">
                <Form.Control
                  type="text"
                  name="departurePlace"
                  id="departurePlace"
                  placeholder="Place of Departure"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel className="mb-2" label="Group Size">
            <Form.Control
              type="text"
              name="groupSize"
              id="groupSize"
              placeholder="Group Size"
            />
          </FloatingLabel>
          <p>
            <b className="text-success">Details of Group Members</b> (*Please
            double-check the information. The same will be used to acquire
            inner-line permits if applicable)
          </p>
          <FloatingLabel label="your Message">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              name="message"
              id="message"
              style={{ height: "150px" }}
            />
          </FloatingLabel>
          <div className="d-grid">
            <Button
              type="submit"
              style={{ background: "#5B3511" }}
              className="my-2"
            >
              Submit
            </Button>
          </div>
        </Form>
      ) : (
        <Form
          action="https://public.herotofu.com/v1/55bd0490-0983-11ed-be50-e78da9ee852d"
          method="post"
        >
          <p className="text-danger">Tour Details (*)</p>
          <div className="d-flex justify-content-around mb-3">
            <Form.Select
              aria-label="Select Tour"
              style={{ marginRight: "2rem" }}
              name="trek"
              id="trek"
            >
              <option selected disabled>
                Select Trek
              </option>
              {Object.keys(Treks).map((key, idx) => (
                <option key={idx}>{Treks[key]}</option>
              ))}
            </Form.Select>
            <Form.Select aria-label="Plan" name="plan" id="plan">
              <option selected disabled>
                Select Plan
              </option>
              <option>Standard</option>
              <option>Deluxe</option>
            </Form.Select>
          </div>
          <p className="text-danger">Personal Details (*)</p>

          <FloatingLabel className="mb-2" label="Enter Email">
            <Form.Control
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-2" label="Enter Name">
            <Form.Control
              type="text"
              name="Name"
              id="Name"
              placeholder="Enter Name"
              required
            />
          </FloatingLabel>
          <p className="text-danger">Address Information (*)</p>
          <div className="d-flex textField">
            <FloatingLabel className="mb-2" label="Address">
              <Form.Control
                type="text"
                name="Address"
                id="Address"
                placeholder="Enter Address"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" label="Country">
              <Form.Control
                type="text"
                name="Country"
                id="Country"
                placeholder="Enter Country"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" label="State">
              <Form.Control
                type="text"
                name="State"
                id="State"
                placeholder="Enter State"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" label="pincode">
              <Form.Control
                type="text"
                name="Pincode"
                id="Pincode"
                placeholder="Enter Pincode"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="ml-2" label="nationality">
              <Form.Control
                type="text"
                name="Nationality"
                id="Nationality"
                placeholder="nationality"
                required
              />
            </FloatingLabel>
          </div>
          <p className="text-danger">
            Pickup and Drop-off Information (Airport, Bus Station or Hotel){" "}
          </p>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                label="Place, Date and Time for Pickup"
              >
                <Form.Control
                  type="text"
                  name="Pickup"
                  id="Pickup"
                  placeholder="Date and Tme"
                  required
                />
              </FloatingLabel>
            </Col>

            <Col xs={12} md={6}>
              <FloatingLabel className="mb-2" label="Date and Time for Flight">
                <Form.Control
                  type="text"
                  name="flightTime"
                  id="flightTime"
                  placeholder="Date and Time for Flight"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                label="Date and Time for Departure"
              >
                <Form.Control
                  type="text"
                  name="Dropoff"
                  id="Dropoff"
                  placeholder="Date and Time for Departure"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel className="mb-2" label="Place of Departure">
                <Form.Control
                  type="text"
                  name="departurePlace"
                  id="departurePlace"
                  placeholder="Place of Departure"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel className="mb-2" label="Group Size">
            <Form.Control
              type="text"
              name="groupSize"
              id="groupSize"
              placeholder="Group Size"
            />
          </FloatingLabel>
          <p>
            <b className="text-success">Details of Group Members</b> (*Please
            double-check the information. The same will be used to acquire
            inner-line permits if applicable)
          </p>
          <FloatingLabel label="Details of Group Members">
            <Form.Control
              as="textarea"
              placeholder="Details of Group Members"
              name="message"
              id="message"
              style={{ height: "150px" }}
            />
          </FloatingLabel>
          <Row className="mt-3">
            <Col xs={12} md={6}>
              <Form.Select aria-label="Plan" id="diet" name="diet">
                <option selected disabled>
                  Select Diet
                </option>
                <option>Veg</option>
                <option>Non-veg</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={6}>
              <Form.Select aria-label="Plan" name="payment" id="payment">
                <option selected disabled>
                  Mode Of Payment
                </option>
                <option>Bank transfer</option>
                <option>Paypal (+2.5% processing Fee)</option>
              </Form.Select>
            </Col>
          </Row>
          <FloatingLabel label="Additional Comments" className="mt-3">
            <Form.Control
              as="textarea"
              placeholder="Additional Comments"
              name="comments"
              id="comments"
              style={{ height: "150px" }}
            />
          </FloatingLabel>
          <div className="d-grid">
            <Button
              type="submit"
              style={{ background: "#5B3511" }}
              className="my-2"
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Container>
  );
};

export default Book;
