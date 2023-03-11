import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <div className="from-group">
      <h4 className="from-title">login</h4>
      <form className="from-login">
        <Input type="text" placeholder="Email" min="3" max="50" />
      </form>
    </div>
  );
};

export default Login;
