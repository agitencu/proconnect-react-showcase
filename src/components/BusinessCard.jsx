import SkillList from "./SkillList";
import "./BusinessCard.css";

export default function BusinessCard({ name, title, isOpenToWork, skills }) {
  const initials = name.split(' ').map(n=>n[0]).join('');

  return (
    <div className="card-container">
      <div className="card-image-placeholder">
        {initials}
      </div>
      
      <h2>{name}</h2>
      <span className="job-title">{title}</span>
      
      <div className={`status-badge ${isOpenToWork ? "status-available" : "status-busy"}`}>
        <span className="status-dot"></span>
        {isOpenToWork ? "İletişime Açık" : "Meşgul"}
      </div>

      <SkillList skills={skills} />
    </div>
  );
}