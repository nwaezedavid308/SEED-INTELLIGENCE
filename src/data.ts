import { GalleryItem, ServiceItem, StrategySlide, WhyUsFeature } from './types';

export const STRATEGY_SLIDES: StrategySlide[] = [
  {
    id: 'slide-1',
    title: 'From Getting Started',
    highlightText: 'To Getting Hired & Paid',
    description: 'We help your business look sharp and get seen by the right people. We design your logo, build your website, shoot your videos, and run ads that bring in paying customers.',
  },
  {
    id: 'slide-2',
    title: 'Simple Marketing That',
    highlightText: 'Actually Brings In Sales',
    description: 'No confusing talk. No vanity likes. Everything we do is focused on getting your phone ringing and putting money in your pocket.',
  },
  {
    id: 'slide-3',
    title: 'A Custom Plan For',
    highlightText: 'Your Exact Business',
    description: 'We sit down, look at what you sell and who buys from you, and build a straightforward plan with only what you truly need.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-branding',
    title: 'Branding & Visual Identity',
    description: 'We give your business a distinctive, trustworthy identity with custom logo design, color palettes, typography, and branded print materials.',
    iconName: 'Award',
    details: [
      'A custom logo designed specifically for your brand',
      'Matching colors, fonts, and typography guidelines',
      'Designs for business cards, letterheads, and brand stationery',
      'Product packaging, shopping bags, and uniform merchandise'
    ],
    tags: ['Branding', 'Logos', 'Packaging', 'Style Guides'],
    pillar: 'Branding'
  },
  {
    id: 'srv-online-campaigns',
    title: 'Smart Online Marketing Campaigns',
    description: 'We launch targeted digital ad campaigns on Google, Facebook, Instagram, and TikTok to bring ready-to-buy customers directly to your business.',
    iconName: 'Compass',
    details: [
      'Targeted ads that reach people actively looking to buy',
      'Direct WhatsApp and lead form inquiries for your sales team',
      'Retargeting ads that bring back previous website visitors',
      'Transparent weekly updates showing leads won and cost per customer'
    ],
    tags: ['Online Campaigns', 'Google Ads', 'Facebook Ads', 'Lead Generation'],
    pillar: 'Online Marketing'
  },
  {
    id: 'srv-offline-campaigns',
    title: 'Smart Offline Marketing Campaigns',
    description: 'We plan and execute high-impact real-world marketing campaigns including billboards, street banners, event activations, and printed promotions.',
    iconName: 'Megaphone',
    details: [
      'High-visibility roadside billboards and strategic street banners',
      'High-quality printed flyers, posters, and direct mailers',
      'In-person brand activations, roadshows, and launch events',
      'Branded uniforms, car wraps, and promotional merchandise'
    ],
    tags: ['Offline Campaigns', 'Billboards', 'Print Collateral', 'Brand Activations'],
    pillar: 'Offline Marketing'
  },
  {
    id: 'srv-web',
    title: 'Websites & Landing Pages',
    description: 'We build fast, easy-to-use websites that work seamlessly on any phone and make it simple for visitors to call, message, or buy from you.',
    iconName: 'Monitor',
    details: [
      'Fast website that works smoothly on phones and laptops',
      'Clear pages that explain what you sell without clutter',
      'One-click WhatsApp chat and contact forms',
      'Easy to read, clean navigation, and fast loading speeds'
    ],
    tags: ['Websites', 'Landing Pages', 'Sales Pages'],
    pillar: 'Web & Digital'
  },
  {
    id: 'srv-video',
    title: 'Videos & Social Reels',
    description: 'We write, record, and edit short videos that grab attention within seconds and make people want to learn more about what you offer.',
    iconName: 'Camera',
    details: [
      'Short, punchy videos for Instagram Reels, TikTok, and YouTube',
      'Clear scripts and voiceovers that explain your offer',
      'Clean editing, bold subtitles, and background music',
      'High-quality clips that make your products shine'
    ],
    tags: ['Short Videos', 'Instagram Reels', 'TikTok'],
    pillar: 'Video & Media'
  },
  {
    id: 'srv-motion',
    title: 'Animations & Explainer Videos',
    description: 'We make simple animated videos that explain what your business does in a fun, visual way that anyone can understand in under a minute.',
    iconName: 'Video',
    details: [
      'Simple explainer videos that show how your product works',
      'Animated titles and eye-catching movement',
      'Animated logo reveals for your video intros',
      'Clean custom illustrations that match your brand'
    ],
    tags: ['Animation', 'Explainers', 'Logo Motion'],
    pillar: 'Animation'
  },
  {
    id: 'srv-social',
    title: 'Social Media Management',
    description: 'We take the stress out of social media by creating weekly posts, designing graphics, and helping you talk directly with your followers.',
    iconName: 'Users',
    details: [
      'A monthly schedule of what to post and when',
      'Eye-catching graphics and easy-to-read carousels',
      'Replying to comments and keeping your page active',
      'A friendly, consistent voice that matches your brand'
    ],
    tags: ['Social Media', 'Content Creation', 'Instagram'],
    pillar: 'Social Media'
  },
  {
    id: 'srv-email',
    title: 'Email Newsletters & Retention',
    description: 'We write friendly, helpful emails that keep in touch with your customers and remind them why they should keep buying from you.',
    iconName: 'Mail',
    details: [
      'Friendly customer newsletters sent right to their inbox',
      'Automatic welcome emails for new customers',
      'Clear announcements for special offers and new products',
      'Keeping your customer contact list neat and organized'
    ],
    tags: ['Email Marketing', 'Newsletters', 'Customer Retention'],
    pillar: 'Email Marketing'
  }
];

export const WHY_US_FEATURES: WhyUsFeature[] = [
  { id: 'feat-1', text: 'Clear words anyone can understand—zero marketing buzzwords' },
  { id: 'feat-2', text: 'A proven path to take your brand from unknown to trusted' },
  { id: 'feat-3', text: 'Smart offline and online marketing campaigns that drive real sales' },
  { id: 'feat-4', text: 'Creative branding backed by honest, direct communication' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'work-1',
    title: 'Brand Identity & Visual System',
    category: 'brand-strategy',
    subCategory: 'Branding & Identity',
    mediaType: 'image',
    src: '/IMG_20260613_132601.jpg',
    description: 'Designed a clean, modern logo, chosen brand colors, and created style guidelines to make the brand look trusted and established.',
    client: 'EcoGrow Organic',
    year: '2026'
  },
  {
    id: 'work-offline',
    title: 'Citywide Billboard & Street Banner Campaign',
    category: 'marketing-campaigns',
    subCategory: 'Offline Marketing',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1542744094-2ab25be78b90?auto=format&fit=crop&w=1200&q=80',
    description: 'Planned and installed strategic roadside billboards and street banners across high-traffic city centers, creating instant local awareness.',
    client: 'Metro Grand Launch',
    year: '2026'
  },
  {
    id: 'work-2',
    title: 'Corporate Website & Lead Page',
    category: 'performance-funnels',
    subCategory: 'Web & Digital',
    mediaType: 'image',
    src: '/IMG_20260613_132722.jpg',
    description: 'Built a clean, mobile-ready website with simple contact forms that doubled customer inquiries in 60 days.',
    client: 'Apex Law Practice',
    year: '2026'
  },
  {
    id: 'work-3',
    title: 'Social Media Growth & Content',
    category: 'content-media',
    subCategory: 'Social Media',
    mediaType: 'image',
    src: '/IMG_20260613_163752.jpg',
    description: 'Created monthly social media posts, custom graphics, and daily updates that brought in 3x more page visitors.',
    client: 'Luxe Real Estate',
    year: '2026'
  },
  {
    id: 'work-4',
    title: 'Product Explainer & Animation',
    category: 'content-media',
    subCategory: 'Animation & Motion',
    mediaType: 'image',
    src: '/IMG_20260613_164421.jpg',
    description: 'Created a short animated video showing how the mobile app works, leading to 42% more signups.',
    client: 'FinTech App',
    year: '2026'
  },
  {
    id: 'work-5',
    title: 'Targeted Lead Generation Ad Campaign',
    category: 'marketing-campaigns',
    subCategory: 'Online Campaigns',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description: 'Ran targeted ads on Facebook and Instagram with clean designs and clear words, cutting the cost of finding each new customer by 38%.',
    client: 'Chrono Lab',
    year: '2026'
  },
  {
    id: 'work-6',
    title: 'Weekly Customer Newsletter',
    category: 'performance-funnels',
    subCategory: 'Email Marketing',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80',
    description: 'Sent weekly helpful newsletters that customers actually enjoyed reading, maintaining a 48% open rate and steady repeat sales.',
    client: 'Active Education Center',
    year: '2026'
  }
];

export const STATS = [
  { value: 'From 0', label: 'To Known Brand' },
  { value: '150+', label: 'Projects Completed' },
  { value: '8 Core', label: 'Ways We Help Brands' },
  { value: '100%', label: 'Human-Crafted Work' }
];

export const FAQS = [
  {
    question: 'How do we get started together?',
    answer: 'Just send us a message below, email seedintelligenze@gmail.com, or reach out on WhatsApp (+234 811 060 7341, 07066080648, 08163743310). Tell us what you need and what you want to achieve. We will write back within 12 hours with a clear plan, a timeframe, and an exact price.'
  },
  {
    question: 'What offline and online marketing campaigns do you run?',
    answer: 'We run smart online campaigns (targeted digital ads on Google, Facebook, Instagram, and TikTok, plus lead funnels and retargeting) and smart offline campaigns (high-impact roadside billboards, street banners, printed flyers, branded merchandise, and in-person event activations). We make sure your brand reaches customers both on their screens and out in the real world.'
  },
  {
    question: 'Can you create our entire branding from scratch?',
    answer: 'Yes! We craft complete branding and visual identities, including your logo, official colors, typography, brand guidelines, business cards, letterheads, product packaging, and staff apparel so your business looks established and trustworthy from day one.'
  },
  {
    question: 'Can we hire you for just one service, or do we have to hire you for everything?',
    answer: 'You can hire us for one specific project—such as a new logo, a one-page website, a billboard design, or video reels—or you can partner with us to handle all your online and offline marketing month-to-month. You only pay for what you actually need.'
  },
  {
    question: 'Why does Seed Intelligenze avoid marketing buzzwords?',
    answer: 'Too many agencies use confusing terms to sound smart or hide poor results. At Seed Intelligenze, we believe in speaking like real human beings. We tell you what we are doing, why it works, and how it helps your business grow in plain, simple English.'
  }
];
