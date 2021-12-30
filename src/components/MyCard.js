import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyCard = (props) => {
  const navigate = useNavigate();
  const { text, name, img, link } = props.course;
  return (
    <Card style={{ width: "29rem", margin:20 }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{color: "#C400FF", fontWeight:"bolder"}} >{name}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          style={{ background: "#C400FF"}}
          onClick={() => navigate(`/${link}`)}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
