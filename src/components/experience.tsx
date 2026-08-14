const experiences = [
  {
    company: "Docusoft India Private Limited",
    role: "Frontend Developer",
    period: "2022 - Present",
    description: "Developed and maintained React.js-based enterprise applications with responsive design and performance optimization. Integrated third-party APIs like QuickBooks, Xero, Stripe, Twilio, Calendly, and HubSpot, including authentication, payments, and real-time communication features."
  },
  // {
  //   company: "TechNexus Solutions",
  //   role: "Junior Web Developer",
  //   period: "2021 - 2022",
  //   description: "Assisted in building UI components for various client projects using HTML, CSS, and jQuery. Collaborated with designers to ensure high-quality visual implementation."
  // },
  // {
  //   company: "Freelance",
  //   role: "UI Developer",
  //   period: "2020 - 2021",
  //   description: "Worked on multiple landing pages and portfolio websites for small business owners, focusing on mobile-first responsiveness and accessibility."
  // }
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-primary font-code font-semibold tracking-wider">04. EXPERIENCE</h2>
            <h3 className="text-3xl lg:text-4xl font-headline font-bold">My Professional Journey</h3>
          </div>

          <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-[2px] before:bg-border md:before:left-1/2 md:before:-translate-x-1/2">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-9 h-9 rounded-full bg-background border-4 border-primary z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] p-8 bg-muted/30 rounded-2xl border border-border/50 hover:border-primary/30 transition-all ${index % 2 !== 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <span className="text-primary font-code text-sm font-bold block mb-2">{exp.period}</span>
                  <h4 className="text-xl font-headline font-bold">{exp.role}</h4>
                  <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
