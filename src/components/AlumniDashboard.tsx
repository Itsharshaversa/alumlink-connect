import { useState, useMemo } from 'react';
import { Alumni, FilterType } from '@/types/alumni';
import { alumniData } from '@/data/alumniData';
import { AlumniCard } from './AlumniCard';
import { SearchAndFilter } from './SearchAndFilter';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Users, Building, GraduationCap, MessageCircle } from 'lucide-react';

export const AlumniDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<FilterType, string>>({
    all: '',
    company: '',
    batch: '',
    skills: ''
  });
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);
  const [isConnectDialogOpen, setIsConnectDialogOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  // Get unique values for filters
  const companies = useMemo(() => 
    [...new Set(alumniData.map(a => a.currentCompany))].sort(), 
    []
  );
  const batches = useMemo(() => 
    [...new Set(alumniData.map(a => a.batch))].sort().reverse(), 
    []
  );

  // Filter and search logic
  const filteredAlumni = useMemo(() => {
    let filtered = alumniData;

    // Apply filters
    if (activeFilters.company) {
      filtered = filtered.filter(alumni => alumni.currentCompany === activeFilters.company);
    }
    if (activeFilters.batch) {
      filtered = filtered.filter(alumni => alumni.batch === activeFilters.batch);
    }

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(alumni =>
        alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.currentCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.currentRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [searchQuery, activeFilters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (type: FilterType, value: string) => {
    setActiveFilters(prev => ({ ...prev, [type]: value }));
  };

  const handleClearFilter = (type: FilterType) => {
    setActiveFilters(prev => ({ ...prev, [type]: '' }));
  };

  const handleConnect = (alumni: Alumni) => {
    setSelectedAlumni(alumni);
    setIsConnectDialogOpen(true);
  };

  const handleSendMessage = () => {
    if (!selectedAlumni || !message.trim()) return;

    // Simulate sending message
    toast({
      title: "Message sent!",
      description: `Your message has been sent to ${selectedAlumni.name}. They will receive it via email.`,
    });

    setMessage('');
    setIsConnectDialogOpen(false);
    setSelectedAlumni(null);
  };

  const stats = {
    total: alumniData.length,
    companies: companies.length,
    batches: batches.length,
    available: alumniData.filter(a => a.available).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-professional-light/30 to-background">
      {/* Header */}
      <div className="bg-gradient-professional text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Alumni Network Dashboard</h1>
            <p className="text-lg opacity-90">
              Connect with successful alumni across top companies worldwide
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-1">
                  <Users className="w-5 h-5 mr-1" />
                </div>
                <div className="text-2xl font-bold">{stats.total}</div>
                <div className="text-sm opacity-80">Alumni</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-1">
                  <Building className="w-5 h-5 mr-1" />
                </div>
                <div className="text-2xl font-bold">{stats.companies}</div>
                <div className="text-sm opacity-80">Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-1">
                  <GraduationCap className="w-5 h-5 mr-1" />
                </div>
                <div className="text-2xl font-bold">{stats.batches}</div>
                <div className="text-sm opacity-80">Batches</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-1">
                  <MessageCircle className="w-5 h-5 mr-1" />
                </div>
                <div className="text-2xl font-bold">{stats.available}</div>
                <div className="text-sm opacity-80">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <SearchAndFilter
            onSearch={handleSearch}
            onFilter={handleFilter}
            onClearFilter={handleClearFilter}
            activeFilters={activeFilters}
            companies={companies}
            batches={batches}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              {filteredAlumni.length} Alumni Found
            </h2>
          </div>

          {/* Alumni Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAlumni.map((alumni) => (
              <AlumniCard
                key={alumni.id}
                alumni={alumni}
                onConnect={handleConnect}
              />
            ))}
          </div>

          {filteredAlumni.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground text-lg">
                No alumni found matching your criteria
              </div>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilters({
                    all: '',
                    company: '',
                    batch: '',
                    skills: ''
                  });
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Connect Dialog */}
      <Dialog open={isConnectDialogOpen} onOpenChange={setIsConnectDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Connect with {selectedAlumni?.name}</DialogTitle>
            <DialogDescription>
              Send a message to {selectedAlumni?.name} at {selectedAlumni?.currentCompany}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="message">Your message</Label>
              <Textarea
                id="message"
                placeholder="Hi! I'm a junior looking for guidance in your field. Would love to connect and learn from your experience..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setIsConnectDialogOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="flex-1"
              >
                Send Message
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};