const NoResultsFound = ({ keyword }: { keyword: string }) => {
  return (
    <div className="flex justify-center text-xs font-light xl:text-sm">
      <div>
        <p>Your search for "{keyword}" did not have any matches.</p>
        <div className="py-3">Suggestions:</div>
        <ul className="list-disc px-8">
          <li>Try different keywords</li>
          <li>Looking for a movie or TV show?</li>
          <li>Try using a keyword that matches the name</li>
        </ul>
      </div>
    </div>
  )
}

export default NoResultsFound
