import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react';
import { auth } from '../../firebase'
import { Card, Form, Button } from 'react-bootstrap';
import OurNav from './Nav';


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
            alert("Login Success");
        }).catch((error) => {
            console.log(error);
            alert("Invalid email or password");
        })
    }

    return (
        <Card className="w-50 mx-auto">
            <OurNav />
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                <Form onSubmit={signIn}>
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
                        <Button type="submit">Log In</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default SignIn;