import React from "react";

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
          <a href={item.path} className="nav-link">
            {item.display}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
