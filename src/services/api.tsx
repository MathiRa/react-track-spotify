const redirect = () => {
    window.location.href = "/";
}

const getSearchResults = async (setActiveToken: any, code: string, activeToken: string, wordToSearch = '', offset = 0, urlPagination = '') => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const paginate = process.env.REACT_APP_API_PAGINATE
    let token = activeToken;
    if (!activeToken) {
        const tokenResponse = await getToken(code)
        token = tokenResponse?.access_token
        setActiveToken(token)
    }
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
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (!response.ok) {
            throw Error("Response Not Ok")
        }
        return response;
    }).then(response => response.json()).then(({ tracks }) => {
        return tracks
    }).catch(error => { return redirect(); })
}

const getToken = async (code: string) => {
    const apiUrlGetToken = process.env.REACT_APP_API_URL_GET_TOKEN || '';
    const redirectUrl = process.env.REACT_APP_REDIRECT_URI || ''
    return fetch(apiUrlGetToken, {
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + process.env.REACT_APP_API_SECRET,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            "code": code,
            "grant_type": 'client_credentials',
            "redirect_uri": redirectUrl
        })
    }).then(response => {
        if (!response.ok) {
            throw Error("Response Not Ok")
        }
        return response;
    }).then(response => response.json()).then((data) => {
        return data
    }).catch(error => { return redirect(); })
}
export default getSearchResults