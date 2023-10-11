import Image from 'next/image'
import { RefObject } from 'react'

const NavigateRowButton = ({
  type,
  containerRef,
}: {
  type: 'left' | 'right'
  containerRef: RefObject<HTMLDivElement>
}) => {
  return (
    <button
      className={`group absolute top-0 z-10 flex h-full items-center justify-center bg-zinc-800 text-white md:w-8 lg:w-12 xl:w-16 ${
        type == 'right' ? 'left-0' : 'right-0'
      }`}
      onClick={() => {
        if (containerRef.current) {
          if (type == 'right') {
            containerRef.current.scrollLeft += -736
          } else if (type == 'left') {
            containerRef.current.scrollLeft += 736
          }
        }
      }}
    >
      <Image
        className={`invert duration-300 group-hover:scale-125 ${
          type == 'right' ? 'rotate-180' : ''
        }`}
        src="/right.png"
        alt={`${type}-icon`}
        width={30}
        height={30}
      />
    </button>
  )
}

export default NavigateRowButton
