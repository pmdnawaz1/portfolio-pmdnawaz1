export const projectCategories = [
  {
    id: 'portfolios',
    name: 'Portfolios I Built',
    description: 'Full Stack admin panel for portfolio websites with contact, newsletter, career jobs + applications management'
  },
  {
    id: 'personal',
    name: 'Personal Projects',
    description: 'Full Stack personal projects showcasing various technologies and skills'
  },
  {
    id: 'backends',
    name: 'Backends & Algorithms',
    description: 'Backend services, APIs, automation tools and algorithmic solutions'
  },
  {
    id: 'client',
    name: 'Client Projects',
    description: 'Production-ready applications built for clients and businesses'
  },
  {
    id: 'contributions',
    name: 'Contributions',
    description: 'Open source contributions and collaborative projects'
  },
  {
    id: 'upcoming',
    name: 'Upcoming',
    description: 'Future projects and ideas in development'
  }
];

// Enhanced projects data with GitHub repository information and exact categorization
export const projects = {
  portfolios: [
    {
      id: 1,
      title: 'Qubic Gen Portfolio',
      description: 'Stunning portfolio website with advanced animations using gSAP, AOS, and Swiper. Features SEO optimization with Helmet and modern design patterns.',
      image: '/images/1.png',
      tags: ['Next.js', 'React', 'Node.js', 'Tailwind', 'Styled Components', 'VPS', 'Admin Panel'],
      visit: 'https://qubic-gen-portfolio.vercel.app/',
      source: 'https://github.com/pmdnawaz1/qubic-gen',
      github: {
        name: 'qubic-gen',
        visibility: 'PUBLIC',
        stars: 0,
        forks: 1,
        language: 'JavaScript',
        size: '48.3 MB',
        created: '2023-12-30',
        updated: '2023-12-30'
      }
    },
    {
      id: 2,
      title: 'AI Kalpa Portfolio',
      description: 'Stunning portfolio website with advanced animations using gSAP, AOS, and Swiper. Features SEO optimization with Helmet and modern design patterns.',
      image: '/images/11.png',
      tags: ['React', 'JavaScript', 'gSAP', 'SEO', 'Animations', 'Portfolio'],
      visit: 'https://a-i-kalpa-portfolio.vercel.app/',
      source: 'https://github.com/pmdnawaz1/aI-kalpa-portfolio',
      github: {
        name: 'aI-kalpa-portfolio',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '24.3 MB',
        created: '2024-05-30',
        updated: '2024-06-21'
      }
    },
    {
      id: 3,
      title: 'Bio Pharma Portfolio',
      description: 'Website for pharmacy/laboratory products export with image galleries and admin panel.',
      image: '/images/12.png',
      tags: ['React', 'Vite', 'Tailwind', 'Node.js', 'Pharmacy'],
      visit: 'https://pharmacyatp.netlify.app/',
      source: 'https://github.com/pmdnawaz1/pharma',
      github: {
        name: 'pharma',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '157.9 MB',
        created: '2024-08-01',
        updated: '2024-09-01'
      }
    },
    {
      id: 4,
      title: 'Leeuwenhoek Technologies',
      description: 'Pharma company portfolio website with professional design and modern functionality.',
      image: '/images/13.png',
      tags: ['React', 'JavaScript', 'Corporate', 'Pharma'],
      visit: 'https://www.leeuwenhoektech.com/',
      source: 'https://github.com/pmdnawaz1/leeuwenhoek-technologies',
      github: {
        name: 'leeuwenhoek-technologies',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '149 KB',
        created: '2025-01-22',
        updated: '2025-01-29'
      }
    },
    {
      id: 5,
      title: 'Epic Moto Tours',
      description: 'Tourism company website with image carousels and gallery. Built from scratch with best practices for image optimization. Features responsive design and modern UI.',
      image: '/images/14.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tourism', 'Image Optimization'],
      visit: 'https://epic-moto.vercel.app/',
      source: null,
      github: null
    },
    {
      id: 6,
      title: 'Source Integreta',
      description: 'Corporate website with modern design and functionality.',
      image: '/images/15.png',
      tags: ['React', 'Next.js', 'Styled Components', 'Corporate'],
      visit: 'https://sourceintegreta.com/',
      source: null,
      github: null
    },
    {
      id: 7,
      title: 'JV Overseas',
      description: 'Educational consultancy website with comprehensive features. Includes admin panel for managing applications, newsletters, and job postings. Supports multiple languages and has a modern design.',
      image: '/images/2.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Education'],
      visit: 'https://www.jvoverseas.com/',
      source: 'https://github.com/pmdnawaz1/jv-portfolio',
      github: {
        name: 'jv-portfolio',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '14.7 MB',
        created: '2024-09-04',
        updated: '2025-06-12'
      }
    },
    {
      id: 8,
      title: 'Veda Loans and Finance',
      description: 'Financial services website with modern UI and functionality.',
      image: '/images/3.jpg',
      tags: ['React', 'Node.js', 'Tailwind', 'Finance'],
      visit: 'https://www.vedaloanshub.com/',
      source: null,
      github: null
    }
  ],
  
  personal: [
    {
      id: 9,
      title: 'Hospital Management System',
      description: 'Complete hospital management system with patient, doctor, and admin management. Features comprehensive dashboard, appointment scheduling, and medical records.',
      image: '/images/4.png',
      tags: ['React', 'Node.js', 'JavaScript', 'Healthcare', 'Admin Panel', 'Full Stack'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/pmdnawaz1-hms-system',
      github: {
        name: 'pmdnawaz1-hms-system',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '576 KB',
        created: '2024-10-01',
        updated: '2025-08-09'
      }
    },
    {
      id: 10,
      title: 'Live Location Sharing + Chat',
      description: 'Real-time location sharing with chat functionality using WebSockets. Features Mapbox, Leaflet integration with GPS tracking for group coordination.',
      image: '/images/5.png',
      tags: ['React', 'Mapbox', 'Leaflet', 'Node.js', 'WebSockets', 'Real-time'],
      visit: 'https://live-location-orcin.vercel.app/',
      source: 'https://github.com/pmdnawaz1/live-location',
      github: {
        name: 'live-location',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '680 KB',
        created: '2024-07-10',
        updated: '2024-07-14'
      }
    },
    {
      id: 11,
      title: 'Task Management Tool',
      description: 'Modern task management application built with T3 stack featuring TypeScript, tRPC, Tailwind, and beautiful UI.',
      image: '/images/6.png',
      tags: ['TypeScript', 'Next.js', 'tRPC', 'T3 Stack', 'Tailwind'],
      visit: 'https://task-management-tool-pi.vercel.app/',
      source: 'https://github.com/pmdnawaz1/task-management-tool',
      github: {
        name: 'task-management-tool',
        visibility: 'PUBLIC',
        stars: 0,
        forks: 0,
        language: 'TypeScript',
        size: '749 KB',
        created: '2025-06-09',
        updated: '2025-06-12'
      }
    },
    {
      id: 12,
      title: 'Resume Builder AI',
      description: 'AI-powered resume builder with modern templates, smart suggestions, and PDF generation capabilities.',
      image: '/images/7.png',
      tags: ['TypeScript', 'AI', 'PDF Generation', 'Resume', 'Templates'],
      visit: 'https://resume-builder-ai-ashy.vercel.app/',
      source: 'https://github.com/pmdnawaz1/resume-builder-ai',
      github: {
        name: 'resume-builder-ai',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'TypeScript',
        size: '78.1 MB',
        created: '2025-01-22',
        updated: '2025-06-01'
      }
    },
    {
      id: 13,
      title: 'Survey Builder + Admin Panel',
      description: 'Complete survey building platform with admin panel, Elasticsearch integration, Google Analytics, and self-hosted deployment.',
      image: '/images/8.png',
      tags: ['React', 'Vite', 'Elasticsearch', 'Google Analytics', 'Node.js', 'Self-hosted'],
      visit: 'https://survey-gcj5.vercel.app/',
      source: 'https://github.com/pmdnawaz1/survey',
      github: {
        name: 'survey',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '191 KB',
        created: '2024-09-01',
        updated: '2024-09-17'
      }
    },
    {
      id: 14,
      title: 'Student Application Forms',
      description: 'Master studies application forms with modern UI using React, Tailwind, Shadcn components, and Node.js backend.',
      image: '/images/9.png',
      tags: ['React', 'Tailwind', 'Shadcn', 'Node.js', 'Forms', 'Education'],
      visit: 'https://apply-az-form.vercel.app/',
      source: 'https://github.com/pmdnawaz1/applyAZ-form',
      github: {
        name: 'applyAZ-form',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'TypeScript',
        size: '102 KB',
        created: '2025-06-15',
        updated: '2025-06-16'
      }
    },
    {
      id: 15,
      title: 'Parking Slot Booking',
      description: 'Smart parking slot booking system with OTP verification, payment integration, and real-time availability tracking.',
      image: '/images/1.png',
      tags: ['JavaScript', 'Booking System', 'OTP', 'Payment'],
      visit: 'https://parking-slot-booking.vercel.app/',
      source: 'https://github.com/pmdnawaz1/parking-slot-booking',
      github: {
        name: 'parking-slot-booking',
        visibility: 'PUBLIC',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '412 KB',
        created: '2023-12-17',
        updated: '2024-06-18'
      }
    },
    {
      id: 16,
      title: 'Tehreek Faizane Umar Farooque',
      description: 'Masjid-related website with Islamic content and community features for religious organization.',
      image: '/images/11.png',
      tags: ['TypeScript', 'Islamic', 'Community', 'Content', 'Masjid'],
      visit: 'https://tehreek-faizane-umar-farooque.vercel.app/',
      source: 'https://github.com/pmdnawaz1/tehreek-faizane-umar-farooque',
      github: {
        name: 'tehreek-faizane-umar-farooque',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'TypeScript',
        size: '116 KB',
        created: '2025-04-03',
        updated: '2025-04-03'
      }
    }
  ],

  backends: [
    {
      id: 17,
      title: 'Delivery Warehouse Management',
      description: 'Warehouse management system with scheduler built in Go with PostgreSQL for efficient logistics operations and automated scheduling.',
      image: '/images/12.png',
      tags: ['Go', 'PostgreSQL', 'Scheduler', 'System Design', 'Logistics'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/delivery-management-system',
      github: {
        name: 'delivery-management-system',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'Go',
        size: '35 KB',
        created: '2025-08-03',
        updated: '2025-08-06'
      }
    },
    {
      id: 18,
      title: 'E-commerce Product Scraper',
      description: 'Advanced web scraping tool built with Node.js and EJS for extracting product information from various e-commerce platforms.',
      image: '/images/13.png',
      tags: ['Node.js', 'EJS', 'Web Scraping', 'E-commerce', 'Automation'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/product-scrapper',
      github: {
        name: 'product-scrapper',
        visibility: 'PUBLIC',
        stars: 0,
        forks: 2,
        language: 'JavaScript',
        size: '199 KB',
        created: '2025-05-15',
        updated: '2025-05-20'
      }
    },
    {
      id: 19,
      title: 'Resume Sender Automation',
      description: 'Automated tool for sending resumes to multiple job portals and recruiters efficiently with bulk operations.',
      image: '/images/14.png',
      tags: ['JavaScript', 'Automation', 'Job Search', 'Bulk Operations'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/resume-sender',
      github: {
        name: 'resume-sender',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '2 KB',
        created: '2025-08-09',
        updated: '2025-08-09'
      }
    },
    {
      id: 20,
      title: 'WhatsApp to MongoDB',
      description: 'WhatsApp integration system that automatically stores chat data to MongoDB for analysis and processing.',
      image: '/images/15.png',
      tags: ['Node.js', 'WhatsApp API', 'MongoDB', 'Data Processing'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/WhatsApptoMongodb',
      github: null
    },
    {
      id: 21,
      title: 'WhatsApp to Sheets',
      description: 'WhatsApp bot that automatically inserts data to Google Spreadsheets and MongoDB for data collection and reporting.',
      image: '/images/2.jpg',
      tags: ['Node.js', 'WhatsApp Web.js', 'Google Sheets', 'MongoDB', 'Bot'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/WhatsApptoSheets',
      github: null
    },
    {
      id: 22,
      title: 'Telegram Bot - Ultroid',
      description: 'Advanced Telegram bot with group management commands, entertainment features, and moderation capabilities.',
      image: '/images/3.jpg',
      tags: ['Python', 'Telegram API', 'Bot', 'Group Management'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/UltroidOppeace',
      github: null
    }
  ],

  client: [
    {
      id: 23,
      title: 'Burn Black Tax Filing (Admin)',
      description: 'Automated tax filing application admin panel with Next.js, Supabase backend, and Minio storage integration for document management.',
      image: '/images/4.png',
      tags: ['Next.js', 'Supabase', 'Minio', 'Admin Panel', 'Tax Filing'],
      visit: 'https://burnblack-admin.vercel.app/login',
      source: null,
      github: null
    },
    {
      id: 24,
      title: 'Burn Black Tax Filing (Customer)',
      description: 'Customer-facing automated tax filing application built with React, Node.js, and Tailwind for seamless user experience.',
      image: '/images/5.png',
      tags: ['React', 'Node.js', 'Tailwind', 'Tax Filing', 'Customer Portal'],
      visit: 'https://dev.burnblack.in/',
      source: null,
      github: null
    },
    {
      id: 25,
      title: 'Document Generator for Students',
      description: 'Resume, SOP, and document generator for students with admin panel. Features React, Node.js, Tailwind, HTML2PDF, and Gemini AI integration.',
      image: '/images/6.png',
      tags: ['React', 'Node.js', 'Tailwind', 'HTML2PDF', 'Gemini AI', 'Documents'],
      visit: 'https://documents.jvoverseas.com/login',
      source: null,
      github: null
    },
    {
      id: 26,
      title: 'Offer Letter Creator',
      description: 'Automated offer letter creation system for agents with template management and bulk generation features.',
      image: '/images/7.png',
      tags: ['React', 'Node.js', 'PDF Generation', 'Templates', 'Automation'],
      visit: null,
      source: 'https://github.com/jv-overseas/offer-letter',
      github: null
    },
    {
      id: 27,
      title: 'AI Presentation Generator',
      description: 'AI-powered presentation generator with React frontend, Python backend, Tailwind UI, HTML2PDF conversion, and Gemini AI integration.',
      image: '/images/8.png',
      tags: ['React', 'Python', 'Tailwind', 'HTML2PDF', 'Gemini AI', 'Presentations'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/ai-presentation-generator',
      github: {
        name: 'ai-presentation-generator',
        visibility: 'PUBLIC',
        stars: 0,
        forks: 0,
        language: 'Python',
        size: '187 KB',
        created: '2025-05-29',
        updated: '2025-05-30'
      }
    },
    {
      id: 28,
      title: 'Medical Shop Management',
      description: 'Medical shop management system with admin panel built using React, Node.js, and PostgreSQL for inventory and billing.',
      image: '/images/9.png',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Medical', 'Admin Panel'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/medshop-admin',
      github: {
        name: 'medshop-admin',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '128 KB',
        created: '2025-03-17',
        updated: '2025-03-17'
      }
    },
    {
      id: 29,
      title: 'Video Conference Platform',
      description: 'Advanced video conferencing platform with bulk management, built with Go backend, Docker deployment, STUN server, PostgreSQL, Redis, and React frontend.',
      image: '/images/1.png',
      tags: ['Go', 'Docker', 'STUN', 'PostgreSQL', 'Redis', 'React', 'WebRTC'],
      visit: 'https://dev.qubicgen.com/',
      source: 'https://github.com/pmdnawaz1/video-conference',
      github: {
        name: 'video-conference',
        visibility: 'PUBLIC',
        stars: 0,
        forks: 0,
        language: 'Go',
        size: '16.0 MB',
        created: '2025-07-19',
        updated: '2025-07-24'
      }
    },
    {
      id: 30,
      title: 'Events Management Platform',
      description: 'Event management platform with booking, scheduling, and participant management capabilities.',
      image: '/images/11.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Events', 'Management'],
      visit: 'https://events-lyart.vercel.app/',
      source: 'https://github.com/pmdnawaz1/events',
      github: {
        name: 'events',
        visibility: 'PUBLIC',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '123 KB',
        created: '2024-01-24',
        updated: '2024-01-24'
      }
    },
    {
      id: 31,
      title: 'Water Purifier Admin Panel',
      description: 'Comprehensive admin panel for water purifier company with management features and analytics.',
      image: '/images/12.png',
      tags: ['React', 'Node.js', 'Admin Panel', 'Water Purifier', 'Analytics'],
      visit: 'https://api-dev.kanavneer.com/login',
      source: null,
      github: null
    },
    {
      id: 32,
      title: 'Water Purifier Mobile App',
      description: 'React Native mobile application for water purifier company with payment integration and IoT device management.',
      image: '/images/13.png',
      tags: ['React Native', 'Mobile', 'Payment Integration', 'IoT', 'TypeScript'],
      visit: null,
      source: 'https://github.com/pmdnawaz1/KanavNeerApp',
      github: {
        name: 'KanavNeerApp',
        visibility: 'PRIVATE',
        stars: 0,
        forks: 0,
        language: 'TypeScript',
        size: '1.6 MB',
        created: '2025-06-21',
        updated: '2025-07-08'
      }
    }
  ],

  contributions: [
    {
      id: 33,
      title: 'Nocage - Freelance Platform',
      description: 'Fiverr-like marketplace platform with user engagement features, gig management, and comprehensive freelance ecosystem.',
      image: '/images/14.png',
      tags: ['MERN', 'Marketplace', 'User Engagement', 'Freelance', 'Platform'],
      visit: 'https://nocage.in',
      source: null,
      github: null
    },
    {
      id: 34,
      title: 'Ezage - Influencer Marketing',
      description: 'Early developer in influencer marketing startup. Implemented comprehensive features including payment integration with PhonePe and user management.',
      image: '/images/15.png',
      tags: ['MERN', 'Redux', 'Payment Integration', 'PhonePe', 'Influencer Marketing'],
      visit: 'https://www.ezage.in/',
      source: null,
      github: null
    },
    {
      id: 35,
      title: 'Restaurant Management System',
      description: 'Super admin panel for restaurant management system with comprehensive features for multi-restaurant operations.',
      image: '/images/2.jpg',
      tags: ['React', 'Node.js', 'Admin Panel', 'Restaurant', 'Management'],
      visit: 'https://dineflick.com/',
      source: null,
      github: null
    },
    {
      id: 36,
      title: 'Memist - Social Media App',
      description: 'Facebook-like social media application. Contributed backend development for posts, comments, likes, and user interactions.',
      image: '/images/3.jpg',
      tags: ['MERN', 'Redux', 'Social Media', 'Backend', 'API'],
      visit: 'https://memist.vercel.app/',
      source: null,
      github: null
    },
    {
      id: 37,
      title: 'Course Clipper - LMS',
      description: 'Learning management system with comprehensive course management, student tracking, and educational content delivery.',
      image: '/images/4.png',
      tags: ['JavaScript', 'LMS', 'Education', 'Courses', 'Learning'],
      visit: 'https://courseclipper.com/',
      source: 'https://github.com/pmdnawaz1/course-clipper',
      github: {
        name: 'course-clipper',
        visibility: 'PUBLIC',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        size: '2.4 MB',
        created: '2023-10-20',
        updated: '2023-10-20'
      }
    }
  ],

  upcoming: [
    {
      id: 38,
      title: 'Lead Generation Platform',
      description: 'Advanced lead generation system with AI-powered insights, automated workflows, and comprehensive analytics for sales teams.',
      image: '/images/5.png',
      tags: ['React', 'AI', 'Lead Generation', 'Analytics', 'Automation'],
      visit: null,
      source: null,
      github: null
    },
    {
      id: 39,
      title: 'Student Management System',
      description: 'Comprehensive student management platform for educational institutions with attendance, grades, and communication features.',
      image: '/images/6.png',
      tags: ['React', 'Node.js', 'Education', 'Management', 'Institution'],
      visit: null,
      source: null,
      github: null
    },
    {
      id: 40,
      title: 'Debate App',
      description: 'Interactive debate platform for structured discussions with real-time features and community engagement.',
      image: '/images/7.png',
      tags: ['React', 'WebSockets', 'Real-time', 'Community', 'Debates'],
      visit: null,
      source: null,
      github: null
    },
    {
      id: 41,
      title: 'Product Safety Certificate App',
      description: 'Safe-to-use product certification application with blockchain verification and quality assurance tracking.',
      image: '/images/8.png',
      tags: ['React', 'Blockchain', 'Certification', 'Safety', 'Quality'],
      visit: null,
      source: null,
      github: null
    },
    {
      id: 42,
      title: 'VPS Deployment Automation',
      description: 'Automated deployment system for VPS servers with CI/CD pipelines and infrastructure management.',
      image: '/images/9.png',
      tags: ['DevOps', 'Automation', 'VPS', 'CI/CD', 'Infrastructure'],
      visit: null,
      source: null,
      github: null
    },
    {
      id: 43,
      title: 'Islamic Content Platform',
      description: 'Comprehensive Islamic platform featuring Naats, Hamds, Nasheeds, Quran application with tuition management and community features.',
      image: '/images/1.png',
      tags: ['React', 'Islamic Content', 'Education', 'Community', 'Audio'],
      visit: null,
      source: null,
      github: null
    },
    {
      id: 44,
      title: 'Startup Idea Platform',
      description: 'Platform targeting entrepreneurs with startup ideas - validation tools, resources, and community support for emerging businesses.',
      image: '/images/11.png',
      tags: ['React', 'Startup', 'Entrepreneurship', 'Community', 'Validation'],
      visit: null,
      source: null,
      github: null
    }
  ]
};

export const TimeLineData = [
  { year: 2018, text: 'Started my journey towards B.Tech in EEE stream' },
  { year: 2019, text: 'Gained knowledge of Electrical and Electronics engineering' },
  { year: 2020, text: 'Started Android OS development and programming' },
  { year: 2021, text: 'Stepped into full-stack web development world' },
  { year: 2022, text: 'Mastered MERN stack and modern web technologies' },
  { year: 2023, text: 'Started freelancing and built 20+ production applications' },
  { year: 2024, text: 'Expanded to Go, TypeScript, and enterprise solutions' },
  { year: 2025, text: 'Leading full-stack development with 40+ applications' }
];

// Chat commands for the chat toggle feature
export const chatCommands = [
  {
    command: 'contact',
    title: 'Get in Touch',
    description: 'Contact me for project discussions',
    action: 'contact'
  },
  {
    command: 'private-access',
    title: 'Request Private Repo Access',
    description: 'Request access to view private repositories',
    action: 'private_access'
  },
  {
    command: 'collaborate',
    title: 'Collaboration',
    description: 'Discuss collaboration opportunities',
    action: 'collaborate'
  },
  {
    command: 'pricing',
    title: 'Get Project Quote',
    description: 'Get pricing for your project requirements',
    action: 'pricing'
  },
  {
    command: 'hire',
    title: 'Hire Me',
    description: 'Discuss full-time or contract opportunities',
    action: 'hire'
  }
];
