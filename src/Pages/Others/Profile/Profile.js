import React, { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const emailRef = useRef(user?.email);

  const [name, setName] = useState(user?.displayName)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    setName(event.target.name.value)
    console.log(event.target.name.value)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>My Profile: under construction</h2>
      <p>
        <label for="">Your name</label> :
        <input readOnly type="text" name="name" value={name} />
      </p>
      <p>
        <label for="">Your name</label> :
        <input
          ref={emailRef}
          readOnly
          type="email"
          name="email"
          value={user?.email}
        />
      </p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
