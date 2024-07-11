import { Link } from "react-router-dom";
import { socialLinks } from "../constants/index.js";
const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together!
      </p>
      {/* <Link to="/contact" className="btn">
        Contact
      </Link> */}
      <div className = "flex gap-10 text-center">
        {socialLinks.map((link, index) => (
          <Link to={link.link} key={index} className="btn">
            {link.name}  
            <img src={link.iconUrl} alt={link.name} className="w-6 h-6 ml-2 justify-center items-center" />          
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CTA;
