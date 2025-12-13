import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Bot, Settings, Zap, Shield, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PoweredByBadge } from "@/components/PoweredByBadge";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/10" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent-secondary/3 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight animate-fade-in-up">
              {t("hero.title")}
            </h1>
            <p
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t("hero.subtitle")}
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 text-base"
              >
                <Link to="/products">
                  {t("hero.viewProducts")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link to="/pricing">{t("hero.seePricing")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              {t("products.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              {t("products.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* MineMeganBot Card */}
            <div className="card-premium p-8 lg:p-10">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Bot className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {t("products.minemeganbot.name")}
              </h3>
              <p className="mt-2 text-accent text-sm font-medium tracking-wide">
                {t("products.minemeganbot.tagline")}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("products.minemeganbot.description")}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{t("products.minemeganbot.features.presence")}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{t("products.minemeganbot.features.monitoring")}</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild variant="outline">
                  <Link to="/products/minemeganbot">{t("products.learnMore")}</Link>
                </Button>
                <Button asChild variant="ghost" className="text-muted-foreground">
                  <Link to="/pricing">{t("products.viewPricing")}</Link>
                </Button>
              </div>
            </div>

            {/* MineMegan Config Card */}
            <div className="card-premium p-8 lg:p-10">
              <div className="w-14 h-14 rounded-xl bg-accent-secondary/10 flex items-center justify-center mb-6">
                <Settings className="h-7 w-7 text-accent-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {t("products.minemeganconfig.name")}
              </h3>
              <p className="mt-2 text-accent-secondary text-sm font-medium tracking-wide">
                {t("products.minemeganconfig.tagline")}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("products.minemeganconfig.description")}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Layers className="h-4 w-4 text-accent-secondary flex-shrink-0" />
                  <span>{t("products.minemeganconfig.features.setup")}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-accent-secondary flex-shrink-0" />
                  <span>{t("products.minemeganconfig.features.optimization")}</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild variant="outline">
                  <Link to="/products/minemeganconfig">{t("products.learnMore")}</Link>
                </Button>
                <Button asChild variant="ghost" className="text-muted-foreground">
                  <Link to="/contact">{t("nav.contact")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mineternoys */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              {t("whyUs.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              {t("whyUs.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {["automation", "reliable", "community", "simple"].map((key, index) => (
              <div
                key={key}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  {key === "automation" && <Zap className="h-6 w-6 text-accent" />}
                  {key === "reliable" && <Shield className="h-6 w-6 text-accent" />}
                  {key === "community" && <Users className="h-6 w-6 text-accent" />}
                  {key === "simple" && <Layers className="h-6 w-6 text-accent" />}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t(`whyUs.points.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(`whyUs.points.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Ready to automate your server?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our community and discover how Mineternoys can help you focus on what matters
              most.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8"
              >
                <a
                  href="https://discord.gg/mineternoys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("nav.joinDiscord")}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link to="/products">{t("hero.viewProducts")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By Badge */}
      <PoweredByBadge />
    </div>
  );
}
