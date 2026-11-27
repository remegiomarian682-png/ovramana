import { useNavigate } from 'react-router-dom';
import { useTasks } from '../App';
import DeadlineCard from '../components/DeadlineCard';

export default function Deadlines() {
  const { tasks } = useTasks();
  const navigate = useNavigate();
  const upcoming = [...tasks].filter((task) => task.status !== 'Completed').sort((a, b) => `${a.dueDate}${a.dueTime}`.localeCompare(`${b.dueDate}${b.dueTime}`));
  return (
    <div className="page">
      <div className="page-heading"><div><p>SCHEDULE</p><h2>Upcoming Deadlines</h2></div><button className="primary-button" type="button" onClick={() => navigate('/tasks')}>Manage tasks</button></div>
      <div className="deadline-list deadline-page-list">{upcoming.map((task) => <DeadlineCard key={task.id} task={task} onView={() => navigate('/tasks')} />)}</div>
      {!upcoming.length && <div className="empty-state"><span>✓</span><h3>You're all caught up</h3><p>No upcoming deadlines.</p></div>}
    </div>
  );
}