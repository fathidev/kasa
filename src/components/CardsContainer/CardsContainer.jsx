import "./CardsContainer.css";
import Records from "../../data/records.json";
import { Link } from "react-router-dom";
function CardsContainer() {
  return (
    <div className="cards_container">
      {/* generation des cards */}
      {Records.map((record) => {
        return (
          <div className="card" key={record.id}>
            <div className="card_image">
              <Link to={"products/" + record.id} className="card_link">
                <div className="card_overlay">
                  <img
                    className="card_vignette"
                    src={record.cover}
                    alt={record.title}
                  />
                </div>
                <div className="card_title">
                  <h2>{record.title}</h2>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsContainer;
