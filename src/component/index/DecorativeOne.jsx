export default function DecorativeOne(){
    return(
        <div className='cardTailwindAnim h-full flex flex-col items-center justify-center carBackground cardShadow
        relative overflow-hidden py-4'>
            <div className="relative z-10 flex-center flex-col items-center justify-between gap-2">
                <h1 className="text-5xl font-['Playfair'] font-bold numbers bg-gradient-to-l from-[var(--CTAbuttonColor2)]
                to-[var(--CTAbuttonColor1)] text-transparent bg-clip-text">UI/UX</h1>
                <p className="text-sm text-[var(--secondaryText)] uppercase tracking-wide">Keep Minimial</p>
            </div>
        </div>
    )
}