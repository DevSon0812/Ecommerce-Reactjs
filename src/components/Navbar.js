import React from "react";
import { Link } from "react-router-dom";

const displayNav = [
  {
    id: 1,
    display: "Shop",
    path: "/products",
  },
  {
    id: 2,
    display: "Discover",
    path: "/",
  },
  {
    id: 3,
    display: "Secoundhand",
    path: "/",
  },
];

const Navbar = () => {
  return (
    <ul className="nav margin-right">
      {displayNav.map((item) => (
        <li className="nav-item" key={item.id}>
          <Link to={item.path} className="nav-link">
            {item.display}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
