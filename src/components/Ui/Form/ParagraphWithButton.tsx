'use client'

import { useState } from 'react'

const ParagraphWithButton = () => {
  const [showLearnMore, setShowLearnMore] = useState(false)
  return (
    <div className="text-xs font-light text-zinc-400">
      <p className="py-2">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <button
          onClick={() => setShowLearnMore(!showLearnMore)}
          className="px-1 font-light text-blue-500 hover:underline"
        >
          Learn more.
        </button>
      </p>
      {showLearnMore && (
        <p className="pt-1">
          The information collected by Google reCAPTCHA is subject to the Google
          <button className="px-1 font-light text-blue-500 hover:underline">
            Privacy Policy
          </button>
          and{' '}
          <button className="px-1 font-light text-blue-500 hover:underline">
            Terms of Service
          </button>{' '}
          and is used for providing, maintaining and improving the reCAPTCHA
          service and for general security purposes (it is not used for
          personalised advertising by Google).
        </p>
      )}
    </div>
  )
}

export default ParagraphWithButton
