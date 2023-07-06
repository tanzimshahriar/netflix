'use client'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import SignupLetter from './SignupLetter'

const Faq = () => {
  const questions = [
    {
      question: 'What is Netflix?',
      answer: (
        <p>
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more on
          thousands of internet-connected devices.
          <br />
          <br />
          You can watch as much as you want, whenever you want – all for one low
          monthly price. There's always something new to discover, and new TV
          shows and movies are added every week!
        </p>
      ),
    },
    {
      question: 'How much does Netflix cost?',
      answer: (
        <p>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop or
          streaming device, all for one fixed monthly fee. Plans range from
          $6.99 to $22.99 per month. No extra costs, no contracts.
        </p>
      ),
    },
    {
      question: 'Where can I watch Netflix?',
      answer: (
        <p>
          Watch anywhere, at any time. Sign in with your Netflix account to
          watch instantly on the web at netflix.com from your personal computer
          or on any internet-connected device that offers the Netflix app,
          including smart TVs, smartphones, tablets, streaming media players and
          game consoles.
        </p>
      ),
    },
    {
      question: 'How do I cancel?',
      answer: (
        <p>
          Netflix is flexible. There are no pesky contracts and no commitments.
          You can easily cancel your account online in two clicks. There are no
          cancellation fees – start or stop your account at any time.
        </p>
      ),
    },
    {
      question: 'What can I watch on Netflix?',
      answer: (
        <p>
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix Originals and more. Watch as much
          as you want, at any time that you want.
        </p>
      ),
    },
    {
      question: 'Is Netflix good for kids?',
      answer: (
        <p>
          The Netflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and movies
          in their own space.
          <br />
          <br />
          Kids profiles come with PIN-protected parental controls that let you
          restrict the maturity rating of content kids can watch and block
          specific titles you don’t want kids to see.
        </p>
      ),
    },
  ]
  const [parent] = useAutoAnimate()
  const [open, setOpen] = useState(-1)

  return (
    <div className="bg-black">
      <div className="container">
        <div className="pb-8 pt-12 text-center text-3xl font-extrabold md:pt-24 md:text-5xl">
          Frequently Asked Questions
        </div>
        <div className="space-y-2 md:text-2xl">
          {questions.map((q, i) => (
            <div key={q.question} ref={parent}>
              <button
                className="flex w-full justify-between bg-zinc-800 p-6 duration-300 hover:bg-zinc-700"
                onClick={() => (open === i ? setOpen(-1) : setOpen(i))}
              >
                <p>{q.question}</p>
                <div className="relative">
                  <div
                    className={`absolute right-0 top-[7px] h-[2px] w-[16px] bg-white duration-300 md:top-3.5 md:h-1 md:w-8 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                  ></div>
                  <div
                    className={`absolute right-[8px] top-0 h-[16px] w-[2px] bg-white duration-300 md:right-3.5 md:top-0 md:h-8 md:w-1 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                  ></div>
                </div>
              </button>
              {i === open && (
                <p className="mt-0.5 w-full bg-zinc-800 p-6">{q.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-4 py-12">
          <SignupLetter />
        </div>
      </div>
    </div>
  )
}

export default Faq
