import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Bot,
  Settings,
  ArrowRight,
  Zap,
  Shield,
  RefreshCw,
  MessageSquare,
  Layers,
  Gauge,
  FolderCog,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  const botFeatures = [
    { icon: Zap, key: "presence" },
    { icon: Shield, key: "monitoring" },
    { icon: RefreshCw, key: "reconnect" },
    { icon: MessageSquare, key: "discord" },
  ];

  const configFeatures = [
    { icon: Layers, key: "setup" },
    { icon: FolderCog, key: "config" },
    { icon: Gauge, key: "optimization" },
    { icon: Settings, key: "organization" },
  ];

  return (
    <div ref={ref} className="flex flex-col">
      {/* Header */}
      <section className="page-header relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-accent mb-6">Products</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              {t("products.title")}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* MineMeganBot */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Bot className="h-8 w-8 text-accent" />
                </div>
                <span className="badge-accent">Automation</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                {t("products.minemeganbot.name")}
              </h2>
              <p className="mt-3 text-accent font-semibold tracking-wide text-lg uppercase">
                {t("products.minemeganbot.tagline")}
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t("products.minemeganbot.description")}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="accent" size="lg">
                  <Link to="/products/minemeganbot">
                    {t("products.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/pricing">{t("products.viewPricing")}</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {botFeatures.map(({ icon: Icon, key }, index) => (
                <div
                  key={key}
                  className="feature-card group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="font-semibold text-foreground leading-snug">
                    {t(`products.minemeganbot.features.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-custom">
        <div className="divider" />
      </div>

      {/* MineMegan Config */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {configFeatures.map(({ icon: Icon, key }, index) => (
                <div
                  key={key}
                  className="feature-card group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-accent-secondary" />
                  </div>
                  <p className="font-semibold text-foreground leading-snug">
                    {t(`products.minemeganconfig.features.${key}`)}
                  </p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-accent-secondary" />
                </div>
                <span className="badge-secondary">Configuration</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                {t("products.minemeganconfig.name")}
              </h2>
              <p className="mt-3 text-accent-secondary font-semibold tracking-wide text-lg uppercase">
                {t("products.minemeganconfig.tagline")}
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t("products.minemeganconfig.description")}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="accent-secondary" size="lg">
                  <Link to="/products/minemeganconfig">
                    {t("products.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t("nav.contact")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="card-premium p-10 md:p-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Not sure which product is right for you?
            </h3>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
              Join our Discord community and our team will help you find the perfect solution.
            </p>
            <Button asChild variant="accent" size="lg" className="mt-8">
              <a
                href="https://discord.gg/mineternoys"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
});

Products.displayName = "Products";

export default Products;
