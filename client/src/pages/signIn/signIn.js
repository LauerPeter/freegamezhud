

import { useState } from "react";
import './signIn.css';
import { useAuthDispatch } from '../../context/authContext';

function SignIn() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const authDispatch = useAuthDispatch();

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.status === 200) {
        const userData = await response.json();
        
        if (userData && userData.Uname) {
          setUsername(userData.Uname);
          authDispatch({ type: 'SIGN_IN', payload: { Uname: userData.Uname } });
          console.log('user signed in');
        } else {
          console.log('No Uname found in userData');
        }
      } else {
        const data = await response.json();
        alert(`Sign-in failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const Uname = e.target.Uname.value;
    const password = e.target.password.value;

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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {showSignUp ? (
            <div className="form-container">
              <h2>Sign Up</h2>
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" name="email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username" name="Uname" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
            </div>
          ) : (
            <div className="form-container">
              <h2>Sign In</h2>
              <form onSubmit={handleSignIn}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" name="email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
              </form>
            </div>
          )}
          <button onClick={toggleSignUp} className="btn btn-secondary mt-3">
            {showSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
