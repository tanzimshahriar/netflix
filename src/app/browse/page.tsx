import Navbar from '@/components/Browse/Navbar'
import AutoplayHero from '@/components/Ui/AutoplayHero'
import { applyAuthContext } from '@/lib/authUtils'

const Browse = async () => {
  await applyAuthContext()

  return (
    <div>
      <AutoplayHero />
      <Navbar />
    </div>
  )
}

export default Browse
