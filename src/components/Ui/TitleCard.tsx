import Image from 'next/image'

const TitleCard = ({ titleData }: { titleData: TitleData }) => {
  return (
    <div className="relative h-[135px] w-[240px]">
      <button
        className="group absolute top-0 flex origin-top flex-col rounded-sm bg-zinc-800 text-white duration-200 hover:z-10 hover:scale-125"
        key={titleData.backdrop_path}
        onClick={() => {}}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w200${titleData.backdrop_path}`}
          alt="title-image"
          width={240}
          height={135}
          className="rounded-sm object-cover"
        />
        <p className="hidden group-hover:block">
          {titleData.name || titleData.title}
        </p>
      </button>
    </div>
  )
}

export default TitleCard

export interface TitleData {
  backdrop_path: string
  name?: string
  title?: string
  genre_ids: Array<string>
}
