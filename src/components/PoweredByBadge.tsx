import { cn } from "@/lib/utils";

interface PoweredByBadgeProps {
  className?: string;
  variant?: "default" | "minimal";
}

export function PoweredByBadge({ className, variant = "default" }: PoweredByBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        variant === "default" && "py-8 border-t border-border/50",
        className
      )}
    >
      <p className="text-xs text-muted-foreground/70 tracking-wide">
        Powered by{" "}
        <span className="font-medium text-muted-foreground">Mineternoys</span>
        <span className="mx-2 text-border">—</span>
        <span className="text-muted-foreground/60">
          automation & monitoring tools for community servers
        </span>
      </p>
    </div>
  );
}
