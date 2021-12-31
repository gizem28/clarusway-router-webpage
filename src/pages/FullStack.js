import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fs1 from "../img/fs1.png";

const FullStack = () => {
  return (
      <Container style={{height:"81vh", marginTop:20}}>
        <Row>
          <Col md={12} lg={6}>
            <img src={fs1} alt="" className="w-100" />
          </Col>
          <Col>
            <h1>Full Stack Web Development Learning Path</h1>
            <p>
              We know there’s a high demand for professional Full Stack
              Developers and we’re committed to helping students learn all they
              need to know for success as IT professionals! The learning path
              starts with the IT Fundamentals module for beginners and continues
              with front-end and back-end developer course modules. Do you get
              excited about learning new things? Are you ready to give your
              career a boost?
            </p>
            <h1 style={{ marginTop:20}}>Data Science Learning Path</h1>
            <p>
            You will learn how to extract knowledge and insights from different data types with our data science program. You’ll build data analysis and machine learning skills with real-world case studies, and hands-on exercises.
            </p>
            <h1 style={{marginTop:20}}>AWS-DEVOPS Learning Path</h1>
            <p>
            You will learn the fundamentals of cloud computing with using AWS in addition to learning Network basics, Linux, shell scripting, and Git.
            </p>
            <Col>
              <button style={{marginTop:20}} className="btn btn-danger btn-lg">Apply</button>
            </Col>
          </Col>
        </Row>
      </Container>
  );
};

export default FullStack;