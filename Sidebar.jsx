import { NavLink, useNavigate } from 'react-router-dom';

const links = [
  ['dashboard', '▦', 'Dashboard'],
  ['tasks', '✓', 'My Tasks'],
  ['deadlines', '◷', 'Deadlines'],
  ['calendar', '□', 'Calendar'],
  ['conflicts', '△', 'Conflicts'],
  ['reports', '▥', 'Reports'],
];

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <button className="brand" type="button" onClick={() => navigate('/dashboard')} aria-label="Go to dashboard">
        <span className="brand-mark"><span>✓</span></span>
        <span>ovramana</span>
      </button>
      <nav className="side-nav" aria-label="Main navigation">
        {links.map(([path, icon, label]) => (
          <NavLink key={path} to={`/${path}`} className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}>
            <span className="side-icon" aria-hidden="true">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <NavLink to="/profile" className={({ isActive }) => `side-link side-profile${isActive ? ' active' : ''}`}>
        <span className="side-icon" aria-hidden="true">⚙</span>
        <span>Settings</span>
      </NavLink>
    </aside>
  );
}