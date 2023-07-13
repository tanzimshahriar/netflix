import DownloadEverywhere from '@/components/Home/DownloadEverywhere'
import EnjoyTv from '@/components/Home/EnjoyTV'
import Faq from '@/components/Home/Faq'
import Hero from '@/components/Home/Hero'
import KidsProfile from '@/components/Home/KidsProfile'
import Plan from '@/components/Home/Plan'
import WatchEverywhere from '@/components/Home/WatchEverywhere'

const UnauthenticatedHome = () => {
  return (
    <div className="text-white">
      <Hero />
      <Plan />
      <EnjoyTv />
      <div className="h-2 w-full bg-black bg-opacity-80"></div>
      <WatchEverywhere />
      <div className="h-2 w-full bg-black bg-opacity-80"></div>
      <KidsProfile />
      <div className="h-2 w-full bg-black bg-opacity-80"></div>
      <DownloadEverywhere />
      <div className="h-2 w-full bg-black bg-opacity-80"></div>
      <Faq />
      <div className="h-2 w-full bg-black bg-opacity-80"></div>
    </div>
  )
}

export default function Home() {
  // const { user, isLoading, error } = useUser()
  // const router = useRouter()

  // if (isLoading) return <div>Loading...</div>
  // else if (error)
  //   return (
  //     <>
  //       <div>Some Error</div>
  //       <UnauthenticatedHome />
  //     </>
  //   )
  // else if (user) router.push('/browse')
  // else return <UnauthenticatedHome />
  return <UnauthenticatedHome />
}
