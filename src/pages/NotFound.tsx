import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-5rem)] items-center justify-center">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-8xl md:text-9xl font-bold text-gradient mb-6">404</div>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8"
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 border-border/60"
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
