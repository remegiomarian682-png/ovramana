export default function TaskCard({ task, onEdit, onDelete, onStatus }) {
  return (
    <article className="task-card">
      <div className="task-card-top">
        <span className={`priority-pill ${task.priority?.toLowerCase()}`}>{task.priority}</span>
        <div className="task-actions">
          <button type="button" onClick={() => onEdit(task)} aria-label={`Edit ${task.title}`}>•••</button>
          <button type="button" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`}>×</button>
        </div>
      </div>
      <p className="task-subject">{task.subject}</p>
      <h3>{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <div className="progress-row">
        <span>Progress</span>
        <strong>{task.progress}%</strong>
      </div>
      <div className="progress-track"><span style={{ width: `${task.progress}%` }} /></div>
      <div className="task-card-footer">
        <span className={`status-pill ${task.status?.toLowerCase().replaceAll(' ', '-')}`}>{task.status}</span>
        <button type="button" className="text-button" onClick={() => onStatus(task)}>
          {task.status === 'Completed' ? 'Reopen' : 'Complete'}
        </button>
      </div>
    </article>
  );
}