import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { Form } from 'react-bootstrap';
import OurNav from './Nav';

const CreateUser = () => {
    const [newName, setNewName] = useState("");
    const [newID, setNewID] = useState(0);
    const [newAddress, setNewAddress] = useState("");
    const [newPhone, setNewPhone] = useState(0);
    const [newEmail, setNewEmail] = useState("");
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, ID: newID, address: newAddress, phone: newPhone, email: newEmail });
        alert("User Created");
    }

    return (
        <div className="Create">
            <Form className="mx-auto w-50" onSubmit={(event) => { event.preventDefault(); createUser(); }}>
                <OurNav />
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name..."
                        onChange={(event) => {
                            setNewName(event.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(event) => {
                            setNewID(event.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Address..."
                        onChange={(event) => {
                            setNewAddress(event.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Phone..."
                        onChange={(event) => {
                            setNewPhone(event.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Email..."
                        onChange={(event) => {
                            setNewEmail(event.target.value);
                        }}
                    />
                </Form.Group>
                <div className="d-flex justify-content-center mt-4">
                    <button variant="primary" type="submit" className="mx-auto"> Create User</button>
                </div>
            </Form>


        </div>
    )
}

export default CreateUser;