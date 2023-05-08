import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('')
    const {signIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();

    useTitle('login')

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            // navigate('/');
            if(user.emailVerified) {
                navigate(from, {replace: true})
            }
            else {
                toast.error('Your email is not verified, please verify your email')
            }

        })
        .catch(error => {
            console.error(error.message)
            setError(error.message)
        })
        .finally( () => {
            setLoading(false);
        })
    }
    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required/>
                {/* <Form.Text className="text-danger">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <Link to='/register'> <Button variant="primary" type="submit">Register</Button></Link>
           
            <div className='text-danger'>
                {error}
            </div>
    </Form>
    );
};

export default Login;