import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('deadlineUser', email || 'Alex Morgan');
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <Link className="landing-brand auth-brand" to="/"><span className="brand-mark"><span>✓</span></span><strong>DeadlineApp</strong></Link>
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-heading"><p>WELCOME BACK</p><h1>Log in to your account</h1></div>
        <label>Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></label>
        <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" required /></label>
        <div className="auth-options"><label><input type="checkbox" /> Remember me</label><button type="button" className="link-button">Forgot password?</button></div>
        <button className="primary-button auth-submit" type="submit">Log in</button>
        <p className="auth-switch">New here? <Link to="/register">Create an account</Link></p>
      </form>
    </div>
  );
}