import { useNavigate } from 'react-router-dom';
import { useTasks } from '../App';

export default function Conflicts() {
  const { tasks } = useTasks();
  const navigate = useNavigate();
  const active = tasks.filter((task) => task.status !== 'Completed');
  const conflicts = active.filter((task, index) => active.some((other, otherIndex) =>
    otherIndex > index && task.dueDate === other.dueDate
  ));

  return (
    <div className="page">
      <div className="page-heading"><div><p>WORKLOAD</p><h2>Schedule Conflicts</h2></div></div>
      {conflicts.length ? conflicts.map((task) => {
        const matches = active.filter((other) => other.dueDate === task.dueDate);
        return (
          <article className="conflict-card" key={task.id}>
            <div className="conflict-symbol">!</div>
            <div className="conflict-copy"><span>SAME-DAY DEADLINE</span><h3>{task.dueDate}</h3><p>{matches.map((item) => item.title).join(' · ')}</p></div>
            <button type="button" className="secondary-button" onClick={() => navigate('/calendar')}>Open calendar</button>
          </article>
        );
      }) : (
        <div className="conflict-clear"><span>✓</span><h3>No conflicts detected</h3><p>Your upcoming deadlines are spaced out well.</p></div>
      )}
    </div>
  );
}