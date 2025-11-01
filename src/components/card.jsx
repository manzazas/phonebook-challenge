import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
const ContactCard = (props) => {


    const { id, name, phone, email } = props;
    return (
        <Card style={{ width: '18rem', margin: '0.5rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <div>
                        <strong>Phone:</strong> {phone}
                    </div>
                    <div>
                        <strong>Email:</strong> {email}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


export default ContactCard;
