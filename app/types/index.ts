export interface Product {
  id: string;
  name: string;
  subject: string;
  description: string;
  price: number;
  pages: number;
  icon: string;
  badge?: string;
  features: string[];
  isPopular?: boolean;
  isEnseignant?: boolean;
}

export interface OrderStep {
  id: number;
  title: string;
  description: string;
}
