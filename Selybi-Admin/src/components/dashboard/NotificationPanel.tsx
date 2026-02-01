import { Bell, X, Clock, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const sampleNotifications: Notification[] = [
  {
    id: "1",
    type: "success",
    title: "Project Completed",
    message: "E-commerce Platform project has been successfully delivered to TechCorp Inc.",
    time: "2 minutes ago",
    read: false
  },
  {
    id: "2", 
    type: "warning",
    title: "Deadline Approaching",
    message: "Mobile App Development project is due in 3 days. Please review the progress.",
    time: "1 hour ago",
    read: false
  },
  {
    id: "3",
    type: "info",
    title: "New Client Onboarded",
    message: "DesignStudio has been successfully added to your client list.",
    time: "3 hours ago",
    read: true
  },
  {
    id: "4",
    type: "error",
    title: "Payment Issue",
    message: "Payment processing failed for invoice #INV-2024-045. Please check the details.",
    time: "5 hours ago",
    read: false
  },
  {
    id: "5",
    type: "info",
    title: "System Update",
    message: "Dashboard has been updated to version 2.1.0 with new features and improvements.",
    time: "1 day ago",
    read: true
  }
];

export const NotificationPanel = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case "error":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return <Info className="h-4 w-4 text-primary" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success":
        return "border-l-green-400/50 bg-green-500/5";
      case "warning":
        return "border-l-yellow-400/50 bg-yellow-500/5";
      case "error":
        return "border-l-destructive/50 bg-destructive/5";
      default:
        return "border-l-primary/50 bg-primary/5";
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Card className="card-gradient border-border/50 hover:shadow-card transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span>Notifications</span>
            {unreadCount > 0 && (
              <Badge className="bg-primary text-primary-foreground">
                {unreadCount}
              </Badge>
            )}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
            className="text-muted-foreground hover:text-foreground"
          >
            Mark all as read
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <ScrollArea className="h-96">
          <div className="space-y-1 p-4">
            {notifications.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No notifications</p>
              </div>
            ) : (
              notifications.map((notification, index) => (
                <div
                  key={notification.id}
                  className={`
                    group relative p-4 rounded-lg border-l-2 transition-all duration-200 hover:bg-secondary/30 cursor-pointer
                    ${getNotificationColor(notification.type)}
                    ${!notification.read ? 'bg-opacity-100' : 'opacity-75'}
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => !notification.read && markAsRead(notification.id)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3 flex-1">
                      <div className="mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-foreground">
                            {notification.title}
                          </h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 hover:bg-destructive/20 hover:text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeNotification(notification.id);
                      }}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};