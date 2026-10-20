export type MediaType = 'image' | 'video';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'brand-strategy' | 'content-media' | 'ai-marketing' | 'performance-funnels' | 'marketing-campaigns' | string;
  subCategory: string;
  mediaType: MediaType;
  src: string;
  videoUrl?: string; // YouTube or sample video URL
  description: string;
  client?: string;
  year: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  tags: string[];
  pillar: string;
}

export interface StrategySlide {
  id: string;
  title: string;
  highlightText: string;
  description: string;
}

export interface WhyUsFeature {
  id: string;
  text: string;
}
