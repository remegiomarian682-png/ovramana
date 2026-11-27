import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const change = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    localStorage.setItem('deadlineUser', form.name);
    navigate('/dashboard');
  };
  return (
    <div className="auth-page">
      <Link className="landing-brand auth-brand" to="/"><span className="brand-mark"><span>✓</span></span><strong>DeadlineApp</strong></Link>
      <form className="auth-card" onSubmit={submit}>
        <div className="auth-heading"><p>GET STARTED</p><h1>Create your account</h1></div>
        <label>Full name<input name="name" value={form.name} onChange={change} placeholder="Alex Morgan" required /></label>
        <label>Email address<input type="email" name="email" value={form.email} onChange={change} placeholder="you@example.com" required /></label>
        <label>Password<input type="password" name="password" value={form.password} onChange={change} placeholder="At least 8 characters" minLength="8" required /></label>
        <label className="terms-label"><input type="checkbox" required /> I agree to the Terms and Privacy Policy</label>
        <button className="primary-button auth-submit" type="submit">Create account</button>
        <p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p>
      </form>
    </div>
  );
}