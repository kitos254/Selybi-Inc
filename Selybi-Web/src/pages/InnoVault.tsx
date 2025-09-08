import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Search, Filter, Clock, DollarSign, Gavel, TrendingUp, Code, Award, Users, Eye, Loader2 } from "lucide-react";
import { apiClient } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";

const InnoVault = () => {
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("active");
  const [selectedProject, setSelectedProject] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [isBidDialogOpen, setIsBidDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlacingBid, setIsPlacingBid] = useState(false);

  // Fetch projects on component mount and when filters change
  useEffect(() => {
    fetchProjects();
  }, [selectedCategory, selectedStatus, searchTerm]);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.getProjects({
        category: selectedCategory !== "all" ? selectedCategory : undefined,
        status: selectedStatus !== "all" ? selectedStatus : undefined,
        search: searchTerm || undefined,
        sortBy: 'createdAt',
        sortOrder: 'desc'
      });

      if (response.success) {
        const projectsData = response.data.projects || [];
        setProjects(projectsData);
        setFilteredProjects(projectsData);
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch projects",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getTimeRemaining = (deadline) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diff = deadlineDate.getTime() - now.getTime();
    
    if (diff <= 0) return "Auction ended";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const handlePlaceBid = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to place a bid",
        variant: "destructive",
      });
      return;
    }

    if (!selectedProject || !bidAmount) {
      toast({
        title: "Invalid Bid",
        description: "Please enter a valid bid amount",
        variant: "destructive",
      });
      return;
    }
    
    const newBidAmount = parseFloat(bidAmount);
    if (newBidAmount <= selectedProject.currentBid) {
      toast({
        title: "Invalid Bid",
        description: "Bid must be higher than current bid!",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsPlacingBid(true);
      const response = await apiClient.placeBid(selectedProject._id, newBidAmount);
      
      if (response.success) {
        toast({
          title: "Bid Placed Successfully",
          description: `Your bid of $${newBidAmount} has been placed!`,
        });
        
        setBidAmount("");
        setIsBidDialogOpen(false);
        setSelectedProject(null);
        
        // Refresh projects to show updated bid
        fetchProjects();
      } else {
        toast({
          title: "Bid Failed",
          description: response.message || "Failed to place bid",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error placing bid:', error);
      toast({
        title: "Bid Failed",
        description: "Failed to place bid. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsPlacingBid(false);
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "blockchain": "🔗",
      "ai-ml": "🤖",
      "web-development": "🌐",
      "mobile-app": "📱",
      "iot": "🔌",
      "cybersecurity": "🔒",
      "data-science": "📊",
      "game-development": "🎮"
    };
    return icons[category] || "💻";
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-800 text-white pt-0">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">{filteredProjects.filter(p => p.status === 'active').length}</div>
                <div className="text-blue-300">Active Auctions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{filteredProjects.reduce((sum, p) => sum + p.bidCount, 0)}</div>
                <div className="text-blue-300">Total Bids</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">${filteredProjects.reduce((sum, p) => sum + p.currentBid, 0).toLocaleString()}</div>
                <div className="text-blue-300">Total Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="all" className="text-white hover:bg-slate-600">All Categories</SelectItem>
                <SelectItem value="blockchain" className="text-white hover:bg-slate-600">Blockchain</SelectItem>
                <SelectItem value="ai-ml" className="text-white hover:bg-slate-600">AI/ML</SelectItem>
                <SelectItem value="web-development" className="text-white hover:bg-slate-600">Web Development</SelectItem>
                <SelectItem value="mobile-app" className="text-white hover:bg-slate-600">Mobile App</SelectItem>
                <SelectItem value="iot" className="text-white hover:bg-slate-600">IoT</SelectItem>
                <SelectItem value="cybersecurity" className="text-white hover:bg-slate-600">Cybersecurity</SelectItem>
                <SelectItem value="data-science" className="text-white hover:bg-slate-600">Data Science</SelectItem>
                <SelectItem value="game-development" className="text-white hover:bg-slate-600">Game Development</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="active" className="text-white hover:bg-slate-600">Active</SelectItem>
                <SelectItem value="sold" className="text-white hover:bg-slate-600">Sold</SelectItem>
                <SelectItem value="all" className="text-white hover:bg-slate-600">All Status</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            <span className="ml-2 text-slate-300">Loading projects...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project._id} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-slate-800 border-slate-700">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{getCategoryIcon(project.category)}</span>
                      <Badge 
                        variant={project.status === 'active' ? 'default' : project.status === 'sold' ? 'secondary' : 'outline'}
                        className="capitalize"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    {project.status === 'active' && (
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-orange-600 text-sm font-medium">
                          <Clock className="h-4 w-4" />
                          <span>{getTimeRemaining(project.bidDeadline)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg line-clamp-2 text-white">{project.title}</CardTitle>
                  <p className="text-sm text-slate-300 line-clamp-3">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Starting Price</span>
                      <span className="font-medium text-white">${project.startingPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Current Bid</span>
                      <span className="text-lg font-bold text-green-400">${project.currentBid}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Total Bids</span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-blue-400" />
                        <span className="font-medium text-white">{project.bidCount}</span>
                      </div>
                    </div>
                  </div>

                  {project.status === 'sold' && project.finalBuyerName && (
                    <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-700">
                      <div className="text-sm font-medium text-blue-300">Sold to: {project.finalBuyerName}</div>
                      <div className="text-lg font-bold text-blue-400">${project.currentBid}</div>
                    </div>
                  )}

                  <div className="flex space-x-2 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1 bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
                          <Eye className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-800 border-slate-700 text-white">
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-white">Description</h4>
                            <p className="text-slate-300">{project.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-white">Key Features</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {project.features.map((feature, index) => (
                                <li key={index} className="text-slate-300">{feature}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-white">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary" className="bg-slate-600 text-slate-200">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                          {project.biddingHistory && project.biddingHistory.length > 0 && (
                            <div>
                              <h4 className="font-semibold mb-2 text-white">Recent Bids</h4>
                              <div className="space-y-2">
                                {project.biddingHistory.slice(-3).map((bid, index) => (
                                  <div key={index} className="flex justify-between items-center p-2 bg-slate-700 rounded">
                                    <span className="font-medium text-white">{bid.bidderName}</span>
                                    <div className="text-right">
                                      <div className="font-bold text-white">${bid.amount}</div>
                                      <div className="text-xs text-slate-400">{new Date(bid.timestamp).toLocaleDateString()}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    {project.status === 'active' && (
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => {
                          if (!isAuthenticated) {
                            toast({
                              title: "Login Required",
                              description: "Please log in to place a bid",
                              variant: "destructive",
                            });
                            return;
                          }
                          setSelectedProject(project);
                          setIsBidDialogOpen(true);
                        }}
                      >
                        <Gavel className="h-4 w-4 mr-1" />
                        Place Bid
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-300 text-lg">No projects found matching your criteria</div>
            <p className="text-slate-400 mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Bid Dialog */}
      <Dialog open={isBidDialogOpen} onOpenChange={setIsBidDialogOpen}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Place a Bid</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white">{selectedProject.title}</h4>
                <p className="text-sm text-slate-300">Current highest bid: ${selectedProject.currentBid}</p>
              </div>
              <div>
                <Label htmlFor="bidAmount" className="text-white">Your Bid Amount ($)</Label>
                <Input
                  id="bidAmount"
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder={`Minimum: ${selectedProject.currentBid + 1}`}
                  min={selectedProject.currentBid + 1}
                  disabled={isPlacingBid}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsBidDialogOpen(false)} disabled={isPlacingBid} className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
                  Cancel
                </Button>
                <Button onClick={handlePlaceBid} disabled={isPlacingBid} className="bg-blue-600 hover:bg-blue-700">
                  {isPlacingBid && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  {isPlacingBid ? 'Placing Bid...' : 'Place Bid'}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InnoVault;
