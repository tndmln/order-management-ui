import React, { useState } from "react";
import { translations } from "../constans/translations";

export default function RegisterForm({ onRegister, lang }) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  
  // Ambil teks berdasarkan bahasa yang dikirim dari RegisterPage
  const t = translations[lang || "en"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column", // Membuat input berderet ke bawah
        gap: "15px",             // Memberi jarak antar elemen
        width: "100%",           // Mengikuti lebar container (card)
      }}
    >
      <input
        type="text"
        placeholder={t.namePlaceholder || "Name"}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder={t.emailPlaceholder || "Email"}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder={t.passwordPlaceholder || "Password"}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      
      <button type="submit" style={buttonStyle}>
        {t.register || "Register"}
      </button>
    </form>
  );
}

// Style objek agar kode lebih bersih
const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box", // Penting agar padding tidak merusak lebar
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#222", // Sesuai warna di gambar kamu
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "10px",
};