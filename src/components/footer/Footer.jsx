// Importing icons and styles
import IconFacebook from "../icons/IconFacebook"; // Importing Facebook icon component
import IconGooglePlus from "../icons/IconGooglePlus"; // Importing Google Plus icon component
import IconInstagram from "../icons/IconInstagram"; // Importing Instagram icon component
import IconMessage from "../icons/IconMessage"; // Importing Message icon component
import IconPintrest from "../icons/IconPintrest"; // Importing Pinterest icon component
import IconTelegram from "../icons/IconTelegram"; // Importing Telegram icon component
import IconTwitter from "../icons/IconTwitter"; // Importing Twitter icon component
import IconYouTube from "../icons/IconYouTube"; // Importing YouTube icon component
import "./footer.style.css"; // Importing footer styles

// Footer component function
function Footer() {
  // Rendering JSX for the Footer component
  return (
    <>
      {/* Footer section */}
      <footer className="footer d-flex flex-column justify-content-between flex-md-row">
        {/* Category 1 */}
        <div className="link-category">
          <h6 className="pb-2">Hobbycue</h6>
          <ul className="p-0">
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Our Services</li>
            </a>
            <a href="#">
              <li>Work with Us</li>
            </a>
            <a href="#">
              <li>FAQ</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        {/* Category 2 */}
        <div className="link-category ">
          <h6 className="pb-2">Hobbycue</h6>
          <ul className="p-0">
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Our Services</li>
            </a>
            <a href="#">
              <li>Work with Us</li>
            </a>
            <a href="#">
              <li>FAQ</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        {/* Category 3 */}
        <div className="link-category">
          <h6 className="pb-2">Quick Links</h6>
          <ul className="p-0">
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Our Services</li>
            </a>
            <a href="#">
              <li>Work with Us</li>
            </a>
            <a href="#">
              <li>FAQ</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        {/* Category 4 */}
        <div className="link-category">
          <h6 className="pb-2">Social Media</h6>
          <ul className="p-0 d-flex justify-content-between">
            {/* Social media icons */}
            <a href="https://www.facebook.com/">
              <IconFacebook />
            </a>
            <a href="https://www.twitter.com">
              <IconTwitter />
            </a>
            <a href="https://www.instagram.com">
              <IconInstagram />
            </a>
            <a href="https://www.pinterest.com">
              <IconPintrest />
            </a>
            <a href="https://www.googleplus.com">
              <IconGooglePlus />
            </a>
            <a href="https://www.youtube.com">
              <IconYouTube />
            </a>
            <a href="https://www.telegram.com">
              <IconTelegram />
            </a>
            <a href="./">
              <IconMessage />
            </a>
          </ul>
          {/* Invite Friends section */}
          <h6 className="pb-2 mt-4">Invite Friends</h6>
          <div className="input-group mb-3">
            {/* Email input */}
            <input
              type="text"
              className="form-control"
              placeholder="Email ID"
              aria-label="Email ID"
              aria-describedby="button-addon2"
            />
            {/* Invite button */}
            <button className="btn" type="button" id="invite">
              Invite
            </button>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <span
        className="p-3 w-100 d-block text-center"
        style={{ backgroundColor: "#F7F5F9", fontWeight: "500" }}
      >
        © Purple Cues Private Limited
      </span>
    </>
  );
}

// Exporting the Footer component as the default export
export default Footer;
