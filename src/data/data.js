import Angular from "../../public/angular.png";

export const HeaderData = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About  Us", link: "/about-us" },
  {
    id: 3,
    name: "Cources",
    link: "/cources",
    items: [
      {
        id: "1b",
        name: "Social Media  Management",
        link: "/cources/cource-details/social-media-management",
      },
      {
        id: "2b",
        name: "Search Engine Optimization",
        link: "/cources/cource-details/search-engine-optimization",
      },
      {
        id: "3b",
        name: "Artifical intelligence",
        link: "/cources/cource-details/artifical-intelligence",
      },
      {
        id: "4b",
        name: "Website Development",
        link: "/cources/cource-details/web-development",
      },
      {
        id: "5bb",
        name: "Graphic Designer",
        link: "/cources/cource-details/graphic-designer",
      },
      {
        id: "5b",
        name: "Content Management",
        link: "/cources/cource-details/content-management",
      },
      {
        id: "6b",
        name: "Professional video Editing",
        link: "/cources/cource-details/professional-video-editing",
      },
      {
        id: "7b",
        name: "Podcast Creation",
        link: "/cources/cource-details/podcast-creation",
      },
      {
        id: "8b",
        name: "Advertising Campaign",
        link: "/cources/cource-details/advertising-campaign",
      },
      {
        id: "9b",
        name: "Performance Marketing",
        link: "/cources/cource-details/performance-marketing",
      },
      {
        id: "10b",
        name: "Personality development",
        link: "/cources/cource-details/personality-development",
      },
      {
        id: "11b",
        name: "Search Engine Marketing",
        link: "/cources/cource-details/search-engine-marketing",
      },
    ],
  },
  {
    id: 4,
    name: "Services",
    link: "/services",
    items: [
      {
        id: "1a",
        name: "Web Development",
        link: "/services/service-details/web-development",
      },
      {
        id: "2a",
        name: "Mobile App Development",
        link: "/services/service-details/mobile-app-development",
      },
      {
        id: "3a",
        name: "Software Development",
        link: "/services/service-details/software-development",
      },
      {
        id: "4a",
        name: "eCommerce Development",
        link: "/services/service-details/ecommerce-development",
      },
    ],
  },
  { id: 5, name: "Gallery", link: "/gallery" },
  { id: 6, name: "Contact", link: "/contact" },
];
export const FooterData = {
  getInTouch: {
    title: "Get In Touch",
    address: [
      "Visit Our Location",
      "OPPOSITE TO T.E.L.C SCHOOL,",
      "LANDMARK - SARAVANA STORE",
      "24/59, KANDAPPA STREET",
      "PURASAWALKAM, CHENNAI 600 007",
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "About Us", link: "/about-us" },
      { id: 3, name: "Services", link: "/services" },
      { id: 4, name: "Gallery", link: "/gallery" },
      { id: 5, name: "Contact Us", link: "/contact" },
    ],
  },
  Cources: {
    title: "Cources",
    links: [
      { id: 1, name: "SEO", link: "/Cources/seo" },
      { id: 2, name: "Social Media Management", link: "/Cources/social-media" },
      {
        id: 3,
        name: "Professional Video Editing",
        link: "/Cources/video-editing",
      },
      { id: 4, name: "Advertising Campaign", link: "/Cources/advertising" },
      { id: 5, name: "Website Development", link: "/Cources/web-development" },
    ],
  },
};

export const Webtechnologies = [
  {
    name: "Angular",
    icon: Angular,
  },
  {
    name: "React",
    icon: Angular,
  },
  {
    name: "JavaScript",
    icon: Angular,
  },
  {
    name: "TypeScript",
    icon: Angular,
  },
  {
    name: "HTML5",
    icon: Angular,
  },
];

export const Backendtechnologies = [
  {
    name: "ASP.Net Core",
    icon: Angular,
  },
  {
    name: "ASP.Net MVC",
    icon: Angular,
  },
  {
    name: "Laravel",
    icon: Angular,
  },
  {
    name: "Node.js",
    icon: Angular,
  },
];

export const PlateFormTechnology = [
  {
    category: "iOS",
    techs: [
      { name: "Swift", icon: Angular },
      { name: "Objective-C", icon: Angular },
    ],
  },
  {
    category: "Android",
    techs: [
      { name: "Kotlin", icon: Angular },
      { name: "Java", icon: Angular },
    ],
  },
  {
    category: "Cross-Platform",
    techs: [
      { name: "Flutter", icon: Angular },
      { name: "React Native", icon: Angular },
    ],
  },
];

export const DatabaseTechnology = [
  {
    category: "Database",
    techs: [
      { name: "SQL Server", icon: Angular },
      { name: "MySQL", icon: Angular },
      { name: "Mongo DB", icon: Angular },
    ],
  },
  {
    category: "Infrastructure",
    techs: [
      { name: "Azure", icon: Angular },
      { name: "AWS", icon: Angular },
    ],
  },
];
