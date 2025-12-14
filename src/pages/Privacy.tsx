import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="section-padding bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-accent mb-4">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent hover:prose-a:text-accent/80">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Mineternoys, we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Account information (username, email address)</li>
                  <li>Server configuration data</li>
                  <li>Usage statistics and analytics</li>
                  <li>Communication preferences</li>
                  <li>Support ticket information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide and maintain our services</li>
                  <li>Improve and personalize user experience</li>
                  <li>Communicate service updates and support</li>
                  <li>Process transactions and billing</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal data against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services such as payment processors and analytics providers. 
                  These services have their own privacy policies governing the use of your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us through our{" "}
                  <a href="https://discord.gg/mineternoys" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Discord server
                  </a>{" "}
                  or visit our{" "}
                  <Link to="/contact" className="text-accent hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
