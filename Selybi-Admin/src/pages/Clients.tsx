import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Building2, Mail, Phone, MapPin } from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "TechCorp Inc", status: "active", projects: 5, revenue: "$125K", location: "San Francisco, CA", email: "contact@techcorp.com", avatar: "TC" },
    { name: "StartupXYZ", status: "active", projects: 3, revenue: "$89K", location: "Austin, TX", email: "hello@startupxyz.com", avatar: "SX" },
    { name: "DesignStudio", status: "pending", projects: 2, revenue: "$45K", location: "New York, NY", email: "info@designstudio.co", avatar: "DS" },
    { name: "DataFlow Ltd", status: "active", projects: 4, revenue: "$98K", location: "Seattle, WA", email: "team@dataflow.com", avatar: "DF" },
    { name: "MetricsCorp", status: "inactive", projects: 1, revenue: "$22K", location: "Boston, MA", email: "contact@metricscorp.com", avatar: "MC" },
    { name: "Innovation Labs", status: "active", projects: 6, revenue: "$156K", location: "Los Angeles, CA", email: "hello@innovlabs.com", avatar: "IL" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-primary/10 text-primary border-primary/20";
      case "pending": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "inactive": return "bg-secondary text-secondary-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="p-6 space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Clients</h1>
            <p className="text-muted-foreground">Manage your client relationships and projects</p>
          </div>
          <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Plus className="mr-2 h-4 w-4" />
            Add Client
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <Card key={client.name} className="card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/placeholder-${client.avatar.toLowerCase()}.png`} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {client.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground">{client.name}</CardTitle>
                    <Badge className={getStatusColor(client.status)}>
                      {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Projects</p>
                    <p className="text-foreground font-semibold flex items-center">
                      <Building2 className="h-4 w-4 mr-1" />
                      {client.projects}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Revenue</p>
                    <p className="text-foreground font-semibold">{client.revenue}</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{client.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{client.email}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 border-border/50">
                    View Details
                  </Button>
                  <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;