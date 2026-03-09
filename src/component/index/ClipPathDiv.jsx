export default function ClipPathDiv({ text, variant }) {
  return (
    <div
      className={`clipTop ${variant ? 'bg-(--NavHeroSplit)' : 'bg-(--invertSecondaryText)'} p-8 w-full flex items-center justify-center`}>
      <p className="bentoP font-semibold tracking-wide">{text}</p>
    </div>
  )
}