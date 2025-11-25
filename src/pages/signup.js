import { useState } from "react";
import { getUsers, saveUsers } from "../data/users";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = getUsers();

    // Basic validations
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const exists = users.find((u) => u.email === email);
    if (exists) {
      setError("Email already exists.");
      return;
    }

    users.push({ email, password });
    saveUsers(users);

    alert("Account created successfully!");
    router.push("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#5b3116ff",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          borderRadius: "12px",
          background: "#8f7e68ff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Create Account</h1>

        {error && (
          <div
            style={{
              background: "#ffe5e5",
              padding: "10px",
              borderRadius: "6px",
              color: "#b30000",
              marginBottom: "10px",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSignup}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#1c291fff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Sign Up
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}