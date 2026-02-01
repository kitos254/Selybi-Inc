import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  className?: string;
  description?: string;
}

export const AnalyticsCard = ({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  className,
  description,
}: AnalyticsCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-primary";
      case "negative":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getChangeIcon = () => {
    if (changeType === "positive") return "↗";
    if (changeType === "negative") return "↘";
    return "→";
  };

  return (
    <Card className={cn(
      "card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] group",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn(
          "p-2 rounded-lg bg-primary/10 transition-colors duration-300",
          "group-hover:bg-primary/20"
        )}>
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-foreground">
            {value}
          </div>
          {(change || description) && (
            <div className="flex items-center justify-between">
              {change && (
                <div className={cn(
                  "flex items-center space-x-1 text-xs font-medium",
                  getChangeColor()
                )}>
                  <span>{getChangeIcon()}</span>
                  <span>{change}</span>
                </div>
              )}
              {description && (
                <p className="text-xs text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};