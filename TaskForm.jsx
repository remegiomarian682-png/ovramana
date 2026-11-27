import { useEffect, useState } from 'react';

const emptyTask = {
  title: '',
  subject: '',
  dueDate: '',
  dueTime: '09:00',
  priority: 'Medium',
  status: 'To Do',
  progress: 0,
  description: '',
};

export default function TaskForm({ task, onSubmit, onCancel }) {
  const [form, setForm] = useState(emptyTask);

  useEffect(() => {
    setForm(task ? { ...emptyTask, ...task } : emptyTask);
  }, [task]);

  const change = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    onSubmit({
      ...form,
      progress: form.status === 'Completed' ? 100 : Number(form.progress),
    });
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onCancel()}>
      <form className="task-modal" onSubmit={submit}>
        <div className="modal-heading">
          <div><p>Task details</p><h2>{task ? 'Edit task' : 'Create a new task'}</h2></div>
          <button type="button" className="modal-close" onClick={onCancel}>×</button>
        </div>
        <label>Task title<input name="title" value={form.title} onChange={change} placeholder="What needs to be done?" required /></label>
        <label>Subject<input name="subject" value={form.subject} onChange={change} placeholder="Course or project" required /></label>
        <label>Description<textarea name="description" value={form.description} onChange={change} placeholder="Add notes or requirements" rows="3" /></label>
        <div className="form-grid">
          <label>Due date<input type="date" name="dueDate" value={form.dueDate} onChange={change} required /></label>
          <label>Due time<input type="time" name="dueTime" value={form.dueTime} onChange={change} required /></label>
          <label>Priority<select name="priority" value={form.priority} onChange={change}><option>High</option><option>Medium</option><option>Low</option></select></label>
          <label>Status<select name="status" value={form.status} onChange={change}><option>To Do</option><option>In Progress</option><option>Completed</option></select></label>
        </div>
        {task && <label>Progress<input type="range" name="progress" min="0" max="100" value={form.progress} onChange={change} /><span className="range-value">{form.progress}%</span></label>}
        <div className="modal-actions">
          <button type="button" className="secondary-button" onClick={onCancel}>Cancel</button>
          <button type="submit" className="primary-button">{task ? 'Save changes' : 'Create task'}</button>
        </div>
      </form>
    </div>
  );
}