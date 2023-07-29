import { RequestType, getData } from '@/lib/requests'
import CollectionRow from '../Ui/CollectionRow'

const CollectionRowWrapper = async ({ title }: { title: RequestType }) => {
  const titles = await getData(title)

  if (titles?.results)
    return (
      <div className="relative px-4 md:px-8 lg:px-12 xl:px-16">
        <CollectionRow titles={titles} />
        <div className="absolute -top-8 text-xl text-zinc-200">{title}</div>
      </div>
    )
  else return null
}

export default CollectionRowWrapper
