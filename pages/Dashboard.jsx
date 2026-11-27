import { useNavigate } from 'react-router-dom';
import { useTasks } from '../App';
import StatusCard from '../components/StatusCard';
import DeadlineCard from '../components/DeadlineCard';
import ConflictAlert from '../components/ConflictAlert';

export default function Dashboard() {
  const { tasks } = useTasks();
  const navigate = useNavigate();
  const completed = tasks.filter((task) => task.status === 'Completed').length;
  const inProgress = tasks.filter((task) => task.status === 'In Progress').length;
  const upcoming = [...tasks].filter((task) => task.status !== 'Completed').sort((a, b) => `${a.dueDate}${a.dueTime}`.localeCompare(`${b.dueDate}${b.dueTime}`)).slice(0, 4);
  const highPriority = tasks.filter((task) => task.priority === 'High' && task.status !== 'Completed');

  return (
    <div className="page dashboard-page">
      <div className="page-heading"><div><p>OVERVIEW</p><h2>Dashboard</h2></div><button className="primary-button" type="button" onClick={() => navigate('/tasks')}>+ Add task</button></div>
      <section className="status-grid">
        <StatusCard label="Total tasks" count={tasks.length} icon="▤" tone="purple" />
        <StatusCard label="In progress" count={inProgress} icon="◷" tone="blue" />
        <StatusCard label="Completed" count={completed} icon="✓" tone="green" />
        <StatusCard label="High priority" count={highPriority.length} icon="!" tone="orange" />
      </section>
      {highPriority.length >= 2 && <ConflictAlert tasks={highPriority.slice(0, 2)} />}
      <section className="dashboard-section">
        <div className="section-heading"><div><p>NEXT UP</p><h2>Upcoming deadlines</h2></div><button type="button" className="text-button" onClick={() => navigate('/deadlines')}>View all →</button></div>
        <div className="deadline-list">{upcoming.map((task) => <DeadlineCard key={task.id} task={task} onView={() => navigate('/tasks')} />)}</div>
      </section>
    </div>
  );
}