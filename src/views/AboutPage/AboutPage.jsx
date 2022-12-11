import "./AboutPage.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import bannerAbout from "../../assets/bannerAbout.png";
import Banner from "../../components/Banner/Banner";

function AboutPage({ data }) {
  return (
    <div className="about_page">
      <Banner className="about_banner" image={bannerAbout} />
      <div className="about_dropdowns">
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
