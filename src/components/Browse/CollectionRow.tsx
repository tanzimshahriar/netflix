const CollectionRow = ({ title }: { title: string }) => {
  return (
    <div className="relative">
      <div className="flex overflow-scroll py-1">
        <div className="flex gap-1">
          {[...Array(20)].map((n) => (
            <div
              className="aspect-video w-52 rounded-md bg-zinc-800"
              key={n}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute -top-8 px-4 text-xl text-zinc-200 md:px-8 lg:px-12 xl:px-16">
        {title}
      </div>
    </div>
  )
}

export default CollectionRow
