import { Link } from "react-router-dom"
import "./Nav.css";

export default function Nav() {
  return (
    <header>
      <article>
        <h1>
          Youtube
        </h1>
      </article>
      <nav>
        <ul>
          <li>
           <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
