import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notifications from './Notifications';

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="topbar">
      <div>
        <p className="topbar-greeting">Good morning,</p>
        <h1>Alex Morgan</h1>
      </div>
      <div className="topbar-actions">
        <div className="notification-wrap">
          <button className="icon-button" type="button" aria-label="Notifications" onClick={() => setShowNotifications((value) => !value)}>
            <span aria-hidden="true">♢</span>
            <span className="notification-dot" />
          </button>
          {showNotifications && <Notifications />}
        </div>
        <button className="profile-button" type="button" onClick={() => navigate('/profile')} aria-label="Open profile">
          <span className="avatar">AM</span>
          <span className="profile-name">Alex Morgan</span>
          <span aria-hidden="true">⌄</span>
        </button>
      </div>
    </header>
  );
}