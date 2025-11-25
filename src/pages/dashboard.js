import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  // Check if user is logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedInUser");
    if (!loggedIn) router.push("/login");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>MyDashboard</h2>

        <nav style={styles.nav}>
          <a style={styles.navItem}>🏠 Home</a>
          <a style={styles.navItem}>📝 Notes</a>
          <a style={styles.navItem}>💬 Messages</a>
          <a style={styles.navItem}>⚙️ Settings</a>
        </nav>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <h1>Welcome to your Dashboard 🎉</h1>
        <p>This is your main content area. You can add widgets, charts, or sections here later.</p>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f5f6fa",
    fontFamily: "Arial",
  },

  sidebar: {
    width: "250px",
    backgroundColor: "#1e1e2f",
    color: "white",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },

  logo: {
    fontSize: "24px",
    marginBottom: "30px",
    textAlign: "center",
  },

  nav: {
    flex: 1,
  },

  navItem: {
    display: "block",
    padding: "12px 0",
    fontSize: "18px",
    cursor: "pointer",
  },

  logoutBtn: {
    backgroundColor: "#ff4757",
    border: "none",
    padding: "12px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },

  main: {
    flex: 1,
    padding: "40px",
  },
};