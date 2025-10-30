import { Link, useLocation } from 'react-router-dom'
import Content from '../../assets/data/Content.json'
import p0 from '../../assets/images/profileDefault.png'
import p1 from '../../assets/images/profileDarkAmin.png'
import p2 from '../../assets/images/profileLightAnim.png'
import { useTheme } from '../themeHandler/ThemeProvider';
import { BsFacebook, BsGithub, BsInstagram, BsX } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa";


export default function Navbar() {
  const {theme} = useTheme()

  const pathName = useLocation().pathname


  return (
    <div className='w-full relative lg:h-full'>
      <div className='w-full flex flex-col justify-between h-full'>
        {/* Profile Picture*/}
        <div className='flex items-end justify-between'>
          <div className='px-4 lg:px-12 flex flex-col py-4 lg:py-8 gap-2 lg:gap-6'>
            <img className='h-16 w-fit lg:h-42 lg:w-42 rounded-full' 
            // src={theme === 'light' ? p2 : p1} 
            src={p0}
            alt="profile picture" />
            <div>
              <h1 className='text-lg lg:text-2xl font-bold uppercase tracking-wide'>Phurpa Sherpa</h1>
              <div>
                <p className='text-[var(--secondaryText)] font-medium'>Front-End Developer</p>
                <div className='flex items-center gap-2'>
                  <div className='h-2 w-2 bg-green-500 rounded-full'/>
                  <p className='text-[var(--secondaryText)] text-sm'>Available for Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below Profile */}
        <div className='h-full lg:flex flex-col justify-between hidden'>

          {/* Menu Items */}
          <ul className="grid">
            {Content.navbarMenu.map((item, index) => {
              const isActive = pathName === item.path;
              const iconFile =
                theme === "light" ? isActive ? `${item.icon}Dark.png`: `${item.icon}.png`     // light + inactive
                  : isActive? `${item.icon}Dark.png`: `${item.icon}Dark.png`
              return (
                <li
                  key={index}
                  className={`button px-8 py-2 relative overflow-hidden
                    ${isActive 
                      ? "bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)] gradient-border" 
                      : "before:absolute before:inset-0 before:bg-[var(--primaryHoverColor)] before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"}`}>
                  <Link
                    to={item.path}
                    target={item.target?'_blank':'_self'}
                    className={`relative p-4 flex items-center cursor-pointer gap-6
                      ${theme === "light"
                        ? isActive ? "text-white" : "text-black"
                        : isActive ? "text-white" : "text-white"}`}>
                    <img src={`/icons/${iconFile}`} alt="icons" className="h-[1.5vw] w-[1.5vw]"/>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>


          {/* Footer Part */}
          <div className='w-full px-12 grid gap-2 p-4'>
            <div className='flex justify-between items-center'>
              <a href="https://github.com/PhurpaSherpa16" target='blank' title='Gitbub'>
                <BsGithub className='h-[1.6vw] w-fit 
                hover:text-[var(--CTAbuttonColor1)] rounded-full cardShadow'/>
              </a>
              <a href="https://www.instagram.com/" target='blank' title='Instagram'>
                <BsInstagram className='h-[1.6vw] w-fit hover:text-[var(--CTAbuttonColor1)] rounded-lg cardShadow'/>
              </a>
              <a href="https://www.x.com/" target='blank' title='X'>
                <BsX className='h-[2.2vw] w-fit hover:text-[var(--CTAbuttonColor1)]'/>
              </a>
              <a href="https://www.linkedin.com/in/phurpa-sherpa-260a3a121/" target='blank' title='Linkedin'>
                <FaLinkedin className='h-[1.6vw] w-fit hover:text-[var(--CTAbuttonColor1)] cardShadow'/>
              </a>
            </div>
            <h6 className='text-xs text-center button'>© 2025, Crafted with ❤️ <br />|| Built with React & Tailwind </h6>
          </div>
        </div>
      </div>
    </div>
  )
}
