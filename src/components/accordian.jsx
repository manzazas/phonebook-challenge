import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import contactsexamples from '../data/contacts.json';
function PhonebookAccordian() {
    const [contacts, setContacts] = useState(contactsexamples);

    return (
        <Accordion defaultActiveKey="0">
            {contacts.map((contact, index) => (
                <Accordion.Item eventKey={index.toString()} key={contact.id}>
                    <Accordion.Header>{contact.name}</Accordion.Header>
                    <Accordion.Body>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{contact.name}</Card.Title>
                                <Card.Text>
                                    <strong>Phone:</strong> {contact.phone}
                                    <br />
                                    <strong>Email:</strong> {contact.email}
                                </Card.Text>
                                <Button variant="primary">Call</Button>{' '}
                                <Button variant="outline-secondary">Edit</Button>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default PhonebookAccordian;
