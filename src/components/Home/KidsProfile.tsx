import Image from 'next/image'

const KidsProfile = () => {
  return (
    <div className="bg-black py-12">
      <div className="container grid items-center gap-x-4 md:grid-cols-2">
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

export default KidsProfile
