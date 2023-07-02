const SignupLetter = () => {
  return (
    <>
      <div className="text-center text-xl font-medium lg:text-2xl">
        Ready to watch Netflix? Enter your email to create or restart your
        membership.
      </div>
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-4">
        <input
          className="h-14 rounded-md border border-gray-500 bg-black bg-opacity-30 px-4 sm:w-72 md:w-96"
          type="email"
          placeholder="Email address"
        ></input>
        <button className="rounded-md bg-red-600 px-4 py-2 font-semibold md:text-xl">
          Get Started
        </button>
      </div>
    </>
  )
}

export default SignupLetter
