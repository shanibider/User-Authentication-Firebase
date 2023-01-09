import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { Card, Form, Button } from 'react-bootstrap';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
            alert("Signup Success");
        }).catch((error) => {
            console.log(error);
            alert("You are alredy registered");
        })
    }

    return (
        <Card className="w-50 mx-auto">
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form onSubmit={signUp}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center mt-4">
                        <Button type='submit'>Sign Up</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default SignUp;