import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Box, Tag } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    // لو المستخدم داخل من لينك مباشر، back ممكن يبقى useless
    if (window.history.length > 1) navigate(-1);
    else navigate("/", { replace: true });
  };

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-10">
      <div className="container-custom w-full">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-8xl md:text-9xl font-bold text-gradient mb-6 leading-none select-none">
            404
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Page not found
          </h1>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
              <Link to="/" aria-label="Go to home">
                <Home className="mr-2 h-4 w-4" />
                Go to Home
              </Link>
            </Button>

            <Button
              type="button"
              variant="outline"
              className="h-12 px-8 border-border/60"
              onClick={handleBack}
              aria-label="Go back"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3">
            <Button asChild variant="ghost" className="h-11 px-6">
              <Link to="/products">
                <Box className="mr-2 h-4 w-4" />
                Products
              </Link>
            </Button>

            <Button asChild variant="ghost" className="h-11 px-6">
              <Link to="/pricing">
                <Tag className="mr-2 h-4 w-4" />
                Pricing
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            If you believe this is a mistake, contact support or join our Discord.
          </p>
        </div>
      </div>
    </main>
  );
}
