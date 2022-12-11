import React, { useState } from "react";
import "./Dropdown.css";
import arrowDropdown from "../../assets/arrowDropdown.svg";

function Dropdown({ titre, description }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="dropdown" id={`dropdown-${titre}`}>
      <div className="header-dropdown">
        <div className="titre-dropdown">{titre}</div>
        <span
          className={`fleche-dropdown ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={arrowDropdown} alt="Ouvrir cette liste déroulante" />
        </span>
      </div>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        ouvert && <div className="description-dropdown">{description}</div>
      }
    </div>
  );
}

export default Dropdown;
