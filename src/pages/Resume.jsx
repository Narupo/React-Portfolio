import PageTitle from '../components/PageTitle';
import '../styles/Resume.css'; // Optional if you want to style this page later

function Resume() {
  return (
    <section className="resume">
      <div className="page-section">
        <PageTitle title="Resume" />

        <p>
          You can download my resume{' '}
          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>

        <h2>Proficiencies</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript (ES6+), Typescript</li>
          <li>React, Vite, Node.js</li>
          <li>MongoDB, MySQL</li>
          <li>GraphQL, REST APIs</li>
          <li>Git, GitHub, Responsive Design</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
