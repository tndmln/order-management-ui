import { useState } from "react";
import { loginUser } from "../api/authService";
import { translations } from "../constans/translations"; // Import kamus bahasa

export default function LoginForm({ onLogin, lang }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Ambil teks berdasarkan bahasa dari props
  const t = translations[lang || "en"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error setiap mencoba login
    try {
      const data = await loginUser({ email, password });
      onLogin(data);
    } catch (err) {
      // Menampilkan pesan error sesuai bahasa atau dari API
      setError(err.response?.data?.message || (lang === "id" ? "Login gagal" : "Login failed"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column", // Membuat input berderet ke bawah
        gap: "15px",             // Jarak antar input sama seperti Register
        width: "100%",           // Memenuhi lebar card
      }}
    >
      {error && <p style={{ color: "red", fontSize: "14px", margin: "0" }}>{error}</p>}

      <input
        type="email"
        placeholder={t.emailPlaceholder || "Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={inputStyle}
      />

      <input
        type="password"
        placeholder={t.passwordPlaceholder || "Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        {t.loginBtn || "Login"}
      </button>
    </form>
  );
}

// Gunakan style yang sama dengan RegisterForm agar sinkron
const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box", // Menghindari input meluber
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#222", // Warna gelap sesuai tombol Register kamu
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "10px",
};