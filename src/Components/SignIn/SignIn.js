
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthPro/AuthPro';



const SignIn = () => {
    const [error, setError] = useState('');
    const { signInu } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/Home';
    const nsvigste = useNavigate()
    const userLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInu(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                nsvigste(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div className='container'>
            <br /><br /> <Form className='form' onSubmit={userLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail" required>
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

                <Button variant="primary " type="submit">
                    Sign In
                </Button><br /><br />
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>

            </Form>
        </div>
    );
};

export default SignIn;