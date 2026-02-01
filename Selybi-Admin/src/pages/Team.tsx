import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Mail, Phone, Calendar, MapPin, Briefcase } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      status: "available",
      email: "sarah.j@selybi.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      projects: 3,
      avatar: "SJ",
      joinDate: "Jan 2023"
    },
    {
      name: "Michael Chen",
      role: "Backend Developer",
      status: "busy",
      email: "michael.c@selybi.com", 
      phone: "+1 (555) 234-5678",
      location: "Austin, TX",
      projects: 5,
      avatar: "MC",
      joinDate: "Mar 2023"
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      status: "available",
      email: "emily.r@selybi.com",
      phone: "+1 (555) 345-6789",
      location: "New York, NY",
      projects: 2,
      avatar: "ER",
      joinDate: "Jun 2022"
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      status: "vacation",
      email: "david.k@selybi.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      projects: 4,
      avatar: "DK",
      joinDate: "Sep 2022"
    },
    {
      name: "Alex Thompson",
      role: "Project Manager",
      status: "available",
      email: "alex.t@selybi.com",
      phone: "+1 (555) 567-8901",
      location: "Denver, CO",
      projects: 8,
      avatar: "AT",
      joinDate: "Nov 2021"
    },
    {
      name: "Lisa Wang",
      role: "QA Engineer",
      status: "busy",
      email: "lisa.w@selybi.com",
      phone: "+1 (555) 678-9012",
      location: "Portland, OR",
      projects: 4,
      avatar: "LW",
      joinDate: "Feb 2023"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "busy": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "vacation": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available": return "Available";
      case "busy": return "Busy";
      case "vacation": return "On Vacation";
      default: return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="p-6 space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Team</h1>
            <p className="text-muted-foreground">Manage your development team and track availability</p>
          </div>
          <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Plus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={member.email} className="card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/placeholder-${member.avatar.toLowerCase()}.png`} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground">{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <Badge className={getStatusColor(member.status)}>
                      {getStatusText(member.status)}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Active Projects</p>
                    <p className="text-foreground font-semibold flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {member.projects}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Joined</p>
                    <p className="text-foreground font-semibold flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {member.joinDate}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 border-border/50">
                    View Profile
                  </Button>
                  <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                    Message
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

export default Team;