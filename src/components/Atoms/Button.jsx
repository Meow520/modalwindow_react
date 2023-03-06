import React from "react";

export const Button = ({ size, color, onclick, disable, label }) => {
  const classname = `${size} ${color} ${"rounded-lg px-5 py-3"}`;
  return (
    <div>
      <button className={classname} onClick={onclick} disabled={disable}>{label}</button>
    </div>
  );
};
