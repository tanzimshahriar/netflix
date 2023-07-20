const buttons = [
  'FAQ',
  'Help Centre',
  'Account',
  'Media Centre',
  'Investor relations',
  'Jobs',
  'Netflix Shop',
  'Redeem gift cards',
  'Buy gift cards',
  'Ways to watch',
  'Terms of Use',
  'Privacy',
  'Cookie Preferences',
  'Corporate information',
  'Contact us',
  'Speed test',
  'Legal notices',
  'Only on Netflix',
]

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-400">
      <div className="h-2 w-full bg-zinc-800"></div>
      <div className="container py-6 md:py-8 lg:py-12 xl:py-20">
        Questions? Phone{' '}
        <a href="1 800 404 982" className="underline">
          1 800 404 982
        </a>
        <div className="grid pt-4 text-sm sm:grid-cols-2 md:pt-6 lg:grid-cols-3 xl:grid-cols-4">
          {buttons.map((b) => (
            <button className="py-2 text-left underline" key={b}>
              {b}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
