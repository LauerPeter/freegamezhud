

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Container, Form, Col, Row } from 'react-bootstrap'; 
import './signIn.css'
function SignIn() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignIn = () => {
    // Implement the sign-in logic here 
  };

  const handleSignUp = () => {
    // Implement the sign-up logic here 
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
