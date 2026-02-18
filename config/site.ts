export const siteConfig = {
  name: "Estratico",
  description:
    "Full-service technology company delivering innovative digital solutions. We transform businesses through cutting-edge software development, strategic consulting, and digital transformation services.",
  url: "https://estratico.org.zw",
  ogImage: "https://estratico.org.zw/og-image.jpg",
  links: {
    twitter: "https://twitter.com/estratico",
    linkedin: "https://linkedin.com/company/estratico",
    github: "https://github.com/estratico",
  },
  contact: {
    email: "estraticozw@gmail.com",
    phone: "+263 78 305 2192",
    address: "1 LongRoad, New Christmas Gift, Gweru, Zimbabwe",
  },
  keywords: [
    "technology company",
    "software development",
    "digital transformation",
    "web development",
    "mobile apps",
    "cloud solutions",
    "AI solutions",
    "consulting",
    "estratico",
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Modern, scalable web applications built with cutting-edge technologies.",
    description:
      "We create responsive, high-performance web applications using React, Next.js, and modern frameworks. Our solutions are built for scale, security, and exceptional user experience.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development",
    ],
    icon: "Globe",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    shortDescription:
      "Native and cross-platform mobile apps for iOS and Android.",
    description:
      "From concept to deployment, we build mobile applications that users love. Our team specializes in React Native, Flutter, and native iOS/Android development.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Mobile UI/UX Design",
    ],
    icon: "Smartphone",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription: "Scalable cloud infrastructure and DevOps engineering.",
    description:
      "We architect and implement cloud solutions on AWS, Azure, and Google Cloud. Our DevOps practices ensure reliable, scalable, and cost-effective infrastructure.",
    features: [
      "Cloud Architecture",
      "DevOps & CI/CD",
      "Kubernetes & Docker",
      "Cloud Migration",
    ],
    icon: "Cloud",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    shortDescription:
      "Intelligent solutions powered by machine learning and AI.",
    description:
      "Leverage the power of artificial intelligence in your business. We implement custom AI solutions, chatbots, predictive analytics, and automation workflows.",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Chatbots",
    ],
    icon: "Brain",
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    shortDescription:
      "Strategic consulting for digital transformation initiatives.",
    description:
      "We help businesses navigate the digital landscape with comprehensive strategy consulting. From digital transformation roadmaps to technology stack decisions.",
    features: [
      "Digital Transformation",
      "Technology Consulting",
      "Process Automation",
      "Growth Strategy",
    ],
    icon: "TrendingUp",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "User-centered design that drives engagement and conversions.",
    description:
      "Our design team creates intuitive, beautiful interfaces that users love. We combine user research, prototyping, and iterative testing to deliver exceptional experiences.",
    features: [
      "User Research",
      "Interface Design",
      "Prototyping",
      "Design Systems",
    ],
    icon: "Palette",
  },
];

export const projects = [
  {
    id: "fintech-platform",
    title: "FinTech Trading Platform",
    client: "Capital Markets Inc.",
    category: "Financial Services",
    description:
      "A comprehensive trading platform with real-time market data, portfolio management, and advanced analytics dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    image: "/images/projects/fintech.jpg",
    featured: true,
  },
  {
    id: "healthcare-app",
    title: "Healthcare Management System",
    client: "MedCare Solutions",
    category: "Healthcare",
    description:
      "HIPAA-compliant patient management system with telemedicine capabilities and EHR integration.",
    technologies: ["Next.js", "Python", "AWS", "FHIR"],
    image: "/images/projects/healthcare.jpg",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Marketplace",
    client: "RetailHub",
    category: "E-commerce",
    description:
      "Multi-vendor marketplace handling millions of transactions with AI-powered recommendations.",
    technologies: ["React", "GraphQL", "Elasticsearch", "Stripe"],
    image: "/images/projects/ecommerce.jpg",
    featured: true,
  },
  {
    id: "logistics-system",
    title: "Smart Logistics Platform",
    client: "FastFreight Co.",
    category: "Logistics",
    description:
      "End-to-end logistics management with real-time tracking, route optimization, and predictive analytics.",
    technologies: ["Vue.js", "Go", "MongoDB", "Google Maps"],
    image: "/images/projects/logistics.jpg",
    featured: false,
  },
  {
    id: "education-platform",
    title: "Online Learning Platform",
    client: "EduTech Academy",
    category: "Education",
    description:
      "Interactive learning platform with live classes, progress tracking, and gamification features.",
    technologies: ["Next.js", "WebRTC", "Redis", "OpenAI"],
    image: "/images/projects/education.jpg",
    featured: false,
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    client: "DataMetrics Pro",
    category: "SaaS",
    description:
      "Real-time analytics dashboard with customizable widgets, automated reporting, and data visualization.",
    technologies: ["React", "D3.js", "Python", "ClickHouse"],
    image: "/images/projects/saas.jpg",
    featured: true,
  },
];

export const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export const testimonials = [
  {
    quote:
      "Estratico transformed our digital presence completely. Their team delivered beyond our expectations.",
    author: "Sarah Chen",
    role: "CTO, TechVentures",
    avatar: "/images/testimonials/sarah.jpg",
  },
  {
    quote:
      "Professional, innovative, and reliable. They understood our vision and brought it to life perfectly.",
    author: "Michael Torres",
    role: "Founder, StartupHub",
    avatar: "/images/testimonials/michael.jpg",
  },
  {
    quote:
      "The best technology partner we've worked with. Their expertise in AI integration was exceptional.",
    author: "Emma Williams",
    role: "CEO, DataFlow Inc.",
    avatar: "/images/testimonials/emma.jpg",
  },
];

export const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A typical web application takes 8-12 weeks, while larger enterprise solutions may take 4-6 months. We provide detailed timelines during our discovery phase.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your solution runs smoothly.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Google Cloud. We choose the best technology stack based on your specific project requirements.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We believe in transparent communication. You'll have a dedicated project manager, regular status updates, and access to our project management tools. We schedule weekly calls and provide 24/7 support for critical issues.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. We provide detailed proposals after understanding your requirements during our discovery call.",
  },
];
