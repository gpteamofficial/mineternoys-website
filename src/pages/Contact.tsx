import { useTranslation } from "react-i18next";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PoweredByBadge } from "@/components/PoweredByBadge";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              {t("contact.title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <div className="card-premium p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                {t("contact.discord.title")}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {t("contact.discord.description")}
              </p>
              <Button
                asChild
                size="lg"
                className="mt-10 bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8"
              >
                <a
                  href="https://discord.gg/mineternoys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact.discord.cta")}
                </a>
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
