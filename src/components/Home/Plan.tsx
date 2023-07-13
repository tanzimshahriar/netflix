import Image from 'next/image'
import Link from 'next/link'

const Plan = () => {
  return (
    <div className="bg-custom-gradient relative flex gap-4 px-8 py-12 sm:justify-center sm:px-0 md:py-8">
      <Image
        className="absolute -top-12 left-8 sm:static"
        src="/popcorn.png"
        alt="Popcorn"
        width="80"
        height="80"
      />
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold">
          The Netflix you love for just $6.99.
        </div>
        <div className="font-medium">Get the Standard with ads plan.</div>
        <Link
          className="flex gap-2 font-bold text-blue-500 underline"
          href="/signup"
        >
          Learn more
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="ChevronRight"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Plan
