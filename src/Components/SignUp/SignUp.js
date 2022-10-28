import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthPro/AuthPro';


const SignUp = () => {
    const [error, setError] = useState('');
    const { creatUser, userProfile } = useContext(AuthContext)

    const userDetail = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name);

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                console.log(user);
                forUserProfile(name)

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const forUserProfile = (name) => {
        const profile = {
            displayName: name
        }
        userProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className='container'>
            <br /><br /> <Form onSubmit={userDetail} className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button><br /><br />
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default SignUp;