import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <Link className="landing-brand" to="/"><span className="brand-mark"><span>✓</span></span><strong>DeadlineApp</strong></Link>
        <div><Link className="landing-login" to="/login">Log in</Link><Link className="primary-button" to="/register">Get started</Link></div>
      </nav>
      <main className="landing-hero">
        <div className="hero-copy">
          <span className="eyebrow">STAY ORGANIZED. STAY AHEAD.</span>
          <h1>Turn deadlines into <em>done.</em></h1>
          <p>Plan assignments, avoid scheduling conflicts, and keep every important deadline in one clear view.</p>
          <div className="hero-actions"><Link className="primary-button large" to="/register">Create free account</Link><Link className="secondary-button large" to="/login">I already have an account</Link></div>
        </div>
        <div className="hero-preview">
          <div className="preview-header"><span className="preview-logo">✓</span><div><b>My day</b><small>Tuesday, November 24</small></div></div>
          <div className="preview-task"><span className="preview-check" /><div><small>DESIGN</small><b>Project presentation</b></div><strong>9:00 AM</strong></div>
          <div className="preview-task"><span className="preview-check" /><div><small>DATABASE</small><b>Group report</b></div><strong>5:00 PM</strong></div>
          <div className="preview-progress"><div><span>Weekly progress</span><strong>72%</strong></div><div className="progress-track"><span style={{ width: '72%' }} /></div></div>
        </div>
      </main>
    </div>
  );
}