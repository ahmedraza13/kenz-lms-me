import studyimage from '../../../public/images/before-login-page-section-three-image.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../main.css";

const Section3 = () => {
  return (
    <div className="container my-5 before-login-page-section-three">
      <div className="row align-items-center">
        {/* Left Column with Image */}
        <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0 pe-lg-5">
          <img
            src={studyimage.src}
            alt="Study Image"
            className="img-fluid"
          />
        </div>

        {/* Right Column with Text */}
        <div className="col-lg-6 col-md-6 col-12 ps-lg-3">
          <h1>The future of learning at Kenz</h1>
          <p>
            Grow your skills. Future proof your career. Learn Kenz for free,
            anywhere, anytime.
          </p>
          <p>
            Not subscribed to SAP Learning Hub yet? Sign up for our new premium
            guided learning package and gain access to exclusive learning
            materials, certification exam attempts, expert-led digital live
            sessions, on-demand hands-on practice environments, and advanced
            analytics with learning management features to accelerate your
            learning and certification process.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
