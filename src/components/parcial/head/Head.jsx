import { Link } from "react-router-dom";
export default function Head() {
  return (
    <div>
      Head
      <div>
        <Link to="/">Home</Link>
        {"     "}
        <Link to="/login">Login</Link>
        {"     "}
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
