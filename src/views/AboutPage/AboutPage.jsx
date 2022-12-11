import "./AboutPage.css";
import Collapse from "../../components/Collapse/Collapse";
import bannerAbout from "../../assets/bannerAbout.png";
import Banner from "../../components/Banner/Banner";

function AboutPage({ data }) {
  return (
    <div className="about_page">
      <Banner className="about_banner" image={bannerAbout} />
      <div className="about_dropdowns">
        {data.map((item) => (
          <Collapse
            titre={item.title}
            key={item.id}
            description={item.content}
          ></Collapse>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
