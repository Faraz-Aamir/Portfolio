'use client';

export default function ScrollReveal() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-label-col">
          <span className="about-label heading-lg">ABOUT</span>
        </div>

        <div className="about-content">
          <p className="about-line">
            I&apos;m <strong>Faraz Aamir</strong> — a cybersecurity student
            at <strong>FAST NUCES</strong>, Islamabad. I spend most of my
            time breaking into systems to understand how they work, then
            building them back stronger.
          </p>

          <p className="about-line">
            My work sits at the intersection of <strong>ethical hacking</strong>,
            {' '}<strong>web development</strong>, and <strong>automation</strong>.
            I don&apos;t wait for assignments to learn something new — I pick
            a problem, build a solution, break it, and repeat until it holds.
          </p>

          <p className="about-line">
            When I&apos;m not writing code or hunting vulnerabilities,
            you&apos;ll probably find me exploring new tools, contributing
            to side projects, or figuring out how to make things faster
            and more secure.
          </p>

          <div className="about-divider" />

          <div className="about-availability">
            <span className="about-availability-dot" />
            <span>Open to freelance projects & collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
