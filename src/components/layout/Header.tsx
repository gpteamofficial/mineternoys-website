import { useState, useEffect, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "products", href: "/products" },
  { key: "pricing", href: "/pricing" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

const Header = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const { currentLanguage, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(`${href}/`);

  return (
    <header
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-foreground hover:text-foreground/80 transition-colors tracking-tight"
          >
            Mineternoys
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  isActive(item.href)
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 text-muted-foreground"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase">{currentLanguage}</span>
            </Button>
            <Button asChild variant="accent" size="sm">
              <a
                href="https://discord.gg/mineternoys"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nav.joinDiscord")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40 transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/98 backdrop-blur-xl" />
        <div className="relative h-full overflow-y-auto">
          <div className="container-custom py-8">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={cn(
                    "block px-4 py-4 text-lg font-medium transition-colors rounded-xl",
                    isActive(item.href)
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}

              <div className="pt-6 mt-6 border-t border-border">
                <div className="flex items-center justify-between px-4 py-4">
                  <span className="text-sm text-muted-foreground">Language</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleLanguage}
                    className="gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-semibold uppercase">
                      {currentLanguage}
                    </span>
                  </Button>
                </div>
                <div className="px-4 pt-4">
                  <Button asChild variant="accent" className="w-full h-12">
                    <a
                      href="https://discord.gg/mineternoys"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("nav.joinDiscord")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export { Header };
