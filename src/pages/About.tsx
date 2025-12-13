import { useTranslation } from "react-i18next";
import { Zap, Target, Lightbulb, Shield, Heart, Eye } from "lucide-react";
import { PoweredByBadge } from "@/components/PoweredByBadge";

export default function About() {
  const { t } = useTranslation();

  const sections = [
    { key: "story", icon: Lightbulb },
    { key: "mission", icon: Target },
    { key: "approach", icon: Zap },
  ];

  const values = [
    { title: "Reliability", description: "Our tools work consistently, so you can focus on your community.", icon: Shield },
    { title: "Simplicity", description: "Clear, focused products that are easy to understand and use.", icon: Heart },
    { title: "Transparency", description: "Honest communication and straightforward pricing.", icon: Eye },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              {t("about.title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-16">
            {sections.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className="flex gap-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
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
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground text-center tracking-tight">
              Our Values
            </h2>
            <div className="mt-14 grid sm:grid-cols-3 gap-8">
              {values.map(({ title, description, icon: Icon }, index) => (
                <div
                  key={title}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Powered By Badge */}
      <PoweredByBadge />
    </div>
  );
}
