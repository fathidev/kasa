import React, { useState } from "react";
import "./Collapse.css";
import arrowDropdown from "../../assets/arrowDropdown.svg";

function Collapse({ titre, description }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="dropdown" id={`dropdown-${titre}`}>
      <div className="dropdown_header">
        <div className="dropdown_title">{titre}</div>
        <span
          className={`dropdown_arrow ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={arrowDropdown} alt="Ouvrir cette liste déroulante" />
        </span>
      </div>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        ouvert && <div className="dropdown_description">{description}</div>
      }
    </div>
  );
}

export default Collapse;
