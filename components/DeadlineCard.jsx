export default function DeadlineCard({ task, onView }) {
  const date = new Date(`${task.dueDate}T${task.dueTime || '09:00'}`);
  const label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return (
    <article className="deadline-card">
      <div className={`priority-bar ${task.priority?.toLowerCase()}`} />
      <div className="deadline-main">
        <div className="deadline-date">
          <strong>{label}</strong>
          <span>{task.dueTime}</span>
        </div>
        <div className="deadline-info">
          <p>{task.subject}</p>
          <h3>{task.title}</h3>
        </div>
        <button type="button" className="text-button" onClick={onView}>View</button>
      </div>
    </article>
  );
}