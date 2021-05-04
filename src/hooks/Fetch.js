async function fetchData(endpoint, options) {
  const petition = await fetch(`http://localhost:8080/${endpoint}, ${options}`)
  const jonson = await petition.json()
  return jonson
}

export default fetchData;