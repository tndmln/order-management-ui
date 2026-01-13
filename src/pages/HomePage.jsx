import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { translations } from "../constans/translations"; 

export default function HomePage({ onLogin }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1. Logika Deteksi Bahasa Device
  // navigator.language akan mengambil kode bahasa browser (misal: 'id-ID' atau 'en-US')
  const userLanguage = navigator.language.startsWith("id") ? "id" : "en";
  
  // 2. Ambil objek teks berdasarkan bahasa yang terdeteksi
  const t = translations[userLanguage];

  const handleLogin = (userData) => {
    if (onLogin) onLogin(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          padding: "40px 30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        {!isLoggedIn ? (
          <>
            {/* 3. Oper props language ke LoginForm agar placeholder-nya juga berubah */}
            <LoginForm onLogin={handleLogin} lang={userLanguage} />

            <p style={{ 
              marginTop: "25px", 
              fontSize: "14px", 
              color: "#666",
              display: "block" 
            }}>
              {/* Menggunakan teks dari translations */}
              {t.noAccount}{" "}
              <span
                onClick={() => navigate("/register")}
                style={{
                  color: "#007bff",
                  cursor: "pointer",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                {t.register}
              </span>
            </p>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "20px" }}>{t.welcome}</h2>
            <button
              onClick={handleLogout}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              {t.logout}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}