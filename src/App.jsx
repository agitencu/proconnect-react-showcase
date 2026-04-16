import Header from "./components/Header";
import BusinessCard from "./components/BusinessCard";
import Footer from "./components/Footer";

function App() {
  const users = [
    { id: 1, name: "Arda Yılmaz", title: "Senior Frontend Engineer", isOpenToWork: true, skills: ["React", "TypeScript", "Next.js", "GraphQL"] },
    { id: 2, name: "Selin Demir", title: "Data Scientist", isOpenToWork: false, skills: ["Python", "TensorFlow", "SQL", "AWS"] },
    { id: 3, name: "Can Özkan", title: "Product Manager", isOpenToWork: true, skills: ["Agile", "Jira", "Product Strategy", "Figma"] },
    { id: 4, name: "Elif Akın", title: "Cyber Security Analyst", isOpenToWork: true, skills: ["Ethical Hacking", "Linux", "Python", "Docker"] },
    { id: 4, name: "Ekin sekın", title: "Cyber Security Analyst", isOpenToWork: true, skills: ["Ethical Hacking", "Linux", "Python", "Docker"] }
    
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      
      <main style={{ 
        flex: 1, 
        padding: "40px 20px", 
        maxWidth: "1300px", 
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box" 
      }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "30px", 
          justifyItems: "center"
        }}>
          {users.map((user) => (
            <BusinessCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;