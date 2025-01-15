
const Footer = () => {

  const categories = ["Women", "Men", "Children"];
  const quickLinks = ["Login", "Registration"];
  const contactDetails = [
    { label: "Phone", value: "+977-9852062099", href: "tel:+9779852062099" },
    { label: "Email", value: "admin@info.com.np", href: "mailto:admin@info.com.np" },
  ];




  return (
    <footer className="text-white py-5 bg-dark">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3 pb-4">
            <h2>Sasto Deal</h2>
            <div className="pt-3 pe-5">
              This is an ecommerce website for your fashionable world. We bring
              you the choice, of yours.
            </div>
          </div>
          <div className="col-md-3  pb-4">
            <h3 className="mb-3">Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <a href={`#${category.toLowerCase()}`}>{category}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 pb-4">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 pb-4">
            <h3 className="mb-3">Get In Touch</h3>
            <ul>
              {contactDetails.map((contact, index) => (
                <li key={index}>
                  <a href={contact.href}>{contact.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row spotlight py-5">
          <div className="col-md-4">
            <div className="d-flex justify-content-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-truck"
                viewBox="0 0 16 16"
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path>
              </svg>

              <h3 className="ps-2">Free Delivery</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-cash"
                viewBox="0 0 16 16"
              >
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path>
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"></path>
              </svg>

              <h3 className="ps-2">Buy Back Guarantee</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-credit-card-2-back"
                viewBox="0 0 16 16"
              >
                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"></path>
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"></path>
              </svg>

              <h3 className="ps-2">Secure Payments</h3>
            </div>
          </div>


        </div>

        <div className="row">
          <div className="col-md-12 text-center pt-5">
            <p>Sasto Deal &copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
