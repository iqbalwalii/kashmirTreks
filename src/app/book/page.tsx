"use client";
import React, { Suspense, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Spinner,
} from "react-bootstrap";
import { useSearchParams } from "next/navigation";
import { Holidays, Treks } from "../../Types/index";
import holidaysData from "../../data/holidays";
import treksData from "../../data/treks";

function BookContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("name");
  const [selectedHolidayKey, setSelectedHolidayKey] = useState("");
  const [selectedTrekKey, setSelectedTrekKey] = useState("");

  return (
    <Container style={{ marginTop: "6rem" }}>
      {type ? (
        <h1>{`${type.toUpperCase()} BOOKING FORM`}</h1>
      ) : (
        <h1>Tour BOOKING FORM</h1>
      )}
      {(type === "tour" || type === null) && (
        <Form action="https://api.web3forms.com/submit" method="post">
          <p className="text-danger">Tour Details (*)</p>
          <div className="d-flex justify-content-around mb-3">
            <input
              type="hidden"
              name="access_key"
              value="19b0b0b8-10fc-4187-87d0-9075ae1f9440"
            ></input>
            <Form.Select
              aria-label="Select Tour"
              style={{ marginRight: "2rem" }}
              name="tour"
              id="tour"
              value={selectedHolidayKey}
              onChange={(e) => setSelectedHolidayKey(e.target.value)}
            >
              <option value="" disabled>
                Select Tour
              </option>
              {Object.keys(Holidays).map((key) => (
                <option key={key} value={key}>
                  {Holidays[key as keyof typeof Holidays]}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              aria-label="Plan"
              name="plan"
              id="plan"
              defaultValue=""
              disabled={!selectedHolidayKey}
            >
              <option value="" disabled>
                {selectedHolidayKey ? "Select Plan" : "Select a tour first"}
              </option>
              {selectedHolidayKey &&
                (
                  holidaysData[selectedHolidayKey as keyof typeof holidaysData]
                    ?.plans ?? []
                ).map((plan, idx) => (
                  <option key={idx} value={plan.name}>
                    {plan.name} — ₹{plan.rate.toLocaleString("en-IN")}
                  </option>
                ))}
            </Form.Select>
          </div>
          <p className="text-danger">Personal Details (*)</p>
          <FloatingLabel className="mb-2" controlId="email" label="Enter Email">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-2" controlId="Name" label="Enter Name">
            <Form.Control
              type="text"
              name="Name"
              placeholder="Enter Name"
              required
            />
          </FloatingLabel>
          <p className="text-danger">Address Information (*)</p>
          <div className="d-flex textField">
            <FloatingLabel className="mb-2" controlId="Address" label="Address">
              <Form.Control
                type="text"
                name="Address"
                placeholder="Enter Address"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="Country" label="Country">
              <Form.Control
                type="text"
                name="Country"
                placeholder="Enter Country"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="State" label="State">
              <Form.Control
                type="text"
                name="State"
                placeholder="Enter State"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="Pincode" label="Pincode">
              <Form.Control
                type="text"
                name="Pincode"
                placeholder="Enter Pincode"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              className="ml-2"
              controlId="Nationality"
              label="Nationality"
            >
              <Form.Control
                type="text"
                name="Nationality"
                placeholder="Nationality"
                required
              />
            </FloatingLabel>
          </div>
          <p className="text-danger">
            Pickup and Drop-off Information (Airport, Bus Station or Hotel)
          </p>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                controlId="Pickup"
                label="Place, Date and Time for Pickup"
              >
                <Form.Control
                  type="text"
                  name="Pickup"
                  placeholder="Date and Time"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                controlId="flightTime"
                label="Date and Time for Flight"
              >
                <Form.Control
                  type="text"
                  name="flightTime"
                  placeholder="Date and Time for Flight"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                controlId="Dropoff"
                label="Date and Time for Departure"
              >
                <Form.Control
                  type="text"
                  name="Dropoff"
                  placeholder="Date and Time for Departure"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                controlId="departurePlace"
                label="Place of Departure"
              >
                <Form.Control
                  type="text"
                  name="departurePlace"
                  placeholder="Place of Departure"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel
            className="mb-2"
            controlId="groupSize"
            label="Group Size"
          >
            <Form.Control
              type="text"
              name="groupSize"
              placeholder="Group Size"
            />
          </FloatingLabel>
          <p>
            <b className="text-success">Details of Group Members</b> (*Please
            double-check the information. The same will be used to acquire
            inner-line permits if applicable)
          </p>
          <FloatingLabel controlId="message" label="Your Message">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              name="message"
              style={{ height: "150px" }}
            />
          </FloatingLabel>
          <div className="d-grid">
            <Button type="submit" className="btn-accent-custom my-2">
              Submit
            </Button>
          </div>
        </Form>
      )}
      {type === "trek" && (
        <Form action="https://api.web3forms.com/submit" method="post">
          <p className="text-danger">Trek Details (*)</p>
          <div className="d-flex justify-content-around mb-3">
            <input
              type="hidden"
              name="access_key"
              value="19b0b0b8-10fc-4187-87d0-9075ae1f9440"
            ></input>
            <Form.Select
              aria-label="Select Trek"
              style={{ marginRight: "2rem" }}
              name="trek"
              id="trek"
              value={selectedTrekKey}
              onChange={(e) => setSelectedTrekKey(e.target.value)}
            >
              <option value="" disabled>
                Select Trek
              </option>
              {Object.keys(Treks).map((key) => (
                <option key={key} value={key}>
                  {Treks[key as keyof typeof Treks]}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              aria-label="Plan"
              name="plan"
              id="plan"
              defaultValue=""
              disabled={!selectedTrekKey}
            >
              <option value="" disabled>
                {selectedTrekKey ? "Select Plan" : "Select a trek first"}
              </option>
              {selectedTrekKey &&
                (
                  treksData[selectedTrekKey as keyof typeof treksData]?.plans ??
                  []
                ).map((plan, idx) => (
                  <option key={idx} value={plan.name}>
                    {plan.name} — ₹{plan.rate.toLocaleString("en-IN")}
                  </option>
                ))}
            </Form.Select>
          </div>
          <p className="text-danger">Personal Details (*)</p>
          <FloatingLabel className="mb-2" controlId="email" label="Enter Email">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-2" controlId="Name" label="Enter Name">
            <Form.Control
              type="text"
              name="Name"
              placeholder="Enter Name"
              required
            />
          </FloatingLabel>
          <p className="text-danger">Address Information (*)</p>
          <div className="d-flex textField">
            <FloatingLabel className="mb-2" controlId="Address" label="Address">
              <Form.Control
                type="text"
                name="Address"
                placeholder="Enter Address"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="Country" label="Country">
              <Form.Control
                type="text"
                name="Country"
                placeholder="Enter Country"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="State" label="State">
              <Form.Control
                type="text"
                name="State"
                placeholder="Enter State"
                required
              />
            </FloatingLabel>
            <FloatingLabel className="mb-2" controlId="Pincode" label="Pincode">
              <Form.Control
                type="text"
                name="Pincode"
                placeholder="Enter Pincode"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              className="ml-2"
              controlId="Nationality"
              label="Nationality"
            >
              <Form.Control
                type="text"
                name="Nationality"
                placeholder="Nationality"
                required
              />
            </FloatingLabel>
          </div>
          <p className="text-danger">
            Pickup and Drop-off Information (Airport, Bus Station or Hotel)
          </p>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                controlId="Pickup"
                label="Place, Date and Time for Pickup"
              >
                <Form.Control
                  type="text"
                  name="Pickup"
                  placeholder="Date and Time"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                controlId="flightTime"
                label="Date and Time for Flight"
              >
                <Form.Control
                  type="text"
                  name="flightTime"
                  placeholder="Date and Time for Flight"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                controlId="Dropoff"
                label="Date and Time for Departure"
              >
                <Form.Control
                  type="text"
                  name="Dropoff"
                  placeholder="Date and Time for Departure"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={6}>
              <FloatingLabel
                className="mb-2"
                controlId="departurePlace"
                label="Place of Departure"
              >
                <Form.Control
                  type="text"
                  name="departurePlace"
                  placeholder="Place of Departure"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel
            className="mb-2"
            controlId="groupSize"
            label="Group Size"
          >
            <Form.Control
              type="text"
              name="groupSize"
              placeholder="Group Size"
            />
          </FloatingLabel>
          <p>
            <b className="text-success">Details of Group Members</b> (*Please
            double-check the information. The same will be used to acquire
            inner-line permits if applicable)
          </p>
          <FloatingLabel controlId="message" label="Details of Group Members">
            <Form.Control
              as="textarea"
              placeholder="Details of Group Members"
              name="message"
              style={{ height: "150px" }}
            />
          </FloatingLabel>
          <Row className="mt-3">
            <Col xs={12} md={6}>
              <Form.Select
                aria-label="Diet"
                id="diet"
                name="diet"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Diet
                </option>
                <option>Veg</option>
                <option>Non-veg</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={6}>
              <Form.Select
                aria-label="Payment"
                name="payment"
                id="payment"
                defaultValue=""
              >
                <option value="" disabled>
                  Mode Of Payment
                </option>
                <option>Bank transfer</option>
                <option>Paypal (+2.5% processing Fee)</option>
              </Form.Select>
            </Col>
          </Row>
          <FloatingLabel
            controlId="comments"
            label="Additional Comments"
            className="mt-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Additional Comments"
              name="comments"
              style={{ height: "150px" }}
            />
          </FloatingLabel>
          <div className="d-grid">
            <Button type="submit" className="btn-accent-custom my-2">
              Submit
            </Button>
          </div>
        </Form>
      )}
      {type === "daytour" && (
        <Form>
          <FloatingLabel className="mb-3" controlId="Name" label="Name">
            <Form.Control
              type="text"
              name="Name"
              placeholder="Enter Name"
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-3" controlId="email" label="Email">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="phoneNumber"
            label="Phone Number"
          >
            <Form.Control
              type="text"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-3" controlId="Address" label="Address">
            <Form.Control
              type="text"
              name="Address"
              placeholder="Enter Address"
              required
            />
          </FloatingLabel>
          <FloatingLabel className="mb-3" controlId="fee" label="Amount">
            <Form.Control
              type="text"
              name="fee"
              defaultValue={400}
              placeholder="Amount"
              required
              disabled
            />
          </FloatingLabel>
          <Form.Check
            type="checkbox"
            label="I Accept the fact that if anything would happen to me during this trek, Nobody but myself will be held accountable for it. I understand that I will be responsible for my own safety and I will be held accountable for any damage I cause to others."
            id="customControlValidation"
            required
          />
          <div className="d-grid">
            <Button className="my-3 btn-accent-custom" type="submit" disabled>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Container>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      }
    >
      <BookContent />
    </Suspense>
  );
}
