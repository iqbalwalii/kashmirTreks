"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          backgroundImage: "url('/assets/images/tulips.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "55vh",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(11,28,14,0.3) 0%, rgba(11,28,14,0.75) 100%)",
          }}
        />
        <Container style={{ position: "relative", zIndex: 1, paddingBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "1.4rem",
              color: "#e8a020",
              marginBottom: "0.25rem",
            }}
          >
            Who we are
          </p>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Your Complete Kashmir<br />Experience
          </h1>
        </Container>
      </div>

      {/* Story */}
      <Container style={{ padding: "4rem 1.5rem" }}>
        <Row className="g-5 align-items-center">
          <Col xs={12} md={6}>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.2rem",
                color: "var(--accent)",
                marginBottom: "0.5rem",
              }}
            >
              Our story
            </p>
            <h2 style={{ fontWeight: 700, color: "var(--dark)", marginBottom: "1.25rem" }}>
              A Kashmir experience built from the inside out
            </h2>
            <p style={{ color: "#444", lineHeight: 1.85 }}>
              Mount Eco is based in Anantnag, Kashmir — owned and operated by people who were born and
              raised in this valley. We know Kashmir not as tourists, but as locals who have lived and
              breathed its seasons, trails, and culture all our lives.
            </p>
            <p style={{ color: "#444", lineHeight: 1.85 }}>
              We started as trekkers and grew into something bigger — a 360° travel company that covers
              everything Kashmir has to offer. Whether you want to summit a peak or float on Dal Lake,
              we&apos;ve got you covered.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <p style={{ color: "#444", lineHeight: 1.85 }}>
              From curated holiday packages — houseboats, gardens, sightseeing, and cultural tours — to
              full trekking expeditions deep into the Himalayas, Mount Eco handles it all. Every detail
              is arranged so you can simply enjoy the journey.
            </p>
            <p style={{ color: "#444", lineHeight: 1.85 }}>
              Families, solo travellers, honeymooners, adventure seekers — we tailor every trip to the
              people taking it. Small groups or large, leisure or adventure, we know how to make Kashmir
              unforgettable for you.
            </p>
          </Col>
        </Row>

        {/* Values */}
        <Row className="g-4 mt-3">
          {[
            { icon: "🏔️", title: "Treks & Adventures", body: "From beginner trails to serious Himalayan expeditions — guided by locals who know every path." },
            { icon: "🌷", title: "Holiday Packages", body: "Houseboats, gardens, sightseeing, culture — complete Kashmir holidays arranged end to end." },
            { icon: "🌿", title: "Local & Eco-Minded", body: "Based in Anantnag, rooted in the valley. We support sustainable travel and local communities." },
          ].map(({ icon, title, body }) => (
            <Col xs={12} md={4} key={title}>
              <div
                style={{
                  background: "#f7faf8",
                  border: "1px solid #e0ede6",
                  borderRadius: "1rem",
                  padding: "2rem 1.5rem",
                  height: "100%",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h5 style={{ fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>{title}</h5>
                <p style={{ color: "#555", marginBottom: 0, lineHeight: 1.7 }}>{body}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
