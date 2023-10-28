

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
    const Uname = e.target.Uname.value;
    const password = e.target.password.value;

    const apiUrl = "/api/signin"; // URL to check
    console.log("API URL for Sign In:", apiUrl);

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Uname, password }),
      });
      if (response.status === 200) {
        // Redirect to user dashboard or update UI
      } else {
        const data = await response.json();
        alert(`Sign-in failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const Uname = e.target.Uname.value 
    const password = e.target.password.value;

    const apiUrl = "/api/signup"; // URL to check
    console.log("API URL for Sign Up:", apiUrl);
    
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, Uname, password }),
      });
      if (response.status === 201) {
        alert("Sign-up successful. You can now log in.");
      } else {
        const data = await response.json();
        alert(`Sign-up failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  }


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
                  <Form.Control type="text" placeholder="Username" name="Uname" />
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
                  <Form.Control type="text" placeholder="Username" name="Uname" />
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
