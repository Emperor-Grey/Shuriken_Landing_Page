export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  icon: string;
  popular: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}
