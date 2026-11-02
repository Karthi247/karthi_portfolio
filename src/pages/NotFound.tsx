import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="not-found">
    <div>
      <h1>404</h1>
      <p>Oops! Page not found</p>
      <Link to="/">Return to Home</Link>
    </div>
  </main>
);

export default NotFound;
