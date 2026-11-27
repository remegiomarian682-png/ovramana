export default function ConflictAlert({ tasks = [] }) {
  if (!tasks.length) return null;
  return (
    <div className="conflict-alert">
      <span className="conflict-symbol">!</span>
      <div>
        <strong>Schedule conflict detected</strong>
        <p>{tasks.map((task) => task.title).join(' and ')} are due close together.</p>
      </div>
      <button type="button" className="text-button">Review</button>
    </div>
  );
}