import TextField from '@mui/material/TextField';
import getSearchResults from '../../services/api';
import Spotify from './img/spotify.png'
import { SearchWrapper } from './style';


export default function Search({ setTracks, setNexPagination, code, activeToken, setActiveToken }: any) {
    const getResults = async (event: any) => {
        const searchQuery = event.target.value;
        if (searchQuery && searchQuery.length > 0) {
            const result = await getSearchResults(setActiveToken, code, activeToken, searchQuery)
            setTracks(result)
            setNexPagination(result?.next)
        }else{
            setTracks([])
        }
    }

    return (
        <SearchWrapper className='search'>
            <TextField id="search" fullWidth label="Search song" onChange={getResults} variant="outlined" />
            <img src={Spotify} alt="spotify logo" />
        </SearchWrapper>
    );
}
