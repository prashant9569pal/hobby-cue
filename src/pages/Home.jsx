// Importing necessary components from their respective directories
import Footer from "../components/footer/Footer"; // Importing the Footer component
import Header from "../components/header/Header"; // Importing the Header component
import AddPage from "../components/sections/AddPage/AddPage"; // Importing the AddPage component
import End from "../components/sections/End/End"; // Importing the End component
import Hero from "../components/sections/Hero/Hero"; // Importing the Hero component
import Pages from "../components/sections/Pages/Pages"; // Importing the Pages component
import Testimonials from "../components/sections/Testimonials/Testimonials"; // Importing the Testimonials component

// Home component function
function Home() {
  // Returning JSX for the Home component
  return (
    <>
      {/* Rendering the Header component */}
      <Header />
      {/* Rendering the Hero component */}
      <Hero />
      {/* Rendering the Pages component */}
      <Pages />
      {/* Rendering the AddPage component */}
      <AddPage />
      {/* Rendering the Testimonials component */}
      <Testimonials />
      {/* Rendering the End component */}
      <End />
      {/* Rendering the Footer component */}
      <Footer />
    </>
  );
}

// Exporting the Home component as the default export
export default Home;
