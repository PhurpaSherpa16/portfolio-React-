export default function Header({title, description}) {
    return (
        <div className="lg:pt-12 overflow-hidden">
            <div>
                <h1 className="Heading text-4xl font-bold font-serif">{title}</h1>
                <p className="subtitle max-w-2xl bentoP">{description}</p>
            </div>
        </div>
    )
}