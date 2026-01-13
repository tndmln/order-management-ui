import LoginForm from "../components/LoginForm";

export default function LoginPage({ onLogin }) {
  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}
