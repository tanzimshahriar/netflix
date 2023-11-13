import Image from 'next/image'
import HeroText from './HeroText'
import UnauthNavbar from './UnauthNavbar'

const Hero = () => {
  return (
    <>
      <Image
        className="absolute -z-10 bg-black object-cover brightness-[35%]"
        fill
        src="/home-bg.jpg"
        alt="hero-background"
      />
      <div className="container flex flex-col">
        <UnauthNavbar />
        <HeroText />
      </div>
    </>
  )
}

export default Hero
