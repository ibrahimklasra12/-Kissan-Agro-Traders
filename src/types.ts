export interface Product {
  id: string;
  name: string;
  category: 'pesticides' | 'fertilizers' | 'seeds' | 'drone';
  categoryLabel: string;
  categoryUrdu: string;
  tagline: string;
  descriptionUrdu: string;
  imageUrl: string;
  imageAlt: string;
  badge: string;
  inquiryMessage: string;
}

export interface SeasonalOffer {
  id: string;
  packageNumber: string;
  title: string;
  descriptionUrdu: string;
  features: string[];
  inquiryMessage: string;
}
