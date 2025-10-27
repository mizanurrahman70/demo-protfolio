export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" fill="#e0e0e0"/>
                <circle cx="100" cy="80" r="30" fill="#999"/>
                <ellipse cx="100" cy="150" rx="50" ry="40" fill="#999"/>
              </svg>
            </div>
          </div>
          <div className="about-text">
            <p>
              I'm a passionate developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I love
              turning complex problems into simple, elegant solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or sharing knowledge with the developer community.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
