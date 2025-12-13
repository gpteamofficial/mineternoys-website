import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-secondary/10">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="text-xl font-semibold text-foreground tracking-tight"
            >
              Mineternoys
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-foreground text-sm tracking-wide mb-5">
              {t("footer.products")}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  to="/products/minemeganbot"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  MineMeganBot
                </Link>
              </li>
              <li>
                <Link
                  to="/products/minemeganconfig"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  MineMegan Config
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.pricing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-foreground text-sm tracking-wide mb-5">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/mineternoys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium text-foreground text-sm tracking-wide mb-5">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70">
            {t("footer.copyright", { year: currentYear })}
          </p>
          <p className="text-xs text-muted-foreground/70">{t("footer.poweredBy")}</p>
        </div>
      </div>
    </footer>
  );
}
