import React, { useState } from "react";
import { translations } from "../constans/translations";
import { registerUser } from "../api/authService";

export default function RegisterForm({ lang }) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const t = translations[lang || "en"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await registerUser(formData);
      setSuccess("Registration successful!"); // bisa diganti t.registerSuccess
      console.log("User registered:", result);
      // Optional: reset form
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
      }}
    >
      <input
        type="text"
        placeholder={t.namePlaceholder || "Name"}
        style={inputStyle}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder={t.emailPlaceholder || "Email"}
        style={inputStyle}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder={t.passwordPlaceholder || "Password"}
        style={inputStyle}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      
      <button type="submit" style={buttonStyle} disabled={loading}>
        {loading ? "Loading..." : t.register || "Register"}
      </button>

      {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "5px" }}>{success}</p>}
    </form>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#222",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "10px",
};
