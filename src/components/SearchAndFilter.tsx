import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';
import { FilterType } from '@/types/alumni';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (type: FilterType, value: string) => void;
  onClearFilter: (type: FilterType) => void;
  activeFilters: Record<FilterType, string>;
  companies: string[];
  batches: string[];
}

export const SearchAndFilter = ({
  onSearch,
  onFilter,
  onClearFilter,
  activeFilters,
  companies,
  batches
}: SearchAndFilterProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilterSelect = (type: FilterType, value: string) => {
    onFilter(type, value);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search alumni by name, company, or skills..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filter by:</span>
        </div>

        <Select onValueChange={(value) => handleFilterSelect('company', value)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Company" />
          </SelectTrigger>
          <SelectContent>
            {companies.map((company) => (
              <SelectItem key={company} value={company}>
                {company}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handleFilterSelect('batch', value)}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Batch" />
          </SelectTrigger>
          <SelectContent>
            {batches.map((batch) => (
              <SelectItem key={batch} value={batch}>
                {batch}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSearchQuery('');
            onSearch('');
            Object.keys(activeFilters).forEach(key => {
              onClearFilter(key as FilterType);
            });
          }}
        >
          Clear All
        </Button>
      </div>

      {/* Active Filters */}
      {Object.entries(activeFilters).some(([_, value]) => value) && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(activeFilters).map(([type, value]) => 
            value ? (
              <Badge key={type} variant="secondary" className="gap-1">
                {type}: {value}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 hover:bg-transparent"
                  onClick={() => onClearFilter(type as FilterType)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};