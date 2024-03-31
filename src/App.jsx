// Importing CSS files for styling
import "./App.css"; // Importing custom CSS styles
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Importing Bootstrap icons CSS

// Importing the Home component from the pages directory
import Home from "./pages/Home";

// Main component function
function App() {
  // Returning JSX for the App component
  return (
    <>
      {/* Rendering the Home component */}
      <Home />
    </>
  );
}

// Exporting the App component as the default export
export default App;
