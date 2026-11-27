import { useState } from 'react';
import { useTasks } from '../App';
import CalendarView from '../components/CalendarView';

export default function Calendar() {
  const { tasks } = useTasks();
  const [month, setMonth] = useState(new Date(2026, 10, 1));
  const [selected, setSelected] = useState(null);
  return (
    <div className="page">
      <div className="page-heading"><div><p>PLAN AHEAD</p><h2>Calendar</h2></div></div>
      <CalendarView tasks={tasks} month={month} onMonthChange={setMonth} onSelectTask={setSelected} />
      {selected && <div className="calendar-detail"><button type="button" onClick={() => setSelected(null)}>×</button><p>{selected.subject}</p><h3>{selected.title}</h3><span>{selected.dueDate} at {selected.dueTime}</span></div>}
    </div>
  );
}