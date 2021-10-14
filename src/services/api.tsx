const getSearchResults = async (wordToSearch = '', offset = 0, urlPagination = '') => {
    const apiUrl=process.env.REACT_APP_API_URL;
    const tokenSpotify=process.env.REACT_APP_TOKEN_SPOTIFY;
    const access_token = tokenSpotify
    const paginate=process.env.REACT_APP_API_PAGINATE
      let url = urlPagination
    if (urlPagination === '') {
        const fetchURL = encodeURI(`q=${wordToSearch}`);

        url = `${apiUrl}?${fetchURL}&type=track&limit=${paginate}`
        if (offset > 0) {
            url += `&offset=${offset}`
        }
    }
    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }).then(response => {
        if (!response.ok) {
            throw Error("Response Not Ok")
        }
        return response;
    }).then(response => response.json()).then(({ tracks }) => {
        return tracks
    }).catch(error => [])
}
export default getSearchResults