import './Auth.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import { loginSuccess } from '../../store/slices/authSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const response = await login({ email, password });

    if (response.success) {
      const { data } = response;
      dispatch(loginSuccess(data));
      navigate(`/${data.role}`)
    } else setError(response.message);
    
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
        <button type='submit' className='auth-btn button'>Login</button>
        {error && <p className='error'>{error}</p>}
    </form>
  );
}

export default Login;
