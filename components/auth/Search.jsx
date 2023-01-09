import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { Table, Form } from 'react-bootstrap';
import OurNav from './Nav';

const Search = () => {
    const [newName, setNewName] = useState("");
    const [newID, setNewID] = useState(0);
    const [newAddress, setNewAddress] = useState("");
    const [newPhone, setNewPhone] = useState(0);
    const [newEmail, setNewEmail] = useState("");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((user) =>
                Object.values(user).find((value) => value.toString().includes(searchQuery)))
            );
        }

        getUsers();
    }, [searchQuery]);
    return (
        <div className="Crud">

            <Form className="mx-auto w-50" onSubmit={(event) => {
                event.preventDefault();
                setSearchQuery(event.target.elements.search.value);
            }}>

                <OurNav />
                <Form.Group>
                    <Form.Label>Search</Form.Label>
                    <Form.Control
                        type="text"
                        name="search"
                        placeholder="Search..."
                    />
                </Form.Group>
                <div className="d-flex justify-content-center mt-4">
                    <button variant="primary" type="submit" className="mx-auto">
                        Search
                    </button>
                </div>
            </Form>


            <br>
            </br>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.ID}</td>
                                <td>{user.address}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>;
        </div>
    )
}

export default Search;