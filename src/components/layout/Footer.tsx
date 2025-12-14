import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "MineMeganBot", href: "/products/minemeganbot" },
    { name: "MineMegan Config", href: "/products/minemeganconfig" },
    { name: t("nav.pricing"), href: "/pricing" },
  ];

  const companyLinks = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Discord", href: "https://discord.gg/mineternoys", external: true },
  ];

  const legalLinks = [
    { name: t("footer.privacy"), href: "/privacy" },
    { name: t("footer.terms"), href: "/terms" },
  ];

  return (
    <footer ref={ref} className="border-t border-border bg-card/50">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="text-xl font-bold text-foreground tracking-tight hover:text-foreground/80 transition-colors"
            >
              Mineternoys
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground text-sm tracking-wide mb-5">
              {t("footer.products")}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground text-sm tracking-wide mb-5">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground text-sm tracking-wide mb-5">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright", { year: currentYear })}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer.poweredBy")}
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export { Footer };
