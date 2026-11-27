import { useTasks } from '../App';

export default function Reports() {
  const { tasks } = useTasks();
  const completed = tasks.filter((task) => task.status === 'Completed').length;
  const average = tasks.length ? Math.round(tasks.reduce((sum, task) => sum + task.progress, 0) / tasks.length) : 0;
  const subjectCounts = tasks.reduce((counts, task) => {
    counts[task.subject] = (counts[task.subject] || 0) + 1;
    return counts;
  }, {});

  return (
    <div className="page">
      <div className="page-heading"><div><p>INSIGHTS</p><h2>Progress Reports</h2></div></div>
      <section className="report-summary">
        <article><span>Completion rate</span><strong>{tasks.length ? Math.round(completed / tasks.length * 100) : 0}%</strong><p>{completed} of {tasks.length} tasks completed</p></article>
        <article><span>Average progress</span><strong>{average}%</strong><p>Across all active work</p></article>
        <article><span>Subjects</span><strong>{Object.keys(subjectCounts).length}</strong><p>Courses and projects</p></article>
      </section>
      <section className="report-card">
        <div className="section-heading"><div><p>BREAKDOWN</p><h2>Work by subject</h2></div></div>
        {Object.entries(subjectCounts).map(([subject, count]) => (
          <div className="subject-report" key={subject}>
            <div><strong>{subject}</strong><span>{count} {count === 1 ? 'task' : 'tasks'}</span></div>
            <div className="progress-track"><span style={{ width: `${Math.min(count / tasks.length * 100, 100)}%` }} /></div>
          </div>
        ))}
      </section>
    </div>
  );
}