import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MessageSquare, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Discord Community",
      description: "Join our active community for real-time support and discussions.",
      action: "Join Discord",
      href: "https://discord.gg/mineternoys",
      external: true,
      primary: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "For business inquiries and formal communications.",
      action: "support@mineternoys.com",
      href: "mailto:support@mineternoys.com",
      external: true,
      primary: false,
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within 24 hours on Discord, and 48 hours via email.",
      action: null,
      href: null,
      external: false,
      primary: false,
    },
  ];

  return (
    <div ref={ref} className="flex flex-col">
      {/* Header */}
      <section className="page-header relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-accent mb-6">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              {t("contact.title")}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {contactMethods.map(
              ({ icon: Icon, title, description, action, href, external, primary }, index) => (
                <div
                  key={title}
                  className={`feature-card p-8 text-center animate-fade-in-up ${
                    primary ? "border-accent/30 bg-accent/5" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 ${
                      primary
                        ? "bg-accent/20 border border-accent/30"
                        : "bg-secondary border border-border"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${primary ? "text-accent" : "text-muted-foreground"}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                  {action && href && (
                    <Button
                      asChild
                      variant={primary ? "accent" : "secondary"}
                      className="mt-6"
                    >
                      {external ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {action}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      ) : (
                        <Link to={href}>
                          {action}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      )}
                    </Button>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-custom">
          <div className="card-premium p-10 md:p-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Looking for answers?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Check our frequently asked questions for quick answers to common questions.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link to="/faq">
                View FAQ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
