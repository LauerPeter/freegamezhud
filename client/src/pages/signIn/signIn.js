

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Container, Form, Col, Row } from 'react-bootstrap'; 
import './signIn.css'

function SignIn() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Make an API request to the backend for sign-in
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Uname: username, password }),
      });

      if (response.ok) {
        // Sign-in successful
        const data = await response.json();
        // Store the JWT token or perform further actions
      } else {
        // Handle sign-in failure, e.g., show an error message
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Make an API request to the backend for sign-up
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Uname: username, email, password }),
      });

      if (response.ok) {
        // Sign-up successful
        const data = await response.json();
        // Store the JWT token or perform further actions
      } else {
        // Handle sign-up failure, e.g., show an error message
      }
    } catch (error) {
      // Handle network or other errors
    }
  };


  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Welcome to the WEBSITE</h1>
      <Row className="justify-content-center">
        <Col md="6">
          {showSignUp ? (
            <div>
              {/* Render Sign Up Form */}
              <h2>Sign Up</h2>
              <Form onSubmit={handleSignUp}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Email" name="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder="Username" name="username" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Button type="submit" variant="primary">Sign Up</Button>
              </Form>
            </div>
          ) : (
            <div>
              {/* Render Sign In Form */}
              <h2>Sign In</h2>
              <Form onSubmit={handleSignIn}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Username" name="username" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Button type="submit" variant="primary">Sign In</Button>
              </Form>
            </div>
          )}
          <Button onClick={toggleSignUp} variant="secondary" className="mt-3">
            {showSignUp ? 'Sign In' : 'Sign Up'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
