import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Zap, Target, Lightbulb, Shield, Heart, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  const sections = [
    { key: "story", icon: Lightbulb },
    { key: "mission", icon: Target },
    { key: "approach", icon: Zap },
  ];

  const values = [
    {
      title: "Reliability",
      description: "Our tools work consistently, so you can focus on your community.",
      icon: Shield,
    },
    {
      title: "Simplicity",
      description: "Clear, focused products that are easy to understand and use.",
      icon: Heart,
    },
    {
      title: "Transparency",
      description: "Honest communication and straightforward pricing.",
      icon: Eye,
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
            <span className="badge-accent mb-6">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              {t("about.title")}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className="flex flex-col md:flex-row gap-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {t(`about.${key}.title`)}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {t(`about.${key}.content`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="badge-accent mb-6">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                What We Stand For
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
              {values.map(({ title, description, icon: Icon }, index) => (
                <div
                  key={title}
                  className="feature-card text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Want to learn more?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our products or join our community to get started.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="accent" size="lg">
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

About.displayName = "About";

export default About;
