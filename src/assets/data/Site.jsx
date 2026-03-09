import {
    HouseHeart,
    GalleryVerticalEnd,
    Scroll,
    User,
    MessageSquare,
    Code,
    Settings,
    LayoutDashboard
} from "lucide-react";

import Shikshadeep from '../images/featured_project.png'
import ExpenseTracker from '../images/ExpenseTracker.png'
import NGO from '../images/project3.png'
import portfolio from '../images/portfolio.png'

export const menuList = [
    { label: "Home", path: "/", icon: <HouseHeart className='size-4' /> },
    { label: "Projects", path: "/projects", icon: <GalleryVerticalEnd className='size-4' /> },
    { label: "About", path: "/about", icon: <User className='size-4' /> },
    { label: "Contact", path: "/contact", icon: <MessageSquare className='size-4' /> }
]

export const projects = [
    {
        id: "shikshadeep-academy-cms",
        title: "Shikshadeep Academy CMS",
        tagline: "Content Management Platform for Schools",

        short_desc: "A scalable CMS platform built for schools to manage blogs, notices, job postings, galleries, and student queries through a centralized dashboard.",

        problem: "School administrators needed a simple way to publish updates, manage content, and communicate with students and parents without technical knowledge.",

        solution: "Developed a modular CMS dashboard that allows administrators to create and manage content dynamically while keeping the frontend lightweight and responsive.",

        role: "Full-Stack Developer",

        timeline: "2025",

        process: {
            research: "Analyzed common workflows in school websites and identified repetitive manual tasks like updating notices and blogs.",

            planning: "Designed a scalable content structure with reusable schemas for blogs, jobs, galleries, and announcements.",

            design: "Created a clean admin dashboard UI focusing on usability for non-technical users.",

            development: "Built REST APIs and dynamic frontend components using React with a structured database schema in Supabase.",

            deployment: "Deployed frontend on Netlify and configured backend services with Supabase for authentication and data storage."
        },

        features: [
            "Dynamic blog publishing",
            "Notice and announcement management",
            "Job posting system",
            "Gallery content management",
            "User query handling",
            "Admin dashboard"
        ],

        tech_stack: ["React", "Node.js", "Supabase", "Tailwind", "Netlify"],

        thumbnail: Shikshadeep,

        gallery: [],

        live_url: "https://shikshadeep-academy-school.netlify.app/",
        github_url: "",

        category: "CMS Platform",
        status: "Completed",
        featured: true
    },

    {
        id: "blogging-platform",
        title: "Blogging Platform",
        tagline: "Modern Publishing Experience",

        short_desc: "A responsive blogging platform where users can write, edit, and publish articles while readers enjoy a smooth reading experience.",

        problem: "Many small creators lack a simple platform to publish articles without complex setup or heavy CMS tools.",

        solution: "Created a lightweight blogging system with authentication, rich text editing, and a responsive reading interface.",

        role: "Full-Stack Developer",

        timeline: "2024",

        process: {
            research: "Studied popular blogging platforms to identify essential features for writers and readers.",

            planning: "Structured the application with authentication flow, article editor, and content listing pages.",

            design: "Focused on minimal reading layouts and distraction-free writing interfaces.",

            development: "Implemented article editor, authentication system, and responsive UI components.",

            deployment: "Deployed on Netlify with optimized builds for fast loading."
        },

        features: [
            "User authentication",
            "Rich text editor",
            "Article publishing",
            "Responsive reading layout",
            "Content listing and categories"
        ],

        tech_stack: ["Next.js", "Tailwind", "GSAP", "Firebase"],

        thumbnail: "https://ik.imagekit.io/k05httq0p/Blog/NextResponsiveLoginRegisterForm.png?updatedAt=1761667673877",

        gallery: [],

        live_url: "ADD_LIVE_URL",
        github_url: "",

        category: "Web Application",
        status: "Completed",
        featured: false
    },

    {
        id: "expense-tracker",
        title: "Expense Tracker",
        tagline: "Personal Finance Manager",

        short_desc: "A clean and intuitive finance tracking application that helps users manage income, expenses, and spending habits.",

        problem: "Tracking daily spending manually can be tedious and often leads to poor financial awareness.",

        solution: "Developed a simple expense tracker that provides clear records of income and expenses with an organized UI.",

        role: "Full-Stack Developer",

        timeline: "2024",

        process: {
            research: "Explored common personal finance tools and simplified their workflows for easier daily use.",

            planning: "Defined core features including expense entry, transaction list, and spending overview.",

            design: "Created minimal UI components to keep the experience lightweight and easy to navigate.",

            development: "Built reusable components and interactive UI using React and Tailwind.",

            deployment: "Deployed on Netlify with optimized production builds."
        },

        features: [
            "Add and track expenses",
            "Income management",
            "Transaction history",
            "Responsive UI"
        ],

        tech_stack: ["React", "Tailwind", "GSAP"],

        thumbnail: ExpenseTracker,

        gallery: [],

        live_url: "https://expense-tracker-phurpa.netlify.app",
        github_url: "",

        category: "Web Application",
        status: "Completed",
        featured: false
    },

    {
        id: "ngo-website",
        title: "Himani Trust NGO Website",
        tagline: "Digital Presence for Non-Profit Organization",

        short_desc: "A responsive website built to help a non-profit organization showcase its mission, initiatives, and community work.",

        problem: "The organization needed a professional online presence to communicate its activities and reach supporters.",

        solution: "Developed a responsive website that highlights the NGO's projects and simplifies outreach to volunteers and donors.",

        role: "Frontend Developer",

        timeline: "2024",

        process: {
            research: "Studied NGO websites to understand how they present impact and community engagement.",

            planning: "Defined essential sections including mission, projects, and contact channels.",

            design: "Focused on accessibility, readability, and clear storytelling of the NGO's work.",

            development: "Implemented responsive layouts and integrated Firebase for backend functionality.",

            deployment: "Hosted the website on Netlify with optimized assets."
        },

        features: [
            "Responsive design",
            "Project showcase",
            "Organization mission section",
            "Contact and outreach pages"
        ],

        tech_stack: ["React", "Firebase", "MUI"],

        thumbnail: NGO,

        gallery: [],

        live_url: "https://himanitrust.netlify.app",
        github_url: "",

        category: "Organization Website",
        status: "Completed",
        featured: false
    },

    {
        id: "developer-portfolio",
        title: "Developer Portfolio",
        tagline: "Interactive Portfolio Experience",

        short_desc: "A personal portfolio website designed to showcase projects, technical skills, and experiments through interactive UI components.",

        problem: "Developers often struggle to present their work in a way that reflects both technical skill and design thinking.",

        solution: "Built a portfolio with interactive sections, smooth animations, and dynamic UI elements to demonstrate frontend capabilities.",

        role: "Frontend Developer",

        timeline: "2025",

        process: {
            research: "Analyzed modern developer portfolios to understand design trends and user expectations.",

            planning: "Structured the portfolio around projects, skills, experiments, and contact interaction.",

            design: "Created a minimal yet expressive UI with bento grid layouts and subtle animations.",

            development: "Developed reusable components and interactive features including map, weather, and chat-style query form.",

            deployment: "Deployed the site on Netlify with optimized builds and responsive layouts."
        },

        features: [
            "Bento grid layout",
            "Interactive components",
            "Responsive design",
            "GSAP animations",
            "Project showcase"
        ],

        tech_stack: ["React", "Tailwind", "GSAP"],

        thumbnail: portfolio,

        gallery: [],

        live_url: "https://phurpasherpa-portfolio.netlify.app",
        github_url: "",

        category: "Portfolio",
        status: "Completed",
        featured: false
    }
];

export const aboutMe = {
    intro: "I focus mainly on frontend development, creating clean interfaces and smooth user experiences. I work with modern technologies to build scalable and performant web applications. Alongside frontend development, I also have experience working with backend technologies to create complete full-stack solutions.",
    whatIDo: [
        "Build modern and responsive web applications",
        "Create interactive UI with React and modern tools",
        "Develop scalable frontend architectures",
        "Implement backend APIs when required"
    ],
    techStack: [
        {
            category: "Frontend",
            skills: ["React", "Tailwind", "HTML", "ShadCN-UI"],
            icon: Code
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express"],
            icon: Settings
        },
        {
            category: "Tools",
            skills: ["Figma", "Git"],
            icon: LayoutDashboard
        }
    ]
}