// service type
export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
}
