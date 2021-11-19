import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Headerrrrrr</h1>
      <a href="/home">Home </a>
      <Link to="/about">About</Link>
    </div>
  );
}
