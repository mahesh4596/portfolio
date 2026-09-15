const medihopeImg = '/assets/medihope-cover.jpg';
const ssgsImg = '/assets/ssgs-cover.jpg';

export const projects = [
  {
    id: 'medihope',
    title: 'MediHope',
    description: 'A full-stack platform connecting medicine donors with people in need, built to reduce waste from unused medicines. The backend automatically flags and removes expired stock on a daily cron job, and uploads are processed with OCR instead of manual entry.',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Axios', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Tesseract.js'],
    github: 'https://github.com/mahesh4596/MediHope',
    liveDemo: 'https://medihope.vercel.app',
    image: medihopeImg,
    imagePlaceholder: 'bg-gradient-to-br from-bg-elevated to-bg-elevated-2',
    overview: 'Connecting medicine donors with people in need to reduce medical waste.',
    problem: 'Huge amounts of usable medicines expire and go to waste while many people struggle to afford necessary medications.',
    solution: 'A platform that facilitates easy donation of unused medicines, using OCR for quick data entry and automated expiration tracking.',
    features: [
      'Connects medicine donors with people in need',
      'Automated backend cron job flags and removes expired stock daily',
      'Uploads processed with OCR to eliminate manual entry'
    ]
  },
  {
    id: 'propease',
    title: 'PropEase',
    description: 'A Java desktop application for managing real estate operations end-to-end — customers, property listings, property search, and finalized deals — with dashboard reports exported to Excel and PDF, and email notifications built in.',
    techStack: ['Java 21', 'JavaFX', 'MySQL', 'JDBC', 'Maven', 'iText', 'Apache POI', 'Jakarta Mail'],
    github: 'https://github.com/mahesh4596/propease',
    liveDemo: null,
    image: null,
    imagePlaceholder: 'bg-gradient-to-br from-bg-elevated-2 to-bg-primary',
    overview: 'Desktop application for managing real estate operations end-to-end.',
    problem: 'Real estate agents often struggle with fragmented tools for managing customers, listings, deals, and reporting.',
    solution: 'A unified Java desktop application to manage all aspects of real estate operations with built-in reporting and notifications.',
    features: [
      'Manages customers, property listings, property search, and finalized deals',
      'Dashboard reports exportable to Excel and PDF',
      'Built-in email notifications'
    ]
  },
  {
    id: 'shiv-shakti',
    title: 'Shiv Shakti General Store',
    description: 'A full grocery e-commerce site built for a real store — product browsing, cart, checkout with Razorpay payments, and an admin panel to manage products and orders.',
    techStack: ['React', 'Tailwind CSS', 'Lucide Icons', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    github: 'https://github.com/mahesh4596/shiv-shakti-general-store',
    liveDemo: 'https://ssgs-delta.vercel.app/',
    image: ssgsImg,
    imagePlaceholder: 'bg-gradient-to-tr from-bg-primary to-bg-elevated',
    overview: 'Full grocery e-commerce site built for a real store.',
    problem: 'A local general store needed an online presence to allow customers to browse products and place orders remotely.',
    solution: 'A complete e-commerce platform with an intuitive customer storefront and a comprehensive admin panel for store management.',
    features: [
      'Product browsing, cart, and checkout functionality',
      'Integrated Razorpay payments',
      'Admin panel to manage products and orders'
    ]
  }
];
