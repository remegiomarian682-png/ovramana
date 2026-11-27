import { useEffect, useState } from 'react';

const DEFAULT_PROFILE = {
  name: 'Alex Morgan',
  email: 'alex.morgan@example.com',
};

export default function Profile() {
  const [profile, setProfile] = useState(() => {
    try {
      const savedProfile = JSON.parse(localStorage.getItem('deadlineProfile'));
      return savedProfile || {
        ...DEFAULT_PROFILE,
        name: localStorage.getItem('deadlineUser') || DEFAULT_PROFILE.name,
      };
    } catch {
      return DEFAULT_PROFILE;
    }
  });
  const [password, setPassword] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!saved) return undefined;
    const timer = window.setTimeout(() => setSaved(false), 2500);
    return () => window.clearTimeout(timer);
  }, [saved]);

  const change = (event) => {
    const { name, value } = event.target;
    setProfile((current) => ({ ...current, [name]: value }));
    setSaved(false);
  };

  const submit = (event) => {
    event.preventDefault();

    if (password && password.length < 8) {
      window.alert('Password must contain at least 8 characters.');
      return;
    }

    localStorage.setItem('deadlineProfile', JSON.stringify(profile));
    localStorage.setItem('deadlineUser', profile.name);
    setPassword('');
    setSaved(true);
  };

  const initials = profile.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((name) => name.charAt(0).toUpperCase())
    .join('') || 'AM';

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p>ACCOUNT</p>
          <h2>Profile &amp; Settings</h2>
        </div>
      </div>

      <form className="profile-card" onSubmit={submit}>
        <div className="profile-avatar">
          <span aria-label={`${profile.name} profile`}>{initials}</span>
        </div>

        <div className="profile-fields">
          <label htmlFor="profile-name">
            Full name
            <input
              id="profile-name"
              name="name"
              value={profile.name}
              onChange={change}
              autoComplete="name"
              required
            />
          </label>

          <label htmlFor="profile-email">
            Email address
            <input
              id="profile-email"
              type="email"
              name="email"
              value={profile.email}
              onChange={change}
              autoComplete="email"
              required
            />
          </label>

          <label htmlFor="profile-password">
            New password
            <input
              id="profile-password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setSaved(false);
              }}
              placeholder="Leave blank to keep current password"
              minLength="8"
              autoComplete="new-password"
            />
          </label>
        </div>

        <div className="modal-actions">
          <button className="primary-button" type="submit" aria-live="polite">
            {saved ? 'Saved successfully' : 'Save changes'}
          </button>
        </div>
      </form>
    </div>
  );
}