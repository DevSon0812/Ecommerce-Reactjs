import React from "react";

import Input from "./Input";

const InputItem = () => {
  return (
    <div>
      <Input
        className="header-input"
        type="text"
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default InputItem;
