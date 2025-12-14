import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Pricing = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  const tiers = [
    { key: "free", featured: false },
    { key: "starter", featured: true },
    { key: "pro", featured: false },
  ];

  return (
    <div ref={ref} className="flex flex-col">
      {/* Header */}
      <section className="page-header relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-accent mb-6">Pricing</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              {t("pricing.title")}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("pricing.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => {
              const features = t(`pricing.${tier.key}.features`, {
                returnObjects: true,
              }) as string[];

              return (
                <div
                  key={tier.key}
                  className={cn(
                    "relative rounded-2xl transition-all duration-300 animate-fade-in-up",
                    tier.featured
                      ? "bg-gradient-to-b from-accent/5 via-card to-card border-2 border-accent/30 shadow-2xl shadow-accent/5 scale-[1.02] z-10"
                      : "card-premium"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg shadow-accent/30">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most Popular
                    </div>
                  )}
                  <div className="p-8 lg:p-10">
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-bold text-foreground">
                        {t(`pricing.${tier.key}.name`)}
                      </h3>
                      <div className="mt-6 flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-bold tracking-tight text-foreground">
                          {t(`pricing.${tier.key}.price`)}
                        </span>
                        <span className="text-muted-foreground text-sm ml-1">
                          {t(`pricing.${tier.key}.period`)}
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">
                        {t(`pricing.${tier.key}.description`)}
                      </p>
                    </div>

                    <div className="divider mb-8" />

                    <ul className="space-y-4 mb-10">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={cn(
                              "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                              tier.featured
                                ? "bg-accent/20 border border-accent/30"
                                : "bg-secondary border border-border"
                            )}
                          >
                            <Check
                              className={cn(
                                "h-3 w-3",
                                tier.featured ? "text-accent" : "text-muted-foreground"
                              )}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant={tier.featured ? "accent" : "secondary"}
                      className="w-full h-12"
                    >
                      <a
                        href="https://discord.gg/mineternoys"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("pricing.cta")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-custom text-center">
          <p className="text-muted-foreground">
            Have questions about our pricing?{" "}
            <Link to="/faq" className="link-accent">
              Check our FAQ
            </Link>{" "}
            or{" "}
            <a
              href="https://discord.gg/mineternoys"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              ask on Discord
            </a>
          </p>
        </div>
      </section>
    </div>
  );
});

Pricing.displayName = "Pricing";

export default Pricing;
