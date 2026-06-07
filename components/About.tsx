'use client';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-label-col">
          <span className="about-label heading-lg">ABOUT</span>
        </div>

        <div className="about-content">
          <p className="about-line">
            I&apos;m <strong>Faraz Aamir</strong>, a Cyber Security
            undergraduate at <strong>FAST NUCES</strong>, currently in my
            3rd semester. I build practical projects in{' '}
            <strong>C++</strong>, <strong>Python</strong>, and{' '}
            <strong>Web Development</strong>, explore ethical hacking,
            and love solving real-world security challenges.
          </p>

          <p className="about-line">
            Passionate about <strong>open source</strong>,{' '}
            <strong>Linux</strong>, and{' '}
            <strong>secure software engineering</strong> — I&apos;m always
            looking for the next problem to crack and the next tool to master.
          </p>

          <div className="about-divider" />

          <div className="about-availability">
            <span className="about-availability-dot" />
            <span>Open to freelance projects &amp; collaborations</span>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-resume-link"
          >
            VIEW RESUME
            <span className="about-resume-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
