export default function CalendarView({ tasks = [], month, onMonthChange, onSelectTask }) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)];
  const monthLabel = month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const shiftMonth = (amount) => onMonthChange(new Date(year, monthIndex + amount, 1));

  return (
    <section className="calendar-card">
      <div className="calendar-toolbar">
        <h2>{monthLabel}</h2>
        <div><button type="button" onClick={() => shiftMonth(-1)}>‹</button><button type="button" onClick={() => shiftMonth(1)}>›</button></div>
      </div>
      <div className="calendar-weekdays">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => <span key={day}>{day}</span>)}</div>
      <div className="calendar-grid">
        {cells.map((day, index) => {
          const dateKey = day ? `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` : '';
          const dayTasks = tasks.filter((task) => task.dueDate === dateKey);
          return (
            <div className={`calendar-day${day ? '' : ' empty'}`} key={`${dateKey}-${index}`}>
              {day && <><span className="day-number">{day}</span>{dayTasks.map((task) => (
                <button type="button" className={`calendar-task ${task.priority?.toLowerCase()}`} key={task.id} onClick={() => onSelectTask(task)}>{task.title}</button>
              ))}</>}
            </div>
          );
        })}
      </div>
    </section>
  );
}