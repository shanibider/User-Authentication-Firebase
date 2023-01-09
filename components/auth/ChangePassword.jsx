import { onAuthStateChanged, updatePassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { Card, Form, Button } from 'react-bootstrap';
import OurNav from './Nav';

function ChangePass() {
    const [password, setPassword] = useState('');
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const changePassword = (e) => {
        e.preventDefault();
        updatePassword(auth.currentUser, password).then(() => {
            console.log('Password updated successfully');
            alert('Password updated successfully');
        }).catch((error) => {
            console.log(error);
        });
    };


    return (

        <Card className="w-50 mx-auto">
            <OurNav />
            <Card.Body>

                <div>
                    <h1>Change Password</h1>

                    <div>
                        {authUser ? (
                            <>
                                <Form onSubmit={changePassword}>
                                    <Form.Group>
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                    <div className="d-flex justify-content-center mt-4">
                                        <Button type="submit">Change Password</Button>
                                    </div>
                                </Form>

                            </>
                        ) : (
                            <div>
                                <p>Only accessible to signed-in users.</p>
                            </div>
                        )}
                    </div>

                </div>

            </Card.Body>
        </Card>


    );
}

export default ChangePass;
