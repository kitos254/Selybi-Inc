import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Search,
  Inbox,
  Eye,
  CheckCircle,
  Archive,
  Trash2,
  Clock,
  AlertCircle,
  Loader2,
  RefreshCw,
  User,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { apiClient } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "replied" | "archived";
  priority: "low" | "medium" | "high";
  notes?: string;
  createdAt: string;
  repliedAt?: string;
}

interface ContactCounts {
  total: number;
  unread: number;
  read: number;
  replied: number;
  archived: number;
}

const Messages = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [counts, setCounts] = useState<ContactCounts>({
    total: 0,
    unread: 0,
    read: 0,
    replied: 0,
    archived: 0,
  });
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [updating, setUpdating] = useState(false);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const params: any = { page, limit: 20 };
      if (statusFilter !== "all") params.status = statusFilter;
      if (search) params.search = search;

      const response: any = await apiClient.getContacts(params);
      if (response.status === "success" && response.data) {
        setContacts(response.data.contacts || []);
        setCounts(response.data.counts || {
          total: 0,
          unread: 0,
          read: 0,
          replied: 0,
          archived: 0,
        });
        setTotalPages(response.data.pagination?.pages || 1);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch messages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page, statusFilter, search]);

  const handleStatusChange = async (contactId: string, newStatus: string) => {
    setUpdating(true);
    try {
      await apiClient.updateContact(contactId, { status: newStatus });
      toast({
        title: "Success",
        description: "Message status updated",
      });
      fetchContacts();
      if (selectedContact?._id === contactId) {
        setSelectedContact({ ...selectedContact, status: newStatus as Contact["status"] });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (contactId: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      await apiClient.deleteContact(contactId);
      toast({
        title: "Success",
        description: "Message deleted",
      });
      setShowDetailDialog(false);
      setSelectedContact(null);
      fetchContacts();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete message",
        variant: "destructive",
      });
    }
  };

  const handleViewMessage = async (contact: Contact) => {
    setSelectedContact(contact);
    setShowDetailDialog(true);

    // Mark as read if unread
    if (contact.status === "unread") {
      await handleStatusChange(contact._id, "read");
    }
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      unread: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      read: "bg-gray-500/10 text-gray-400 border-gray-500/20",
      replied: "bg-green-500/10 text-green-400 border-green-500/20",
      archived: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    };
    return styles[status] || styles.read;
  };

  const getPriorityBadge = (priority: string) => {
    const styles: Record<string, string> = {
      low: "bg-gray-500/10 text-gray-400",
      medium: "bg-yellow-500/10 text-yellow-400",
      high: "bg-red-500/10 text-red-400",
    };
    return styles[priority] || styles.medium;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const statCards = [
    { label: "All Messages", value: counts.total, icon: Inbox, color: "text-primary" },
    { label: "Unread", value: counts.unread, icon: Mail, color: "text-blue-400" },
    { label: "Read", value: counts.read, icon: Eye, color: "text-gray-400" },
    { label: "Replied", value: counts.replied, icon: CheckCircle, color: "text-green-400" },
    { label: "Archived", value: counts.archived, icon: Archive, color: "text-yellow-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Messages</h1>
            <p className="text-muted-foreground">
              View and manage contact form submissions
            </p>
          </div>
          <Button
            onClick={fetchContacts}
            variant="outline"
            className="border-border/50"
            disabled={loading}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {statCards.map((stat) => (
            <Card
              key={stat.label}
              className="card-gradient border-border/50 cursor-pointer hover:shadow-card transition-all"
              onClick={() => {
                if (stat.label === "All Messages") {
                  setStatusFilter("all");
                } else {
                  setStatusFilter(stat.label.toLowerCase());
                }
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="card-gradient border-border/50">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or subject..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-background border-border/50"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border/50">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="replied">Replied</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Messages List */}
        <Card className="card-gradient border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Messages</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : contacts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                <Inbox className="h-12 w-12 mb-4" />
                <p>No messages found</p>
              </div>
            ) : (
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <div
                    key={contact._id}
                    className={`p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-all cursor-pointer animate-slide-up ${
                      contact.status === "unread" ? "bg-primary/5" : "bg-background"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => handleViewMessage(contact)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground truncate">
                            {contact.name}
                          </span>
                          <Badge className={getStatusBadge(contact.status)}>
                            {contact.status}
                          </Badge>
                          <Badge className={getPriorityBadge(contact.priority)}>
                            {contact.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {contact.email}
                        </p>
                        <p className="text-sm font-medium text-foreground mt-1 truncate">
                          {contact.subject}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {contact.message}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {formatDate(contact.createdAt)}
                        </span>
                        <div className="flex gap-1">
                          {contact.status !== "replied" && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStatusChange(contact._id, "replied");
                              }}
                              disabled={updating}
                            >
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            </Button>
                          )}
                          {contact.status !== "archived" && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStatusChange(contact._id, "archived");
                              }}
                              disabled={updating}
                            >
                              <Archive className="h-4 w-4 text-yellow-400" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Message Detail Dialog */}
        <Dialog open={showDetailDialog} onOpenChange={setShowDetailDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-foreground">Message Details</DialogTitle>
              <DialogDescription>
                View and manage this contact message
              </DialogDescription>
            </DialogHeader>

            {selectedContact && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {selectedContact.name}
                    </h3>
                    <a
                      href={`mailto:${selectedContact.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {selectedContact.email}
                    </a>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Badge className={getStatusBadge(selectedContact.status)}>
                      {selectedContact.status}
                    </Badge>
                    <Badge className={getPriorityBadge(selectedContact.priority)}>
                      {selectedContact.priority}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(selectedContact.createdAt)}
                  </div>
                  {selectedContact.repliedAt && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Replied: {formatDate(selectedContact.repliedAt)}
                    </div>
                  )}
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">
                      {selectedContact.subject}
                    </span>
                  </div>
                  <p className="text-foreground whitespace-pre-wrap">
                    {selectedContact.message}
                  </p>
                </div>

                {selectedContact.notes && (
                  <div className="bg-yellow-500/10 rounded-lg p-4">
                    <span className="text-sm font-medium text-yellow-400">Notes:</span>
                    <p className="text-foreground mt-1">{selectedContact.notes}</p>
                  </div>
                )}

                <DialogFooter className="gap-2">
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(selectedContact._id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleStatusChange(selectedContact._id, "archived")}
                    disabled={selectedContact.status === "archived" || updating}
                  >
                    <Archive className="mr-2 h-4 w-4" />
                    Archive
                  </Button>
                  <Button
                    onClick={() => handleStatusChange(selectedContact._id, "replied")}
                    disabled={selectedContact.status === "replied" || updating}
                    className="bg-gradient-primary"
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark as Replied
                  </Button>
                </DialogFooter>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Messages;
