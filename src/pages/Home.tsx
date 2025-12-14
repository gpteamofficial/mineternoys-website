import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Bot,
  Settings,
  Zap,
  Shield,
  Users,
  Layers,
  ChevronRight,
  Activity,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "50+", label: "Active Communities" },
    { value: "24/7", label: "Automated Monitoring" },
    { value: "<1s", label: "Response Time" },
  ];

  const features = [
    {
      key: "automation",
      icon: Zap,
      title: t("whyUs.points.automation.title"),
      description: t("whyUs.points.automation.description"),
    },
    {
      key: "reliable",
      icon: Shield,
      title: t("whyUs.points.reliable.title"),
      description: t("whyUs.points.reliable.description"),
    },
    {
      key: "community",
      icon: Users,
      title: t("whyUs.points.community.title"),
      description: t("whyUs.points.community.description"),
    },
    {
      key: "simple",
      icon: Layers,
      title: t("whyUs.points.simple.title"),
      description: t("whyUs.points.simple.description"),
    },
  ];

  return (
    <div ref={ref} className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Ambient orbs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] animate-glow" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent-secondary/6 rounded-full blur-[100px] animate-glow" style={{ animationDelay: "2s" }} />

        <div className="container-custom relative z-10 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary border border-border mb-10 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm text-muted-foreground font-medium">Enterprise-grade automation platform</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight animate-fade-in-up">
              {t("hero.title")}
            </h1>
            
            {/* Subheadline */}
            <p
              className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t("hero.subtitle")}
            </p>
            
            {/* CTAs */}
            <div
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button asChild variant="accent" size="lg">
                <Link to="/products">
                  {t("hero.viewProducts")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/pricing">{t("hero.seePricing")}</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div
              className="mt-16 flex items-center justify-center gap-8 text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm">Secure & Reliable</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Activity className="h-4 w-4 text-accent" />
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="h-4 w-4 text-accent" />
                <span className="text-sm">24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="badge-accent mb-6">{t("products.title")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Purpose-built automation tools
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              {t("products.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* MineMeganBot Card */}
            <Link
              to="/products/minemeganbot"
              className="group card-premium p-8 lg:p-10 hover-lift hover-glow"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-300">
                  <Bot className="h-8 w-8 text-accent" />
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {t("products.minemeganbot.name")}
              </h3>
              <p className="mt-2 text-accent text-sm font-semibold tracking-wide uppercase">
                {t("products.minemeganbot.tagline")}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("products.minemeganbot.description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary border border-border text-muted-foreground">
                  {t("products.minemeganbot.features.presence")}
                </span>
                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary border border-border text-muted-foreground">
                  {t("products.minemeganbot.features.monitoring")}
                </span>
              </div>
            </Link>

            {/* MineMegan Config Card */}
            <Link
              to="/products/minemeganconfig"
              className="group card-premium p-8 lg:p-10 hover-lift hover-glow"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-secondary/15 transition-all duration-300">
                  <Settings className="h-8 w-8 text-accent-secondary" />
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent-secondary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {t("products.minemeganconfig.name")}
              </h3>
              <p className="mt-2 text-accent-secondary text-sm font-semibold tracking-wide uppercase">
                {t("products.minemeganconfig.tagline")}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("products.minemeganconfig.description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary border border-border text-muted-foreground">
                  {t("products.minemeganconfig.features.setup")}
                </span>
                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary border border-border text-muted-foreground">
                  {t("products.minemeganconfig.features.optimization")}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Mineternoys */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="badge-accent mb-6">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              {t("whyUs.title")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              {t("whyUs.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.key}
                className="feature-card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Ready to automate your server?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Join our community and discover how Mineternoys can help you focus on what matters most.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="accent" size="lg">
                <a
                  href="https://discord.gg/mineternoys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("nav.joinDiscord")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products">{t("hero.viewProducts")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
