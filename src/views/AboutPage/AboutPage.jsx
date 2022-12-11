import "./AboutPage.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import bannerAbout from "../../assets/bannerAbout.png";
import Banner from "../../components/Banner/Banner";

function AboutPage({ data }) {
  return (
    <div className="about-page">
      <Banner className="banner-about" image={bannerAbout} />
      <div className="container_dropdown">
        {data.map((item) => (
          <Dropdown
            titre={item.title}
            key={item.id}
            description={item.content}
          ></Dropdown>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
