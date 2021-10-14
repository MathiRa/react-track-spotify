import TextField from '@mui/material/TextField';
import getSearchResults from '../services/api';
import Spotify from './img/spotify.png'
import { SearchWrapper } from './style';

export default function Search({ setTracks,setSearchTrack,setNexPagination }: any) {

    const getResults = async (event: any) => {
        const searchQuery = event.target.value;
        const result=await getSearchResults(searchQuery)
        setTracks(result)
        setNexPagination(result.next)
    }

    return (
        <SearchWrapper className='search'>
            <TextField id="search" fullWidth label="Search song" onChange={getResults} variant="outlined" />
            <img src={Spotify} alt="spotify logo" />
        </SearchWrapper>
    );
}