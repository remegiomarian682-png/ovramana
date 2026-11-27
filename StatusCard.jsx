export default function StatusCard({ label, count, icon, tone }) {
  return (
    <article className="status-card">
      <div className={`status-icon ${tone}`}><span>{icon}</span></div>
      <div>
        <strong>{count}</strong>
        <p>{label}</p>
      </div>
    </article>
  );
}