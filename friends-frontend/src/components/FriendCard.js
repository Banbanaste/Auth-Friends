import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const FriendCard = props => {
  const deleteFriend = id => {
    props.deleteFriend(id);
  };

  return (
    <Col sm="4" style={{ marginTop: "30px" }}>
      <Card body>
        <CardTitle>{props.name}</CardTitle>
        <CardText>
          Age: {props.age} <br /> Email: {props.email}
        </CardText>
        <Button color="primary">Edit</Button>
        <Button
          color="danger"
          style={{ marginTop: "10px" }}
          onClick={() => {
            deleteFriend(props.id);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
};

export default FriendCard;
