import React from "react";
import './Supermodal.scss'
const Supermodal = ({children, close}) => {
  return (
    <div
      className={"modalContainer"}
      onClick={() => {
        document.body.style.overflowY = "auto";
        close(false);
      }}
    >
      <div className={"modalBody"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Supermodal;
