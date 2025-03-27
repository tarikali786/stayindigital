import Angular from "../../public/angular.png";
// Service
import SMD from "../../public/service/social-media-services.jpg";
import SMD1 from "../../public/service/social-media-marketing-services.png";
import CM from "../../public/service/content-services.jpg";
import CM1 from "../../public/service/content-marketing-services.png";
import SEO from "../../public/service/seo-services.jpg";
import SEO1 from "../../public/service/seo-service.png";
import WEB from "../../public/service/web-services.jpg";
import WEB1 from "../../public/service/website-design-services.png";
import Email from "../../public/service/email-services.jpg";
import Email1 from "../../public/service/email-marketing-services.png";
import GD from "../../public/service/graphic-design-service.jpg";
import GD1 from "../../public/service/graphic-design-services.png";
// Cources

import SMM from "../../public/cource/social-media.png";
import SMM1 from "../../public/cource/social-media-banner.jpg";
import SEO1A from "../../public/cource/seo.png";
import AI from "../../public/cource/ai.png";
import WD from "../../public/cource/website-design.png";
import GDR from "../../public/cource/graphic-designer.png";

import CM1a from "../../public/cource/content-management.png";
import PVE from "../../public/cource/video-editing.png";

import PC from "../../public/cource/pod-cast.png";
import AC from "../../public/cource/ad-campainge.png";
import PMC from "../../public/cource/performance-marketing-course.png";
import PD from "../../public/cource/personality-development.png";
import SM from "../../public/cource/search-marketing.png";

// Cource Icon
import Team from "../../public/cource/team.png";
import Approach from "../../public/cource/approach.png";
import Service from "../../public/cource/services.png";
import Communication from "../../public/cource/trans-communication.png";

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
        image: SMM,
        bannerImage: SMM1,
        description: [
          "Your Search Engine Optimization (SEO) course is designed to help you master the techniques and strategies that drive organic traffic, improve search engine rankings, and boost your online presence. Whether you're a business owner, marketer, or aspiring SEO professional, this course will equip you with the tools you need to succeed in the competitive world of digital marketing.",

          "Unlock the secrets of search engine dominance with our hands-on, expert-led SEO course—your gateway to mastering the art of online visibility.",

          "In today’s digital era, mastering SEO (Search Engine Optimization) is not just an option—it's a necessity for anyone looking to succeed in the online marketplace. Whether you’re a business owner, marketer, or aspiring SEO professional, our tailored SEO courses are designed to provide you with the skills and knowledge you need to excel.",
        ],
        whatWeOffer: {
          title:
            "Our Social Media Management services are designed to enhance your online presence through strategic planning, creative content, and data-driven insights. Here’s how we can help:",
          items: [
            "Tailored Social Media Strategy",
            "Engaging Content Creation",
            "Expert Social Media Management",
            "Data-Driven Insights and Reporting",
            "Strategic Social Media Advertising",
          ],
        },
        whyChooseus: {
          items: [
            {
              icon: Team,
              title: "Experienced Team",
            },
            {
              icon: Approach,
              title: "Customized Approach",
            },
            {
              icon: Service,
              title: "Comprehensive Services",
            },
            {
              icon: Communication,
              title: "Transparent Communication",
            },
          ],
        },
        gstTitle:
          "Ready to transform your social media presence and connect with your audience like never before? Contact us to learn more about our Social Media Management services and how we can help your business thrive in the digital age.",
      },
      {
        id: "2b",
        name: "Search Engine Optimization",
        link: "/cources/cource-details/search-engine-optimization",
        image: SEO1A,
      },
      {
        id: "3b",
        name: "Artifical intelligence",
        link: "/cources/cource-details/artifical-intelligence",
        image: AI,
      },
      {
        id: "4b",
        name: "Website Development",
        link: "/cources/cource-details/web-development",
        image: WD,
      },
      {
        id: "5bb",
        name: "Graphic Designer",
        link: "/cources/cource-details/graphic-designer",
        image: GDR,
      },
      {
        id: "5b",
        name: "Content Management",
        link: "/cources/cource-details/content-management",
        image: CM1a,
      },
      {
        id: "6b",
        name: "Professional video Editing",
        link: "/cources/cource-details/professional-video-editing",
        image: PVE,
      },
      {
        id: "7b",
        name: "Podcast Creation",
        link: "/cources/cource-details/podcast-creation",
        image: PC,
      },
      {
        id: "8b",
        name: "Advertising Campaign",
        link: "/cources/cource-details/advertising-campaign",
        image: AC,
      },
      {
        id: "9b",
        name: "Performance Marketing",
        link: "/cources/cource-details/performance-marketing",
        image: PMC,
      },
      {
        id: "10b",
        name: "Personality development",
        link: "/cources/cource-details/personality-development",
        image: PD,
      },
      {
        id: "11b",
        name: "Search Engine Marketing",
        link: "/cources/cource-details/search-engine-marketing",
        image: SM,
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
        name: "Social Media  Development",
        link: "/services/service-details/social-media-marketing",
        image: SMD,
        subTitle:
          "At Stay in Digital, we offer a full suite of Social Media Marketing services to help businesses thrive in the digital world. With our customized strategies, engaging content, and expert management, we ensure that your brand stands out and connects with your target audience.",
        service: {
          title: "Our Social Media Marketing Services",
          bgimage: SMD1,
          services: [
            {
              title: "Social Media Strategy Development",
              description:
                "We create personalized strategies tailored to your brand’s goals and audience, ensuring your message reaches the right people at the right time. Learn Social Media Strategy with Stay in Digital.",
            },
            {
              title: "Content Creation (Graphics, Videos, Posts)",
              description:
                "Our creative team designs visually stunning and engaging content, including graphics, videos, and posts that captivate and drive engagement.",
            },
            {
              title: "Social Media Management",
              description:
                "We handle the day-to-day management of your social platforms, ensuring consistent posting, active community engagement, and monitoring.",
            },
            {
              title: "Targeted Social Media Advertising",
              description:
                "Reach your ideal customers with precise, targeted advertising campaigns designed to boost brand awareness and increase conversions.",
            },
            {
              title: "Influencer Collaborations",
              description:
                "We partner with influencers relevant to your industry to expand your reach and build credibility with your audience.",
            },
            {
              title: "Analytics & Performance Tracking",
              description:
                "Our data-driven approach ensures continuous optimization of your campaigns. We track key metrics and provide detailed reports to measure your success.",
            },
          ],
        },
      },
      {
        id: "2a",
        name: "SEO (Search Engine Optimization)",
        link: "/services/service-details/seo",
        image: SEO,
        subTitle:
          "At Stay In Digital, we offer a full suite of Search Engine Optimization (SEO) services to help your business achieve higher rankings, increase visibility, and attract more organic traffic. Our data-driven SEO strategies are designed to deliver sustainable results, ensuring that your website not only ranks well but stays competitive in search engine results.",
        service: {
          title: "Our Content Marketing Services",
          bgimage: SEO1,
          services: [
            {
              title: "Comprehensive SEO Strategy Development",
              description:
                "We create tailored SEO strategies that align with your business objectives, ensuring long-term success and growth.",
            },
            {
              title: "Keyword Research & Content Optimization",
              description:
                "We perform detailed keyword research and optimize your content to ensure it targets the right audience and improves your ranking for relevant search terms.",
            },
            {
              title: "On-Page & Technical SEO:",
              description:
                "We optimize your website’s structure, speed, mobile compatibility, and meta elements to enhance both search engine visibility and user experience.",
            },
            {
              title: "Link Building & Off-Page SEO",
              description:
                "Our link-building strategies help improve your site’s authority and credibility by securing quality backlinks from relevant and authoritative websites.",
            },
            {
              title: "Local SEO Optimization",
              description:
                "We optimize your business for local search, ensuring that your company appears in local search results and Google Maps for users in your area.",
            },
            {
              title: "SEO Audits & Performance Tracking",
              description:
                "We provide ongoing SEO audits and detailed performance tracking to identify opportunities for improvement and measure your site’s growth over time.",
            },
          ],
        },
      },
      {
        id: "3a",
        name: "Website Development",
        link: "/services/service-details/website-development",
        image: WEB,
        subTitle:
          "At Stay In Digital, we offer a comprehensive range of Website Design and Development services that cater to all your digital needs. Whether you're building from scratch, upgrading, or maintaining an existing site, our expert team is here to ensure that your website is not only beautiful but also functional and user-friendly.",
        service: {
          title: "Our Website Design and Development Services",
          bgimage: WEB1,
          services: [
            {
              title: "Custom Website Design",
              description:
                "We create bespoke website designs that reflect your brand’s identity, values, and business goals. Our designs are tailored to ensure your site stands out and engages your audience effectively. Explore Digital Marketing Strategy with Stay in Digital.",
            },
            {
              title: "Responsive Web Design",
              description:
                "In today’s mobile-driven world, having a website that works seamlessly across all devices is essential. We build fully responsive websites that adapt to desktops, tablets, and smartphones for a flawless user experience. Learn Advanced Web Design and Development Strategies with Stay in Digital.",
            },
            {
              title: "Content Management Systems (CMS)",
              description:
                "We offer flexible CMS solutions that allow you to manage your website content effortlessly. Whether it's WordPress, Drupal, or custom-built systems, we give you the tools to keep your website updated without needing technical expertise.",
            },
            {
              title: "SEO Optimization",
              description:
                "We integrate SEO best practices into your website development to help your site rank higher in search engine results. Our SEO-friendly designs ensure that your website is easily discoverable by your target audience. Learn Advanced SEO strategies with Stay in Digital.",
            },
            {
              title: "Website Maintenance & Support",
              description:
                "A website is never truly finished. We provide ongoing maintenance and support services to keep your website secure, up-to-date, and running smoothly, minimizing downtime and improving performance. We appreciate to explore Advanced Digital Marketing Strategies with Stay in Digital.",
            },
            {
              title: "Website Redesign Services",
              description:
                "If your current website is outdated or not performing well, our redesign services can give it a fresh new look. We revamp websites to enhance performance, modernize design, and improve user engagement.",
            },
          ],
        },
      },

      {
        id: "4a",
        name: "Graphic Design",
        link: "/services/service-details/graphic-design",
        image: GD,
        subTitle:
          "At Stay In Digital, we offer professional Graphic Design services that bring your brand’s vision to life. Our creative team works closely with you to develop designs that capture attention, communicate your message, and enhance your brand’s identity across all platforms.",
        service: {
          title: "Our Graphic Design Services",
          bgimage: GD1,
          services: [
            {
              title: "Logo & Branding Design",
              description:
                "We create memorable logos and complete branding packages that reflect your business's personality, values, and uniqueness. Learn Graphic Design Strategies with Stay in Digital.",
            },
            {
              title: "Marketing Collateral Design",
              description:
                "From brochures and flyers to business cards and posters, we design impactful marketing materials that help promote your products and services effectively.",
            },
            {
              title: "Social Media Graphics",
              description:
                "We design engaging and eye-catching visuals for your social media platforms, ensuring your brand stands out in the crowded digital space.",
            },
            {
              title: "Website & App Design",
              description:
                "Our designers craft visually appealing and user-friendly interfaces that improve the look, feel, and functionality of your website or mobile app.",
            },
            {
              title: "Infographics",
              description:
                "We create clear and compelling infographics that make complex data easy to understand, helping you communicate information visually and effectively.",
            },
            {
              title: "Packaging Design",
              description:
                "Our packaging designs are tailored to capture the essence of your product and brand, providing a unique unboxing experience for your customers.",
            },
          ],
        },
      },
      {
        id: "5a",
        name: "Content Marketing",
        link: "/services/service-details/content-marketing",
        image: CM,
        subTitle:
          "Content is the foundation of your online presence. At Stay In Digital, we provide comprehensive Content Marketing services that help your brand tell its story, engage with audiences, and drive real business results. From blog posts and articles to videos and infographics, we craft content that educates, informs, and inspires.",
        service: {
          title: "Our Content Marketing Services",
          bgimage: CM1,
          services: [
            {
              title: "Content Strategy Development",
              description:
                "We develop a comprehensive content strategy aligned with your business goals to ensure your content resonates with your audience. Learn Content Marketing Strategy with Stay in Digital.",
            },
            {
              title: "Blog Writing & Article Creation",
              description:
                "Our expert writers craft informative, engaging blog posts and articles that enhance your brand’s authority and drive traffic.",
            },
            {
              title: "Video Content Production",
              description:
                "From concept to production, we create high-quality video content that tells your brand’s story and boosts engagement.",
            },
            {
              title: "Infographic Design",
              description:
                "Our designers transform complex information into visually appealing infographics that capture attention and convey your message effectively.",
            },
            {
              title: "SEO Content Optimization",
              description:
                "We ensure that your content is optimized for search engines, helping you rank higher and attract more organic traffic.",
            },
            {
              title: "Email Marketing Campaigns",
              description:
                "We design and execute targeted email marketing campaigns that nurture leads and foster customer loyalty.",
            },
          ],
        },
      },
      {
        id: "6a",
        name: "Email Marketing",
        link: "/services/service-details/email-marketing",
        image: Email,
        subTitle:
          "At Stay In Digital, we provide a comprehensive suite of Email Marketing services designed to help you connect with your audience and drive results through targeted, personalized campaigns.",
        service: {
          title: "Our Email Marketing",
          bgimage: Email1,
          services: [
            {
              title: "Email Campaign Strategy Development",
              description:
                "We develop tailored email marketing strategies that align with your business goals. Whether you’re looking to nurture leads, increase customer engagement, or promote new products, we create a plan that maximizes the impact of your email campaigns.",
            },
            {
              title: "Custom Email Design",
              description:
                "Our design team creates visually appealing and professional email templates that match your brand’s identity. Each email is optimized for both desktop and mobile devices, ensuring a consistent and attractive presentation across all platforms.",
            },
            {
              title: "Automated Email Workflows",
              description:
                "We build automated email workflows to streamline communication with your subscribers. From welcome sequences to abandoned cart reminders and post-purchase follow-ups, our automated systems ensure your audience receives the right messages at the right time.",
            },
            {
              title: "List Segmentation & Management",
              description:
                "We help you organize and segment your email list based on audience behavior, demographics, and preferences. By targeting specific segments, your emails become more relevant and personalized, leading to higher open and click-through rates.",
            },
            {
              title: "A/B Testing & Optimization",
              description:
                "To maximize the effectiveness of your campaigns, we implement A/B testing to compare different elements such as subject lines, content, and CTAs. This allows us to continually optimize your emails for better engagement and conversion rates.",
            },
            {
              title: "Email Performance Analytics",
              description:
                "We provide in-depth analytics to track the performance of your email campaigns. Our reports cover key metrics such as open rates, click-through rates, and conversions, helping you understand the impact of each campaign and make data-driven decisions.",
            },
          ],
        },
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
