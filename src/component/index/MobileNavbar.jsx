import { useGSAP } from '@gsap/react'
import p1 from '../../assets/images/p1.jpg'
import MenuUlList from './MenuUlList'
import gsap from 'gsap';
import { menuList } from '../../assets/data/Site'
import Footer from '../Footer';



export default function MobileNavbar({ mobileNavShow, handleMenuOpen }) {

    useGSAP(() => {
        if (mobileNavShow) {
            gsap.fromTo(
                '.mobileNavDiv',
                { xPercent: 40, opacity: 0, scale: 0 },
                { xPercent: 0, opacity: 1, duration: 0.3, ease: "power2.inOut", scale: 1 }
            );
        }
        else {
            gsap.fromTo(
                '.mobileNavDiv',
                { xPercent: 0, opacity: 1, scale: 1 },
                { xPercent: 40, opacity: 0, duration: 0, ease: "power2.inOut", scale: 0 }
            );
        }
    }, [mobileNavShow])

    return (
        <div className='mobileNavDiv bg-white/60 backdrop-blur-xl h-full w-full origin-[30%_0%] scale-0 opacity-0 absolute left-0 z-30 p-4 md:p-8 overflow-hidden'>
            <div className='pt-20 md:pt-30 relative'>
                <div className='bg-[var(--MenuBackground)] shadow-sm shadow-gray-200/60 rounded-xl border-2 border-[var(--NavHeroSplit)] overflow-hiddenmd:flex '>
                    <div className='md:w-1/2 p-8 py-6 lg:px-12 flex flex-col gap-4 md:items-center md:justify-center'>
                        <div className='flex justify-between md:items-center md:flex-col md:gap-2 w-full'>
                            <div className='w-full'>
                                <img className='size-16 rounded-full' src={p1} alt="profile picture" />
                                <div className='w-full'>
                                    <h1 className='text-xl md:text-3xl font-bold uppercase tracking-wider'>Phurpa Sherpa</h1>
                                    <div>
                                        <p className='text-lg md:text-2xl text-[var(--secondaryText)] font-medium tracking-wider'>Front-End Developer</p>
                                        <div className='flex items-center gap-2'>
                                            <div className='h-2 w-2 bg-green-500 rounded-full' />
                                            <p className='text-[var(--secondaryText)] text-sm tracking-wider'>Available for Work</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-2/3 overflow-hidden'>
                        <MenuUlList handleMenuOpen={handleMenuOpen} menuList={menuList}/>
                    </div>
                    <div className='p-4'>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}
