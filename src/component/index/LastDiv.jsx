import astronut from '../../assets/images/astronut.svg'
import jupiter from '../../assets/images/jupiter.svg'
import earth from '../../assets/images/earth.svg'
import stars from '../../assets/images/stars.svg'

export default function LastDiv() {
    return (
        <div className='min-h-80 lg:h-full bentoWhiteCard
        bg-gradient-to-t from-gray-600/60 via-(--secondaryBackgroundColor) to-(--secondaryBackgroundColor) 
        overflow-hidden relative'
        style={{boxSizing: 'border-box'}}>
            <a href={'https://phurpasherpa-blog.vercel.app/'} target="blank" 
            className="bentoH1 text-6xl lg:text-4xl 2xl:text-5xl font-['Playfair'] relative bottom-5 z-20">Journal</a>
            <div className="absolute bottom-[-1rem] 2xl:left-3 left-0 z-20">
                <img src={astronut} alt="astronut" className="astronut h-50" />
            </div>
            <div className="absolute top-8 right-0">
                <img src={earth} alt="eart" className="earth h-30" />
            </div>
            <div className="absolute top-24 left-14 2xl:top-32">
                <img src={stars} alt="stars" className="h-6 2xl:h-12" />
            </div>
            <div className="absolute top-[-1rem] left-[-1.5rem]">
                <img src={jupiter} alt="jupter" className="jupiter h-30" />
            </div>
        </div>
    )
}