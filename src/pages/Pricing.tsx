import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PoweredByBadge } from "@/components/PoweredByBadge";

export default function Pricing() {
  const { t } = useTranslation();

  const tiers = [
    {
      key: "free",
      featured: false,
    },
    {
      key: "starter",
      featured: true,
    },
    {
      key: "pro",
      featured: false,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              {t("pricing.title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("pricing.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => {
              const features = t(`pricing.${tier.key}.features`, {
                returnObjects: true,
              }) as string[];

              return (
                <div
                  key={tier.key}
                  className={cn(
                    "relative card-premium p-8 lg:p-10",
                    tier.featured && "border-accent/50 shadow-xl shadow-accent/5 scale-[1.02]"
                  )}
                >
                  {tier.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full tracking-wide">
                      Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-foreground">
                      {t(`pricing.${tier.key}.name`)}
                    </h3>
                    <div className="mt-5 flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground tracking-tight">
                        {t(`pricing.${tier.key}.price`)}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {t(`pricing.${tier.key}.period`)}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {t(`pricing.${tier.key}.description`)}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                            tier.featured ? "bg-accent/10" : "bg-muted"
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
                    className={cn(
                      "w-full h-11",
                      tier.featured
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : ""
                    )}
                    variant={tier.featured ? "default" : "outline"}
                  >
                    <a
                      href="https://discord.gg/mineternoys"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("pricing.cta")}
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Powered By Badge */}
      <PoweredByBadge />
    </div>
  );
}
