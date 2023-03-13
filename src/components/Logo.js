import React from "react";

const Logo = ({ className }) => {
  return (
    <h1>
      <a href="/" className={`header-item ${className}`}>
        SonKhan's
      </a>
    </h1>
  );
};

export default Logo;
