import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Development Intern</h4>
                <h5>CodeAlpha</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently Working on frontend web development projects using modern technologies. Built responsive user interfaces, improved website design, and gained hands-on experience in creating interactive web applications. Strengthened skills in HTML, CSS, JavaScript, and frontend frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Pinnacle Labs Pvt Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently doing a one-month internship focused on practical web development. Developed and optimized websites, enhanced coding practices, and worked on real-world projects to improve software development skills and problem-solving abilities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer Trainee</h4>
                <h5>Seeding Minds</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Successfully completed intensive MERN Stack training focused on full-stack development. Built scalable web applications using MongoDB, Express.js, React.js, and Node.js. Learned RESTful APIs, GitHub collaboration, CI/CD basics, and deployment workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
