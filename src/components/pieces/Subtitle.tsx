
const Subtitle = ({subtitle}: {subtitle: string}) => {
  return (
    <div className="flex gap-4 items-center mt-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
        <h2 className="text-2xl font-bold text-text-main font-handwritten">{subtitle}</h2>
    </div>
  )
}

export default Subtitle