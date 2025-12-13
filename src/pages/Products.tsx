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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PoweredByBadge } from "@/components/PoweredByBadge";

export default function Products() {
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
    <div className="flex flex-col">
      {/* Header */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              {t("products.title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
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
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                <Bot className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                {t("products.minemeganbot.name")}
              </h2>
              <p className="mt-3 text-accent font-medium tracking-wide">
                {t("products.minemeganbot.tagline")}
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t("products.minemeganbot.description")}
              </p>
              <div className="mt-10 flex gap-4">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground h-11 px-6"
                >
                  <Link to="/products/minemeganbot">
                    {t("products.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-11 px-6">
                  <Link to="/pricing">{t("products.viewPricing")}</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {botFeatures.map(({ icon: Icon, key }) => (
                <div
                  key={key}
                  className="card-premium p-6 lg:p-8 group"
                >
                  <Icon className="h-6 w-6 text-accent mb-4 transition-transform group-hover:scale-110" />
                  <p className="font-medium text-foreground leading-snug">
                    {t(`products.minemeganbot.features.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MineMegan Config */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {configFeatures.map(({ icon: Icon, key }) => (
                <div
                  key={key}
                  className="card-premium p-6 lg:p-8 group"
                >
                  <Icon className="h-6 w-6 text-accent-secondary mb-4 transition-transform group-hover:scale-110" />
                  <p className="font-medium text-foreground leading-snug">
                    {t(`products.minemeganconfig.features.${key}`)}
                  </p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 rounded-2xl bg-accent-secondary/10 flex items-center justify-center mb-8">
                <Settings className="h-8 w-8 text-accent-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                {t("products.minemeganconfig.name")}
              </h2>
              <p className="mt-3 text-accent-secondary font-medium tracking-wide">
                {t("products.minemeganconfig.tagline")}
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t("products.minemeganconfig.description")}
              </p>
              <div className="mt-10 flex gap-4">
                <Button
                  asChild
                  className="bg-accent-secondary hover:bg-accent-secondary/90 text-accent-secondary-foreground h-11 px-6"
                >
                  <Link to="/products/minemeganconfig">
                    {t("products.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-11 px-6">
                  <Link to="/contact">{t("nav.contact")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By Badge */}
      <PoweredByBadge />
    </div>
  );
}
