// Importing useState hook from React
import { useState } from "react";

// PageCard component function
function PageCard({ title, desc, buttonText, theme, icon }) {
  // State to track whether the mouse is hovering over the card
  const [isHovered, setIsHovered] = useState(false);

  // Returning JSX for the PageCard component
  return (
    <div
      // Setting up classes and styles for the card
      className="page-card rounded d-flex flex-column justify-content-start align-items-center align-items-md-start"
      style={{
        // Setting border color based on theme
        border: `1px solid ${theme}`,
        // Setting background color based on hover state and theme
        backgroundColor: `${isHovered ? theme : "white"}`,
        // Setting text color based on hover state
        color: `${!isHovered ? "black" : "white"}`,
      }}
      // Handling mouse enter event to set hover state to true
      onMouseEnter={() => setIsHovered(true)}
      // Handling mouse leave event to set hover state to false
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Title and icon */}
      <h4 className="d-flex align-items-center gap-3 f">
        {icon}
        <span>{title}</span>
      </h4>
      {/* Description */}
      <p className="desc">{desc}</p>
      {/* Button */}
      <button type="button" className="btn">
        {buttonText}
      </button>
    </div>
  );
}

// Exporting the PageCard component as the default export
export default PageCard;
