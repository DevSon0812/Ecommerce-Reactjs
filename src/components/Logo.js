import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <h1>
      <Link to="/" className={`header-item ${className}`}>
        SonKhan's
      </Link>
    </h1>
  );
};

export default Logo;
