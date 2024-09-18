import "../Main.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Section1 = () => {
  const router = useRouter();
  return (
    <div className="course-details-section-one">
      <div className="container">
        <div className="row g-5">
          {" "}
          {/* Add Bootstrap gap class to row */}
          <div className="col-lg-6 col-md-12">
            <div className="menu d-flex justify-content-between align-items-center w-100 pt-4">
              <ul className="list-unstyled d-flex gap-3 mb-0">
                <li>Browse</li>
                <li>Learning Journeys</li>
                <li>Acquiring Core ABAP Skills</li>
              </ul>
            </div>

            <button className="btn text-white course-details-learning-journey-btn mt-3">
              Learning Journey
            </button>

            <h1 className="pt-3">Course Title</h1>

            <div className="course-details-features p-2 mt-3">
              <ul className="text-white list-unstyled d-flex gap-3 mt-1">
                <li>24 Units</li>
                <li>40 hrs</li>
                <li>Free until certification</li>
                <li>Certification</li>
              </ul>
            </div>

            <div className="course-video mt-4">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/JeVSmq1Nrpw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 course-details-video-right">
            <div>
              <Link href="/studentdashboard">
                <button className="btn std-dashboard-btn">
                  Go to Student Dashboard
                </button>
              </Link>
            </div>
            <h3>Overview</h3>
            <p>
              This learning journey will introduce you to the basics of ABAP
              programming.
              <h3 className="mt-4">Learning objectives</h3>
            </p>
            <p>
              After completing this learning journey, developers will have
              gained an overview of the basic properties of the ABAP programming
              language. You will discover how to apply some of the fundamental
              programming techniques , ABAP environment, and will be
              able to develop a simple app with the ABAP RESTful Application
              Programming Model.
            </p>
            <h3 className="mt-4">Your current experience in this topic</h3>
            <ul className="list-unstyled d-flex gap-4 text-white text-center">
              <li>Beginner</li>
              <li>Intermediate</li>
              <li>Advanced</li>
            </ul>

            <h3>Roles</h3>
            <p>Developer</p>
            <h3>Prerequisites</h3>
            <h4 className="text-white">Recommended</h4>
            <ul className="list-unstyled text-white">
              <li>
                Elementary knowledge in any modern programming language such as
                Java, C# or Python
              </li>
              <li>Discovering  Business Technology Platform Mandatory</li>
            </ul>
            <button className="btn bg-white mt-3">Start Learning</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
