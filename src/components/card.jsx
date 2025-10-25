import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

// Presentational contact card. Accepts a `contact` object and optional `onRemove(id)` callback.
function ContactCard({ contact = {}, onRemove }) {
    const { id, name = 'Unknown', phone = '—', email = '—' } = contact;

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
                <Button variant="primary" onClick={() => onRemove?.(id)}>
                    Remove
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ContactCard;
