import Faq from '@/components/Home/Faq'
import Hero from '@/components/Home/Hero'
import Plan from '@/components/Home/Plan'
import SignupLetter from '@/components/Home/SignupLetter'
import Image from 'next/image'

const EnjoyTv = () => {
  return (
    <div className="bg-black py-12">
      <div className="container grid items-center md:grid-cols-2">
        <div className="space-y-4">
          <div className="text-center text-3xl font-extrabold md:text-left md:text-5xl">
            Enjoy on your TV
          </div>
          <div className="text-center font-medium md:text-left md:text-2xl">
            Watch titles on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/tv.png" alt="Tv" width="500" height="500" />
        </div>
      </div>
    </div>
  )
}

const WatchEverywhere = () => {
  return (
    <div className="bg-black py-12">
      <div className="container grid items-center md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image src="/watch-pile.png" alt="Tv" width="500" height="500" />
        </div>
        <div className="space-y-4">
          <div className="text-center text-3xl font-extrabold md:text-left md:text-5xl">
            Watch Netflix everywhere
          </div>
          <div className="text-center font-medium md:text-left md:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV.
          </div>
        </div>
      </div>
    </div>
  )
}

const KidsProfile = () => {
  return (
    <div className="bg-black py-12">
      <div className="container grid items-center md:grid-cols-2">
        <div className="space-y-4">
          <div className="text-center text-3xl font-extrabold md:text-left md:text-5xl">
            Create profiles for kids
          </div>
          <div className="text-center font-medium md:text-left md:text-2xl">
            Send kids on adventures with their favourite characters in a space
            made just for them — free with your membership.
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/kids.png" alt="Kids Profile" width="500" height="500" />
        </div>
      </div>
    </div>
  )
}

const DownloadEverywhere = () => {
  return (
    <div className="bg-black py-12">
      <div className="container grid items-center md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src="/download.jpg"
            alt="Download anywhere"
            width="500"
            height="500"
          />
        </div>
        <div className="space-y-4">
          <div className="text-center text-3xl font-extrabold md:text-left md:text-5xl">
            Download your shows to watch them offline
          </div>
          <div className="text-center font-medium md:text-left md:text-2xl">
            Only available on ad-free plans.
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
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
