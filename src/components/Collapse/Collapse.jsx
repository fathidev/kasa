import React, { useState } from "react";
import "./Collapse.css";
import arrowCollapse from "../../assets/arrowCollapse.svg";

function Collapse({ titre, description }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="collapse" id={`collapse-${titre}`}>
      <div className="collapse_header">
        <div className="collapse_title">{titre}</div>
        <span
          className={`collapse_arrow ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={arrowCollapse} alt="Ouvrir cette liste déroulante" />
        </span>
      </div>
      {
        /* Si le collapse est à TRUE alors il affichera la description */
        ouvert && <div className="collapse_description">{description}</div>
      }
    </div>
  );
}

export default Collapse;
