import Header from "./components/header";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        {/* About Section */}
        <section className="section-light text-center">
          <h2 className="text-4xl font-bold flex justify-center items-center">
            <span className="icon">👤</span> About Me
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Hi, I’m Grantly Tong, a dedicated software developer and student at SAIT. 
            I have a strong focus on programming languages and web development, excelling in solving problems with innovative solutions.
          </p>
        </section>

        {/* Skills Section */}
        <section className="section-dark">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center flex justify-center items-center">
              <span className="icon">💻</span> Skills
            </h2>
            <ul className="mt-8 text-lg">
              <li>Programming Languages: Java, Python, JavaScript</li>
              <li>Frontend Development: HTML, CSS, React, Next.js</li>
              <li>Web Design: Tailwind CSS, UI/UX Principles</li>
              <li>Database Management: SQL, MySQL</li>
              <li>Version Control: Git/GitHub</li>
              <li>Strong problem-solving and analytical skills</li>
              <li>Team collaboration and project management</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="section-light">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold flex justify-center items-center">
              <span className="icon">🎓</span> Education
            </h2>
            <ul className="mt-8 text-lg">
              <li>
                <strong>Southern Alberta Institute of Technology (SAIT)</strong>
                <p>Diploma in Software Development (Expected: 2025)</p>
              </li>
              <li>
                <strong>TSAC (High School, Hong Kong)</strong>
                <p>Year of Graduation: 2018</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-light text-center">
          <h2 className="text-4xl font-bold flex justify-center items-center">
            <span className="icon">📞</span> Contact Me
          </h2>
          <p className="mt-4 text-lg">Feel free to reach out for collaborations or inquiries.</p>
          <p className="mt-2">
            Email: <a href="mailto:grantly.tong@edu.sait.ca">grantly.tong@edu.sait.ca</a>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/grantly2031" target="_blank" rel="noopener noreferrer" className="icon">
              <span>🐙</span> GitHub
            </a>
            <a href="https://linkedin.com/in/grantly-tong" target="_blank" rel="noopener noreferrer" className="icon">
              <span>🔗</span> LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
