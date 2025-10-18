import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


function ContactCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <Card.Text>
         Information about the person
        </Card.Text>
        <Button variant="primary">Remove From Contacts</Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;