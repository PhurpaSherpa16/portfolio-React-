import { Code, CodeXml } from 'lucide-react';
import { BsEmojiExpressionless } from 'react-icons/bs';
import { FaFigma } from 'react-icons/fa';
import {
    RiReactjsFill,
    RiTailwindCssFill,
    RiNodejsFill,
    RiNextjsFill,
    RiFirebaseFill,
    RiDatabase2Fill,
    RiJavascriptFill,
    RiCss3Fill,
    RiMagicFill,
    RiStackFill,
    RiCodeSSlashFill,
    RiHtml5Fill,
    RiJavascriptLine,
    RiGithubFill
} from 'react-icons/ri';

export default function gettingIconOfTech(tech) {
    const techMap = {
        'React': <RiReactjsFill className="inline-block size-4" />,
        'Tailwind': <RiTailwindCssFill className="inline-block size-4" />,
        'Node.js': <RiNodejsFill className="inline-block size-4" />,
        'Firebase': <RiFirebaseFill className="inline-block size-4" />,
        'Supabase': <RiDatabase2Fill className="inline-block size-4" />,
        'JavaScript': <RiJavascriptFill className="inline-block size-4 " />,
        'GSAP': <RiMagicFill className="inline-block size-4" />,
        'MUI': <RiStackFill className="inline-block size-4" />,
        'CSS': <RiCss3Fill className="inline-block size-4" />,
        'Shadcn': <RiCodeSSlashFill className="inline-block size-4" />,
        'Figma': <FaFigma className="inline-block size-4" />,
        'ShadCN-UI': <Code className="inline-block size-4" />,
        'HTML': <RiHtml5Fill className="inline-block size-4" />,
        'Express': <RiJavascriptLine className="inline-block size-4" />,
        'Git': <RiGithubFill className="inline-block size-4" />,
    };

    return techMap[tech] || <RiCodeSSlashFill className="inline-block size-4" />;
}