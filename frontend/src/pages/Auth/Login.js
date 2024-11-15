import './Auth.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import { loginSuccess } from '../../store/slices/authSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  if (isAuthenticated) {
    navigate(`/${user.role}`);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const userData = await login({ email, password });

    if (userData) {
      dispatch(loginSuccess(userData));
      navigate(`/${userData.role}`)
    } else {
      setError('Login failed. Please try again.');
    }
    
  };

  return (
    <form className='form active' id='login-form' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Email</label>
            <input type='email' placeholder='Example@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input type='password' placeholder='At least 8 characters' value={password} onChange={(e) => setPassword(e.target.value)} />
            <a href='#' className='forgot-password'>Forgot Password?</a>
        </div>
        <button className='auth-btn button'>Login</button>
        {error && <p className='error'>{error}</p>}
    </form>
  );
}

export default Login;
