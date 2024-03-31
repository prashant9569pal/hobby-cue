// Importing icons and styles
import IconPlus from "../../icons/IconPlus"; // Importing Plus icon component
import "./addpage.style.css"; // Importing add page styles

// AddPage component function
function AddPage() {
  // Rendering JSX for the AddPage component
  return (
    <section className="add-page">
      {/* Add page section */}
      <div className="add-card rounded d-flex flex-column justify-content-start align-items-md-start align-items-center w-100">
        {/* Title */}
        <h4>
          <IconPlus /> <span className="m-3">Add your own</span>
        </h4>
        {/* Description */}
        <p className="mt-4 mb-4">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        {/* Button */}
        <button type="button" className="btn btn-outline">
          Add new
        </button>
      </div>
    </section>
  );
}

// Exporting the AddPage component as the default export
export default AddPage;
