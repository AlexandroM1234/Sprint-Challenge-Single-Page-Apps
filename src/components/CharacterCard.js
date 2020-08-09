import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

export default function CharacterCard(character) {
  return (
    <div>
      <Card body inverse style={{ backgroundColor: "red" }}>
        <CardBody>
          <CardTitle>Name:{character.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}
