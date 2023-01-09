import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AuthDetails from '../AuthDetails';

function OurNav() {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Nav className="mr-auto">
                    <Nav.Link style={{ color: '#007bff', fontWeight: 'bold' }} href="/">Home</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link style={{ color: '#007bff', fontWeight: 'bold' }} href="/user">Create User</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link style={{ color: '#007bff', fontWeight: 'bold' }} href="/search">Search Users</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link style={{ color: '#007bff', fontWeight: 'bold' }} href="/change_pass">Change Password</Nav.Link>
                </Nav>
                <Nav className="mr-auto justify-content-end">
                    <AuthDetails className="px-6"/>
                </Nav>
            </Navbar>

        </div>

    )
}

export default OurNav;