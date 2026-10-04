import { Window, Section } from './window.jsx';

export const Experience = () => (
  <Section id="experience" title="Experience">
    <Window title="experience.log">
      <div className="log">
        <article className="log-entry">
          <h3 className="entry-title">Junior Developer / IT Consultant — Reconomy AB</h3>
          <p className="entry-meta">Internship · 2024</p>
          <p>
            Provided hands-on IT support in a live business environment, troubleshooting computers,
            software, and network issues for staff, and handling installations and hardware repairs.
            Also built and deployed a full-stack employee check-in and time-tracking system with
            session-based authentication, SQL-injection prevention, and a CORS-secured API.
          </p>
        </article>

        <article className="log-entry">
          <h3 className="entry-title">Site maintenance intern — Right by Me</h3>
          <p className="entry-meta">Internship · 2025</p>
          <p>
            Built, updated, and maintained website content and pages in WordPress, handling
            configuration, troubleshooting, and content management, and contributing ideas to
            improve workflows.
          </p>
        </article>
      </div>
    </Window>
  </Section>
);
