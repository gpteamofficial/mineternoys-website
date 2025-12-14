import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Settings,
  Layers,
  FolderCog,
  Gauge,
  FileCode,
  Database,
  Lock,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Layers,
    title: "Server Setup",
    description: "Streamlined setup process with guided configuration for optimal initial deployment.",
  },
  {
    icon: FolderCog,
    title: "Configuration Management",
    description: "Centralized management of all server configurations with version control.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Automatic performance tuning based on server load and usage patterns.",
  },
  {
    icon: FileCode,
    title: "Template Library",
    description: "Pre-built configuration templates for common server setups and use cases.",
  },
  {
    icon: Database,
    title: "Resource Organization",
    description: "Efficient organization and management of server resources and assets.",
  },
  {
    icon: Lock,
    title: "Secure Configuration",
    description: "Built-in security practices to protect sensitive configuration data.",
  },
];

const useCases = [
  "Quick server setup with optimized defaults",
  "Maintain consistent configurations across servers",
  "Optimize performance without manual tuning",
  "Organize and manage server resources",
  "Apply security best practices automatically",
  "Version control for configuration changes",
];

export default function MineMeganConfig() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[150px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent-secondary/10 flex items-center justify-center">
                <Settings className="h-8 w-8 text-accent-secondary" />
              </div>
            </div>
            <span className="badge-secondary mb-4">Configuration Product</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mt-4">
              MineMegan Config
            </h1>
            <p className="mt-3 text-accent-secondary font-medium tracking-wide text-xl">
              Server Setup & Configuration
            </p>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Streamlined server configuration, setup optimization, and organization tools 
              for efficient and professional server management.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent-secondary hover:bg-accent-secondary/90 text-accent-secondary-foreground h-13 px-8 shadow-lg shadow-accent-secondary/20"
              >
                <a href="https://discord.gg/mineternoys" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 border-border/60">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="badge-secondary mb-4">Features</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Powerful configuration tools
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Everything you need to set up and maintain optimal server configurations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="feature-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="h-6 w-6 text-accent-secondary mb-4" />
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-accent-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-accent-secondary" />
                  </div>
                  <span className="text-foreground">{useCase}</span>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <span className="badge-secondary mb-4">Use Cases</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                Simplify your server management
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                MineMegan Config takes the complexity out of server configuration so you can focus 
                on your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-premium p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Ready to optimize your server?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Join our Discord community to get started with MineMegan Config today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-accent-secondary hover:bg-accent-secondary/90 text-accent-secondary-foreground h-12 px-8"
              >
                <a href="https://discord.gg/mineternoys" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 px-8 border-border/60">
                <Link to="/products/minemeganbot">View MineMeganBot</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
