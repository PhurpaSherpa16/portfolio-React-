import ExpenseTracker from '../images/ExpenseTracker.png'
import NGO from '../images/project3.png'
import portfolio from '../images/project2.png'
import react from '../../assets/images/react.svg'
import figma from '../../assets/images/figma.svg'
import html from '../../assets/images/html.svg'
import javascript from '../../assets/images/javascript.svg'
import tailwind from '../../assets/images/tailwind.svg'

export const projects = [
    {
    title: "Personal Portfolio",
    desc: "A modern portfolio website to showcase my skills, projects, and journey. It highlights my work with clean design and smooth animations, making it easier for visitors to explore who I am and what I do.",
    tech: ["Next.js", "Tailwind", "GSAP"],
    image: ExpenseTracker,
    path:'https://expense-tracker-phurpa.netlify.app'
    },
    {
    title: "NGO Website",
    desc: "A responsive website built for a non-profit organization to share their mission, showcase projects, and connect with supporters. It simplifies outreach and provides a platform for donations and volunteering.",
    tech: ["React", "Firebase", "MUI"],
    image: NGO,
    path:'https://himanitrust.netlify.app'
    },
    {
    title: "Portfolio",
    desc: "A minimal blogging site where users can explore articles, categories, and featured posts. It’s designed for smooth reading and helps writers share ideas with clarity and style.",
    tech: ["Next.js", "Markdown", "Vercel"],
    image: portfolio,
    path:'https://phurpasherpa-portfolio.netlify.app'
    }
]

export const SliderSkills = [
    {
        name: 'React',
        icon:react,
        image: 'https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg'
    },
    {
        name: 'Tailwind',
        icon: tailwind,
        image: 'https://res.cloudinary.com/ds8pgw1pf/image/upload/v1737413490/penguinui/blog/tailwind_css_v4_released.png'
    },
    {
        name: 'Javascript',
        icon:javascript,
        image: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg'
    },
    {
        name: 'HTML',
        icon: html,
        image: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.jpg'
    },
    {
        name: 'Figma',
        icon: figma,
        image: 'https://cdn.sanity.io/images/599r6htc/regionalized/3225dab2b34419e6bc17bf52633ed13b4e86cd6d-3262x1836.jpg?rect=1,0,3260,1836&w=1632&h=919&q=75&fit=max&auto=format'
    },
]