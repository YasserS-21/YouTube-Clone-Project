import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom"
import "./Nav.css";

export default function Nav() {
  const [headerColor, setHeaderColor] = useState({backgroundColor: "white"})   
useEffect(()=> {
   setHeaderColor({backgroundColor: "red"})
   if(window.location.href.indexOf("/about") > -1){
    setHeaderColor({backgroundColor: "white"})
  } else {
    setHeaderColor({headerColor: "red"})
  }
},[headerColor])
  return (
    <header style={headerColor}>
      <article>
        <h1>
        <Link to="/">YouTube</Link>
        </h1>
      </article>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
