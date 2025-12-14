import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="section-padding bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-accent mb-4">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Terms of Service
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
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Mineternoys services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mineternoys provides automation, monitoring, and configuration tools for community-based game servers. 
                  Our services include MineMeganBot and MineMegan Config, subject to the terms outlined herein.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Users agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use our services in compliance with all applicable laws</li>
                  <li>Maintain the security of account credentials</li>
                  <li>Not use services for unauthorized or malicious purposes</li>
                  <li>Not attempt to circumvent security measures</li>
                  <li>Respect the rights of other users</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment and Billing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Paid subscriptions are billed on a monthly basis. All fees are non-refundable unless otherwise stated. 
                  We reserve the right to modify pricing with reasonable notice to subscribers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive for 99.9% uptime, we do not guarantee uninterrupted service. 
                  We may perform maintenance or updates that temporarily affect service availability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our services are owned by Mineternoys and are protected 
                  by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mineternoys shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                  resulting from your use of or inability to use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to terminate or suspend your account at our sole discretion, without notice, 
                  for conduct that we believe violates these Terms of Service or is harmful to other users.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms of Service from time to time. We will notify users of any material changes 
                  through our Discord server or by email.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us through our{" "}
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
