export default function SkillList({ skills }) {
  return (
    <div style={{ marginTop: "15px" }}>
      <p style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "bold", marginBottom: "8px" }}>YETENEKLER</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {skills.map((skill, index) => (
          <span key={index} style={{
            backgroundColor: "#f1f5f9",
            color: "#475569",
            padding: "4px 10px",
            borderRadius: "4px",
            fontSize: "12px"
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}