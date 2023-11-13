const NoResultsFound = ({ keyword }: { keyword: string }) => {
  return (
    <div>
      <p>Your search for "{keyword}" did not have any matches.</p>
      <div>Suggestions:</div>
      <ul>
        <li>Try different keywords</li>
        <li>Looking for a movie or TV show?</li>
        <li>Try using a keyword that matches the name</li>
      </ul>
    </div>
  )
}

export default NoResultsFound
