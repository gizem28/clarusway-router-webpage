import { Row, Col, Container } from "react-bootstrap";
import MyCard from "./MyCard";

const Courses = ({ data }) => {
  return (
    <Container className="text-center">
      <Row className="d-flex justify-content-center">
        {data.map((course) => {
          return (
            <Col
              key={course.id}
              className="mr-3 d-flex justify-content-center"
              xs={12}
              md={6}
              lg={4}
            >
              <MyCard course={course} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Courses;