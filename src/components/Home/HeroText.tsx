import SignupLetter from './SignupLetter'

const HeroText = () => {
  return (
    <div className="flex flex-col items-center space-y-4 py-16 md:py-28 lg:pt-36">
      <h1 className="text-center text-3xl font-extrabold lg:text-5xl">
        Unlimited movies, TV shows and more
      </h1>
      <h2 className="py-2 text-center text-xl font-medium lg:text-2xl">
        Watch anywhere. Cancel at any time.
      </h2>
      <SignupLetter />
    </div>
  )
}

export default HeroText
