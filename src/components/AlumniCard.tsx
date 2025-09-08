import { Alumni } from '@/types/alumni';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Linkedin, MessageCircle, MapPin, Briefcase, Calendar } from 'lucide-react';

interface AlumniCardProps {
  alumni: Alumni;
  onConnect: (alumni: Alumni) => void;
}

export const AlumniCard = ({ alumni, onConnect }: AlumniCardProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src={alumni.profileImage}
              alt={alumni.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
              onError={(e) => {
                e.currentTarget.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face`;
              }}
            />
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              alumni.available ? 'bg-green-500' : 'bg-gray-400'
            }`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {alumni.name}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Batch {alumni.batch}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" />
              {alumni.location}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="font-medium">{alumni.currentRole}</span>
          </div>
          <p className="text-sm text-muted-foreground ml-6">
            at <span className="font-medium text-primary">{alumni.currentCompany}</span>
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Previous Experience:</p>
          <div className="space-y-1 ml-2">
            {alumni.workHistory.slice(1, 3).map((exp, index) => (
              <p key={index} className="text-xs text-muted-foreground">
                {exp.role} at {exp.company}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Skills:</p>
          <div className="flex flex-wrap gap-1">
            {alumni.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {alumni.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{alumni.skills.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(`https://linkedin.com/in/${alumni.linkedinId}`, '_blank')}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => onConnect(alumni)}
            disabled={!alumni.available}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};