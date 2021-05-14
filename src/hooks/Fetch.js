async function fetchData(endpoint, options) {
  try {
    const petition = await fetch(`http://localhost:8080/${endpoint}`, options)
    const jonson = await petition.json()
    return jonson
  } catch (err) {
    return {
      error: "No se ha podido realizar la petición.",
      fetchErr: err
    }
  }
}

export default fetchData;