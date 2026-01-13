import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, onLogout }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // center konten navbar
        backgroundColor: "#f5f5f5", // sama dengan HomePage
        padding: "10px 0",
        borderBottom: "1px solid #ddd",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Link Home */}
        <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>
          Home
        </Link>

        {/* Tombol Logout jika sudah login */}
        {isLoggedIn && (
          <button
            onClick={onLogout}
            style={{
              padding: "6px 12px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
}
