import portfolioData from "@/lib/portfolio-data.json";

export function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-primary font-code font-semibold tracking-wider uppercase">01. About Me</h2>
            <h3 className="text-3xl lg:text-4xl font-headline font-bold">Bridging Design & Development</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed">
            <div className="space-y-6">
              <p className="text-lg">
                {personal.aboutMain}
              </p>
              <p>
                {personal.aboutSub}
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Currently working at <span className="text-foreground font-semibold">{personal.company || "Docusoft India"}</span>, where I develop enterprise-level applications and have hands-on experience integrating third-party APIs such as QuickBooks, Xero, Stripe, Twilio, Calandy, HubSpot, GoCardless, IRIS, and Free Agent Capital.
              </p>

              {/* <div className="my-8 flex justify-center">
                <img
                  src="/hrm_image.svg"
                  alt="CRM platform with Twilio WhatsApp integration"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div> */}

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-background rounded-2xl border border-border/50 text-center shadow-sm">
                  <h4 className="text-primary font-bold text-3xl">{personal.experienceYears}</h4>
                  <p className="text-xs uppercase tracking-wider font-medium">Years Exp.</p>
                </div>
                {/* <div className="p-4 bg-background rounded-2xl border border-border/50 text-center shadow-sm">
                  <h4 className="text-primary font-bold text-3xl">{personal.projectsDelivered}</h4>
                  <p className="text-xs uppercase tracking-wider font-medium">Projects</p>
                </div> */}
              </div>
                <a href={personal.resumeUrl} download="Jayprakash_Gurjar_Resume.pdf" className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition-colors">
                  Download Resume
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
