import { Link, useLocation } from 'react-router-dom'
import { menuList } from '../../assets/data/Site'
import p0 from '../../assets/images/profileDefault.png'
import Footer from '../Footer';

export default function Navbar() {
  const pathName = useLocation().pathname
  return (
    <div className='w-full relative lg:h-full'>
      <div className='w-full flex flex-col justify-between h-full'>
        {/* Profile Picture*/}
        <div className='flex items-end justify-between pt-8 pb-4'>
          <div className='px-4 flex flex-col py-4 gap-4'>
            <img className='h-16 w-fit size-24 rounded-full' src={p0}
            alt="profile picture" />
            <div>
              <h1 className='bentoH1'>Phurpa Sherpa</h1>
              <div>
                <p className='bentoP'>Front-End Developer</p>
                <div className='flex items-center gap-2'>
                  <div className='relative size-4 flex items-center justify-center rounded-full bg-green-500/10 border
                  border-(--NavHeroSplit)'>
                    <div className='size-2 bg-green-500 rounded-full'/>
                  </div>
                  <p className='bentoP'>Available for Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below Profile */}
        <div className='h-full lg:flex flex-col justify-between hidden'>
          {/* Menu Items */}
          <ul className="grid">
            {menuList.map((item, index) => {
              const isActive = pathName === item.path;
              return (
                <li key={index} className={`button py-2 relative overflow-hidden
                    ${isActive 
                      ? "bg-indigo-200/30 border-t border-b border-(--NavHeroSplit) text-(--primaryTextColor)" 
                      : "before:absolute before:inset-0 before:bg-[var(--primaryHoverColor)] before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"}`}>
                  <Link to={item.path} target={item.target?'_blank':'_self'}
                    className={`relative text-sm p-4 flex items-center cursor-pointer gap-2`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <Footer/>
        </div>
      </div>
    </div>
  )
}
