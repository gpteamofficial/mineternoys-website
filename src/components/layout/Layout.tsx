import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isRTL } = useLanguage();

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col bg-background",
        isRTL && "font-arabic"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
