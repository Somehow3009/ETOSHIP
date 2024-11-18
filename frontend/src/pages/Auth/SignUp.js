import React, { useState } from 'react';
import { register } from '../../services/authService';
import './Auth.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await register({ email, password });
      setSuccess('Registration successful! Please log in.');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form className='form active' id='signup-form' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Email</label>
            <input type='email' placeholder='Example@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input type='password' placeholder='At least 8 characters' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='form-group'>
            <label>Confirm Password</label>
            <input type='password' placeholder='At least 8 characters' />
        </div>
        <button className='auth-btn button'>Sign Up</button>
    </form>
  );
}

export default SignUp;
