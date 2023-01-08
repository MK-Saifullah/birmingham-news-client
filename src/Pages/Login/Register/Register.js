import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Register = () => {
  const { createUser, updateProfileUser, verifyEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);

    // if (password.length < 6) {
    //   setError("Your password must be at least 6 characters");
    //   return;
    // }
    // if(password !== confirm) {
    //     setError('Passwords do not match')
    //     return;
    // }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // console.log(user.photoURL);
        setError("");
        form.reset();
        handleUpdateProfileUser(name, photoURL);
        handleEmailVerification();
        toast.success('Please check your email for verification!')
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateProfileUser = (name, photoURL) => {
    const profile = {
        displayName : name,
        photoURL : photoURL
    }
    updateProfileUser(profile)
     .then(() => {})
     .catch(error => {
        console.error(error);
     })
  }

  const handleEmailVerification = () => {
    verifyEmail()
    .then(() => {console.log('Email verification sent')})
    .catch(error => console.error(error));
  }

  // For terms and conditions
  const handleAccepted = (event) => {
    // console.log(event.target.checked);
    setAccepted(event.target.checked);
  }
  return (
    <div>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Photo</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Your Photo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} 
            type="checkbox" 
            label={<>Accepts <Link to='/terms'>Terms and Conditions</Link></>} />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <Link to='/login'><Button variant="primary" type="submit" className="m-2"> Login</Button></Link>
        
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </div>
  );
};

export default Register;
