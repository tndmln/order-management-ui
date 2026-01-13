import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import { translations } from "../constans/translations"; 

export default function RegisterPage({ onRegister }) {
  const navigate = useNavigate();

  const userLanguage = navigator.language.startsWith("id") ? "id" : "en";
  const t = translations[userLanguage]; // Sekarang 't' akan digunakan di bawah

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
        <RegisterForm onRegister={onRegister} lang={userLanguage} />

        <p style={{ marginTop: "25px", fontSize: "14px", color: "#666" }}>
          {/* GUNAKAN VARIABEL 't' DI SINI */}
          {t.alreadyHaveAccount}{" "}
          <span
            onClick={() => navigate("/")}
            style={{
              color: "#007bff",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            {t.loginHere}
          </span>
        </p>
      </div>
    </div>
  );
}