import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddContactModal({ show, onClose, onAdd }) {
    const [form, setForm] = useState({ name: '', phone: '', email: '' });

    const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

    const submit = (e) => {
        e.preventDefault();
        const name = form.name.trim();
        const phone = form.phone.trim();
        if (!name || !phone) return; // simple check
        onAdd({ id: Date.now(), name, phone, email: form.email.trim() });
        setForm({ name: '', phone: '', email: '' });
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add Contact</Modal.Title>
            </Modal.Header>

            <Form onSubmit={submit}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="contactName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={form.name} onChange={update('name')} required placeholder="Full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control value={form.phone} onChange={update('phone')} required placeholder="(555) 010-0110" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={form.email} onChange={update('email')} type="email" placeholder="email@example.com" />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setForm({ name: '', phone: '', email: '' }); onClose(); }}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">Add Contact</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default AddContactModal;
