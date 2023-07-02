import Image from 'next/image'
import Navbar from './Navbar'
import HeroText from './HeroText'

const Hero = () => {
  return (
    <>
      <Image
        className="absolute -z-10 object-cover brightness-[35%]"
        fill
        src="/home-bg.jpg"
        alt="hero-background"
      />
      <div className="container flex flex-col">
        <Navbar />
        <HeroText />
      </div>
    </>
  )
}

export default Hero
