import { Navigate, useParams } from "react-router-dom";
// components
import Dropdown from "../../components/Dropdown/Dropdown";
import Products from "../../data/records.json";
import Carrousel from "../../components/Caroussel/Caroussel";
import { Star } from "../../components/Star/Star";
import Tags from "../../components/Tags/Tags";
import Contact from "../../components/Contact/Contact";
// css
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const product = Products.find((product) => product.id === id);
  console.log(product);

  if (!product) {
    return <Navigate to="/404" />;
  }

  const {
    equipments,
    description,
    rating,
    pictures,
    tags,
    host,
    title,
    location,
  } = product;
  const stars = [1, 2, 3, 4, 5].map((n) => (
    <Star key={n} selected={n <= Number(rating)} />
    // compare n to rating and cast rating to number
  ));
  const equipementsLogement = equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <>
      <div className="product_page">
        <Carrousel pictures={pictures} />
        <div className="product_content">
          <div className="product_informations">
            <h1 className="product_title">{title}</h1>
            <p className="product_location">{location}</p>
            <div className="product_tags">
              {tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="product_starshost">
            <Contact host={host} />
            <div className="product_stars">{stars}</div>
          </div>
        </div>
        <div className="product_equipments">
          <Dropdown
            className="description"
            titre="Description"
            description={description}
          />
          <Dropdown
            className="equipment"
            titre="Équipements"
            description={equipementsLogement}
            // key={equipementsLogement}
          />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
