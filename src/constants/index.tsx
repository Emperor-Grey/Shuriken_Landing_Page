import {
  Zap,
  Star,
  Award,
  Brain,
  BarChart,
  Rocket,
  Users,
  Shield,
  MessageSquare,
} from 'lucide-react';


export const PRICING_PLANS = [
  {
    title: "Basic",
    price: "Free",
    features: [
      "Access to Free Courses",
      "Basic AI Course Recommendations",
      "Limited Quiz Generation",
      "Community Access",
      "Basic Resume Builder"
    ],
    icon: <Zap className="w-5 h-5" />,
    popular: false
  },
  {
    title: "Pro",
    price: "$29",
    features: [
      "Unlimited Course Access",
      "Advanced AI Learning Paths",
      "Unlimited AI-Generated Quizzes",
      "Priority Support",
      "Advanced Resume Builder & ATS Check",
      "YouTube Content Curation",
      "Progress Analytics"
    ],
    icon: <Star className="w-5 h-5" />,
    popular: true
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Custom Learning Paths",
      "Dedicated AI Tutor",
      "Team Progress Analytics",
      "Custom Integrations",
      "API Access",
      "Bulk License Management",
      "24/7 Priority Support"
    ],
    icon: <Award className="w-5 h-5" />,
    popular: false
  }
];

export const NAV_ITEMS = [
  { label: 'Learn', href: '#learn' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Community', href: '#community' }
];




  // Navigation items with animation variants
  export const navItems = ['Features', 'Solutions', 'Pricing', 'Team', 'About', 'Contact'];

  // Features data
  export const features = [
    {
      title: "AI-Powered Analytics",
      description: "Get deep insights with our advanced AI algorithms",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Real-time Tracking",
      description: "Monitor your metrics in real-time",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks efficiently",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security features",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock expert assistance",
      icon: <MessageSquare className="w-8 h-8" />
    }
  ];

  // Team data with better images and roles
  export const team = [
    {
      id: 1,
      name: "Sarah Chen",
      designation: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      designation: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Emily Thompson",
      designation: "Head of Product",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Lead Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Lisa Johnson",
      designation: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  // Add this after the team data (around line 121)
  export const testimonials = [
    {
      content: "The AI-powered features have transformed how we handle our analytics. Incredible results!",
      author: "Emma Watson",
      role: "Data Scientist at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
      content: "Best investment we've made this year. The automation tools saved us countless hours.",
      author: "James Mitchell",
      role: "CTO at StartupX",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887&auto=format&fit=crop"
    },
    {
      content: "The platform's intuitive design and powerful features make it a game-changer.",
      author: "Sarah Chen",
      role: "Product Manager at InnovateCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop"
    },
    {
      content: "Outstanding support team and regular updates keep us ahead of the curve.",
      author: "Michael Brown",
      role: "CEO at GrowthLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
      content: "The ROI we've seen since implementing this solution has been phenomenal.",
      author: "Lisa Zhang",
      role: "Director at ScaleUp",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop"
    }
  ];
