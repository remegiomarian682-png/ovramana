export default function Notifications() {
  return (
    <div className="notifications-panel">
      <div className="panel-heading">
        <h3>Notifications</h3>
        <button type="button">Mark all read</button>
      </div>
      <div className="notification-item unread">
        <span className="notification-icon red">!</span>
        <div><strong>Deadline approaching</strong><p>Design presentation is due tomorrow</p></div>
      </div>
      <div className="notification-item">
        <span className="notification-icon blue">✓</span>
        <div><strong>Task completed</strong><p>Algorithms problem set was submitted</p></div>
      </div>
    </div>
  );
}