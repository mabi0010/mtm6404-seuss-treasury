import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h2>Seuss Treasury</h2>
      <Link to="/">Books</Link> |{" "}
      <Link to="/quotes">Quotes</Link>
    </div>
  );
}