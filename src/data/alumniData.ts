import { Alumni } from '@/types/alumni';

export const alumniData: Alumni[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    batch: '2019',
    linkedinId: 'sarah-chen-tech',
    profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c4?w=400&h=400&fit=crop&crop=face',
    currentCompany: 'Google',
    currentRole: 'Senior Software Engineer',
    workHistory: [
      { company: 'Google', role: 'Senior Software Engineer', duration: '2022-Present' },
      { company: 'Microsoft', role: 'Software Engineer', duration: '2020-2022' },
      { company: 'Startup Inc', role: 'Junior Developer', duration: '2019-2020' }
    ],
    skills: ['React', 'Python', 'Machine Learning', 'Cloud Architecture'],
    location: 'Mountain View, CA',
    email: 'sarah.chen@example.com',
    available: true
  },
  {
    id: '2',
    name: 'Raj Patel',
    batch: '2018',
    linkedinId: 'raj-patel-finance',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    currentCompany: 'Goldman Sachs',
    currentRole: 'Investment Banking VP',
    workHistory: [
      { company: 'Goldman Sachs', role: 'Investment Banking VP', duration: '2023-Present' },
      { company: 'Morgan Stanley', role: 'Associate', duration: '2020-2023' },
      { company: 'JPMorgan Chase', role: 'Analyst', duration: '2018-2020' }
    ],
    skills: ['Financial Modeling', 'Risk Management', 'Investment Strategy', 'M&A'],
    location: 'New York, NY',
    email: 'raj.patel@example.com',
    available: true
  },
  {
    id: '3',
    name: 'Emily Johnson',
    batch: '2020',
    linkedinId: 'emily-johnson-design',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    currentCompany: 'Apple',
    currentRole: 'Senior UX Designer',
    workHistory: [
      { company: 'Apple', role: 'Senior UX Designer', duration: '2023-Present' },
      { company: 'Airbnb', role: 'Product Designer', duration: '2021-2023' },
      { company: 'Design Studio', role: 'UI/UX Designer', duration: '2020-2021' }
    ],
    skills: ['UI/UX Design', 'Figma', 'Design Systems', 'User Research'],
    location: 'Cupertino, CA',
    email: 'emily.johnson@example.com',
    available: true
  },
  {
    id: '4',
    name: 'Michael Brown',
    batch: '2017',
    linkedinId: 'michael-brown-data',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    currentCompany: 'Netflix',
    currentRole: 'Data Science Manager',
    workHistory: [
      { company: 'Netflix', role: 'Data Science Manager', duration: '2022-Present' },
      { company: 'Uber', role: 'Senior Data Scientist', duration: '2019-2022' },
      { company: 'Amazon', role: 'Data Scientist', duration: '2017-2019' }
    ],
    skills: ['Data Science', 'Machine Learning', 'Python', 'Statistical Analysis'],
    location: 'Los Gatos, CA',
    email: 'michael.brown@example.com',
    available: false
  },
  {
    id: '5',
    name: 'Priya Sharma',
    batch: '2019',
    linkedinId: 'priya-sharma-product',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    currentCompany: 'Meta',
    currentRole: 'Senior Product Manager',
    workHistory: [
      { company: 'Meta', role: 'Senior Product Manager', duration: '2023-Present' },
      { company: 'Instagram', role: 'Product Manager', duration: '2021-2023' },
      { company: 'Shopify', role: 'Associate PM', duration: '2019-2021' }
    ],
    skills: ['Product Management', 'Strategy', 'Analytics', 'Growth'],
    location: 'Menlo Park, CA',
    email: 'priya.sharma@example.com',
    available: true
  },
  // Add more alumni...
];

// Generate additional alumni data
const companies = [
  'Google', 'Apple', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'Spotify',
  'Uber', 'Airbnb', 'Stripe', 'Slack', 'Zoom', 'Salesforce', 'Adobe', 'Intel',
  'Goldman Sachs', 'Morgan Stanley', 'JPMorgan Chase', 'BlackRock', 'Citadel',
  'McKinsey', 'BCG', 'Bain & Company', 'Deloitte', 'PwC', 'KPMG', 'EY'
];

const roles = [
  'Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer', 
  'Investment Banker', 'Consultant', 'Research Scientist', 'Engineering Manager',
  'Marketing Manager', 'Business Analyst', 'Solutions Architect', 'DevOps Engineer'
];

const skillSets = [
  ['React', 'JavaScript', 'Node.js', 'AWS'],
  ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
  ['Product Strategy', 'Analytics', 'A/B Testing', 'User Research'],
  ['Financial Modeling', 'Risk Management', 'Excel', 'Bloomberg'],
  ['UI/UX Design', 'Figma', 'Design Systems', 'Prototyping'],
  ['Java', 'Spring Boot', 'Microservices', 'Kubernetes'],
  ['Data Analysis', 'Tableau', 'R', 'Statistics']
];

const firstNames = ['Alex', 'Sam', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Riley', 'Avery', 'Quinn', 'Blake'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson'];

// Generate remaining alumni
for (let i = 6; i <= 50; i++) {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const batch = ['2016', '2017', '2018', '2019', '2020', '2021'][Math.floor(Math.random() * 6)];
  const currentCompany = companies[Math.floor(Math.random() * companies.length)];
  const currentRole = roles[Math.floor(Math.random() * roles.length)];
  const skills = skillSets[Math.floor(Math.random() * skillSets.length)];
  
  alumniData.push({
    id: i.toString(),
    name: `${firstName} ${lastName}`,
    batch,
    linkedinId: `${firstName.toLowerCase()}-${lastName.toLowerCase()}`,
    profileImage: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=400&fit=crop&crop=face`,
    currentCompany,
    currentRole,
    workHistory: [
      { company: currentCompany, role: currentRole, duration: '2023-Present' },
      { company: companies[Math.floor(Math.random() * companies.length)], role: roles[Math.floor(Math.random() * roles.length)], duration: '2021-2023' }
    ],
    skills,
    location: ['San Francisco, CA', 'New York, NY', 'Seattle, WA', 'Austin, TX', 'Boston, MA'][Math.floor(Math.random() * 5)],
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    available: Math.random() > 0.3
  });
}