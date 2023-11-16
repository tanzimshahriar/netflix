import FullScreenVideoPlay from '@/components/Ui/FullScreenVideoPlay'
import { applyAuthContext } from '@/lib/authUtils'

const Watch = async ({ params }: { params: { id: string } }) => {
  await applyAuthContext()
  return (
    <main className="flex-1 bg-black bg-opacity-90 text-white">
      <FullScreenVideoPlay id={params.id} />
    </main>
  )
}

export default Watch
