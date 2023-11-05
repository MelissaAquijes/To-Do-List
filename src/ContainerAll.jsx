import React from "react";
import './ContainerAll.css';

function ContainerAll({children}) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export { ContainerAll };