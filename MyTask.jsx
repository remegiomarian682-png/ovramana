import { useMemo, useState } from 'react';
import { useTasks } from '../App';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';

export default function MyTask() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const visibleTasks = useMemo(() => tasks.filter((task) => {
    const matchesFilter = filter === 'All' || task.status === filter;
    const haystack = `${task.title} ${task.subject}`.toLowerCase();
    return matchesFilter && haystack.includes(search.toLowerCase());
  }), [tasks, filter, search]);

  const submit = (task) => {
    if (editing) updateTask(editing.id, task);
    else addTask(task);
    setFormOpen(false);
    setEditing(null);
  };

  const edit = (task) => { setEditing(task); setFormOpen(true); };
  const remove = (id) => {
    if (window.confirm('Delete this task?')) deleteTask(id);
  };
  const toggleStatus = (task) => updateTask(task.id, {
    status: task.status === 'Completed' ? 'To Do' : 'Completed',
    progress: task.status === 'Completed' ? 0 : 100,
  });

  return (
    <div className="page">
      <div className="page-heading"><div><p>YOUR WORK</p><h2>My Tasks</h2></div><button className="primary-button" type="button" onClick={() => { setEditing(null); setFormOpen(true); }}>+ New task</button></div>
      <div className="task-toolbar">
        <div className="filter-tabs">{['All', 'To Do', 'In Progress', 'Completed'].map((name) => <button type="button" className={filter === name ? 'active' : ''} key={name} onClick={() => setFilter(name)}>{name}</button>)}</div>
        <input className="search-input" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search tasks…" aria-label="Search tasks" />
      </div>
      {visibleTasks.length ? <div className="task-grid">{visibleTasks.map((task) => <TaskCard key={task.id} task={task} onEdit={edit} onDelete={remove} onStatus={toggleStatus} />)}</div> :
        <div className="empty-state"><span>✓</span><h3>No tasks found</h3><p>Try another filter or create a new task.</p></div>}
      {formOpen && <TaskForm task={editing} onSubmit={submit} onCancel={() => { setFormOpen(false); setEditing(null); }} />}
    </div>
  );
}