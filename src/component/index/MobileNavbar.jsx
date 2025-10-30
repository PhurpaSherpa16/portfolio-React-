import { useGSAP } from '@gsap/react'
import profilePicO from '../../assets/images/profileO.png'
import p1 from '../../assets/images/p1.jpg'
import MenuUlList from './MenuUlList'
import SocialIcons from './SocialIcons'
import gsap from 'gsap';



export default function MobileNavbar({mobileNavShow, handleMenuOpen}) {

    useGSAP(()=>{
        if (mobileNavShow){
            gsap.fromTo(
            '.mobileNavDiv',
            { xPercent: 40, opacity: 0, scale: 0},
            { xPercent: 0, opacity: 1, duration: 0.3, ease: "power2.inOut", scale: 1}
            );
        }
    else{
        gsap.fromTo(
            '.mobileNavDiv',
            { xPercent: 0, opacity: 1, scale: 1},
            { xPercent: 40, opacity: 0, duration: 0, ease: "power2.inOut", scale: 0}
            );
    }
    }, [mobileNavShow])

  return (
    <div className='mobileNavDiv origin-[30%_0%] scale-0 opacity-0 absolute left-0 top-20 md:top-30 z-30 p-4 md:p-8 w-full overflow-hidden'>
      <div className='bg-[var(--MenuBackground)] shadow-sm shadow-gray-200/60 rounded-xl
      border-2 border-[var(--NavHeroSplit)] overflow-hidden
      md:flex '>
        <div className='md:w-1/2 pl-8 lg:px-12 flex flex-col py-4 lg:py-8 gap-4 md:items-center md:justify-center'>
            <div className='flex justify-between md:items-center md:flex-col md:gap-2 w-full'>
                <div className='w-full md:pl-4 grid gap-2 md:gap-4'>
                    <img className='w-32 h-32 md:h-42 md:w-42 rounded-full' src={p1} alt="profile picture" />
                    <div className='w-full'>
                        <h1 className='text-xl md:text-3xl font-bold uppercase tracking-wider'>Phurpa Sherpa</h1>
                        <div>
                        <p className='text-lg md:text-2xl text-[var(--secondaryText)] font-medium tracking-wider'>Front-End Developer</p>
                        <div className='flex items-center gap-2'>
                            <div className='h-2 w-2 bg-green-500 rounded-full'/>
                            <p className='text-[var(--secondaryText)] text-sm tracking-wider'>Available for Work</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <SocialIcons/>
                </div>
            </div>
        </div>
        <div className='md:w-2/3 overflow-hidden'>
            <MenuUlList handleMenuOpen={handleMenuOpen}/>
        </div>
      </div>
    </div>
  )
}
